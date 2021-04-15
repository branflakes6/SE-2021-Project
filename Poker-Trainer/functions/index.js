const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const scenarios = admin.firestore().collection("responses");
const users = admin.firestore().collection("users");
const ranks = ["novice", "expert"];

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.submit = functions.https.onRequest((request, response) => {
  if (request.method != 'POST'){
    return response.status(500).json({
      message: 'Not allowed'
    });
  }

  // if(!request.headers.authorization){
  //   return response.status(401);
  // }  

  // admin.auth().verifyIdToken(idToken).then((decodedToken) => {
  //   const uid = decodedToken.uid;

  //   console.log(uid);

  if(!request.body.scenario || !request.body.choice){
    return response.status(400).json({
      messasge: 'Bad Request'
    });
  }

  console.log(request.body);

  let scenario = scenarios.doc(request.body.scenario);
  scenario.get().then((answer) => {
    const answers = answer.data();

    if(!answers[request.body.choice]){
      return response.status(400).json({
        message: "Invalid selection"
      });
    }

    const userRank = 110;
    let rankName = "novice";
    if(userRank > 100){
      rankName = "expert";
    }

    const selection = answers[request.body.choice];
    const total = answers.total;
    const rankIndex = ranks.indexOf(rankName);
    console.log(rankIndex);

    console.log(selection);
    console.log(total);
    
    let rankChange = 0.0;
    for(var i = 0; i < ranks.length; i++){
      let rank = ranks[i];
      let proportion = selection[rank]/total[rank];
      console.log(proportion);
      console.log(i - rankIndex);
      rankChange += (i - rankIndex)*proportion;
    }

    console.log(rankChange);

    let userDoc = users.doc(uid);
    userDoc.update({
        history: {
          response: selection,
          scenario: scenario,
          time: new Date()
        },
        completed: firebase.firestore.FieldValue.increment(1)
    });

    return response.status(200).json({
      change: rankChange
    });
  });

  // })
  // .catch((error) => {
  //   return response.status(401);
  // })

});

exports.createUserData = functions.auth.user().onCreate((user) => {
  const uid = user.uid;
  const userData = {
    completed: 0,
    history: [],
    rank: 0
  };
  users.doc(uid).set(userData);
});