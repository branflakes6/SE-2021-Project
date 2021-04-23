const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const scenarios = admin.firestore().collection("scenarios");
const scenarioResponses = admin.firestore().collection("responses");
const users = admin.firestore().collection("users");
const ranks = ["novice", "expert"];

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
  response.status(200);
});

exports.submitResponse = functions.https.onCall(async (data, context) => {

  if(!context.auth){
    throw new functions.https.HttpsError('unauthorized', '');
  }

  if(!data.scenario || !data.choice){
    throw new functions.https.HttpsError('invalid-argument', '');
  }

  let answers = await scenarioResponses.doc(data.scenario).get();
  answers = answers.data();

  if(!answers[data.choice]){
    throw new functions.https.HttpsError('invalid-argument', '');
  }

  let userDoc = users.doc(context.auth.uid);
  let user = await userDoc.get();

  let userRank = user.data().score;
  let rankName = "novice";
  if(userRank > 100){
    rankName = "expert";
  }

  const selection = answers[data.choice];
  const total = answers.total;
  const rankIndex = ranks.indexOf(rankName);

  let rankChange = 0.0;
  for(var i = 0; i < ranks.length; i++){
    let rank = ranks[i];
    let proportion = selection[rank]/total[rank];
    rankChange += (i - rankIndex)*proportion;
  }

  userDoc.update({
      scePlayed: admin.firestore.FieldValue.increment(1),
      score: admin.firestore.FieldValue.increment(rankChange)
  });

  scenarioResponses.doc(data.scenario).update({
    [`${data.choice}.${rankName}`]: admin.firestore.FieldValue.increment(1),
    [`total.${rankName}`]: admin.firestore.FieldValue.increment(1)
  });

  return;
});

exports.createUserData = functions.auth.user().onCreate((user) => {
  const userData = {
    bio: "",
    userName: "",
    contribs: 0,
    scePlayed: 0,
    score: 0,
  };
  return users.doc(user.uid).set(userData);
});

exports.deleteUserData = functions.auth.user().onDelete((user) => {
  return users.doc(user.uid).delete();
});

exports.createScenarioResponses = functions.https.onCall(async (data, context) =>{

  let masterlist = await scenarios.doc("masterList").get();
  let scenarioList = masterlist.data().Scenarios;

  let scenarioResponseCol = admin.firestore().collection("responses");

  for(sce in scenarioList){
    let scenarioData = await scenarios.doc(scenarioList[sce].id).get();
    if(scenarioData.exists){
      let scenarioDoc = scenarioResponseCol.doc(scenarioList[sce].id).get();
      if(!scenarioDoc.exists){
        let scenarioResponseData = {
          call:{
            expert:0,
            novice:0
          },
          fold:{
            expert:0,
            novice:0
          },
          total:{
            expert:0,
            novice:0
          }
        }
        if(scenarioData.data().raiseOptions){
          for(let i =0; i < scenarioData.data().raiseOptions.numRaises; i++){
            scenarioResponseData[`raise${i}`] = {
              expert:0,
              novice:0
            };
          }
        }
        else{
          scenarioResponseData.raise = {
            expert:0,
            novice:0
          };
        }
        scenarioResponseCol.doc(scenarioList[sce].id).set(scenarioResponseData);
      }
    }
  }

});