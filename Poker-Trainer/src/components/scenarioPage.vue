<template>
  <div id="main-div">
    <div v-if="loaded">
    <scenario v-bind:scenarioParams="scenarioParams"></scenario>
    </div>
  </div>
</template>

<script>
import scenario from "./scenario";
import firebase from "../firebase";
const db = firebase.firestore();
export default {
  components: {
    scenario,
  },
  data () {
    return {
    sID: null,
    clicked: false,
    loaded: false,
    showCards: false,
    title:  "",
    dCards: "",
    
      scenarioParams: {
      id: "",
      title: "Sample Scenario",
      context: "",
      dealer: 1,
      callType: "",
      foldType: "",
      raiseType: "",
      callText: "",
      raiseText: "",
      foldText: "",
      numOfOpponents: 5,
      cardsOnTable: [],
      raiseOptions: {
          numRaises: 0,
          raise1: 0,
          raise2: 0,
          raise3: 0,
          correctRaise: 0,
        },
      userParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
      },
      opponentOneParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
        attributes:"",
        prevMove:"",
      },
      opponentTwoParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
        attributes:"",
        prevMove:"",
      },
      opponentThreeParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
        attributes:"",
        prevMove:"",
      },
      opponentFourParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
        attributes:"",
        prevMove:"",
      },
      opponentFiveParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
        attributes:"",
        prevMove:"",
      },
    },
    }
  },
  created() {
    this.sID = this.$route.params.scenarioID  
    db.collection('scenarios').doc(this.sID).get().then(doc => {

      this.scenarioParams.id=this.sID

      this.scenarioParams.numOfOpponents = doc.data().numPlayers
      this.scenarioParams.showCardsAfter = doc.data().showCards
      this.scenarioParams.title = doc.data().title
      this.dCards = doc.data().dCards

      for(var i = 0; i < this.dCards; i++){
        this.scenarioParams.cardsOnTable[i] = doc.data().tableCards[i]
      }

      this.scenarioParams.dealer = doc.data().dealer
      this.scenarioParams.context = doc.data().stateOfPlay
     
      this.scenarioParams.callType = doc.data().call.type
      this.scenarioParams.callText = doc.data().call.text

      this.scenarioParams.raiseType = doc.data().raise.type
      this.scenarioParams.raiseText = doc.data().raise.text
      this.scenarioParams.raiseOptions.numRaises = doc.data().raiseOptions.numRaises
      this.scenarioParams.raiseOptions.raise1 = doc.data().raiseOptions.raise1
      this.scenarioParams.raiseOptions.raise2 = doc.data().raiseOptions.raise2
      this.scenarioParams.raiseOptions.raise3 = doc.data().raiseOptions.raise3
      this.scenarioParams.raiseOptions.correctRaise = doc.data().raiseOptions.correctRaise


      this.scenarioParams.foldType = doc.data().fold.type
      this.scenarioParams.foldText = doc.data().fold.text

      this.scenarioParams.userParams.cardOne = doc.data().player.hand[0]
      this.scenarioParams.userParams.cardTwo = doc.data().player.hand[1]

      this.scenarioParams.opponentOneParams.cardOne = doc.data().players.player2.hand[0]
      this.scenarioParams.opponentOneParams.cardTwo = doc.data().players.player2.hand[1]
      this.scenarioParams.opponentOneParams.chipsAvailable = doc.data().players.player2.money.available
      this.scenarioParams.opponentOneParams.name = doc.data().players.player2.name
      this.scenarioParams.opponentOneParams.attributes = doc.data().players.player2.attributes
      this.scenarioParams.opponentOneParams.prevMove = doc.data().players.player2.prevMove
  
        if (this.scenarioParams.numOfOpponents > 1)
        {
          this.scenarioParams.opponentTwoParams.cardOne = doc.data().players.player3.hand[0]
          this.scenarioParams.opponentTwoParams.cardTwo = doc.data().players.player3.hand[1]
          this.scenarioParams.opponentTwoParams.chipsAvailable = doc.data().players.player3.money.available
          this.scenarioParams.opponentTwoParams.name = doc.data().players.player3.name
          this.scenarioParams.opponentTwoParams.attributes = doc.data().players.player3.attributes
          this.scenarioParams.opponentTwoParams.prevMove = doc.data().players.player3.prevMove
        }

        if (this.scenarioParams.numOfOpponents > 2)
       {
          this.scenarioParams.opponentThreeParams.cardOne = doc.data().players.player4.hand[0]
          this.scenarioParams.opponentThreeParams.cardTwo = doc.data().players.player4.hand[1]
          this.scenarioParams.opponentThreeParams.chipsAvailable = doc.data().players.player4.money.available
          this.scenarioParams.opponentThreeParams.name = doc.data().players.player4.name
          this.scenarioParams.opponentThreeParams.attributes = doc.data().players.player4.attributes
          this.scenarioParams.opponentThreeParams.prevMove = doc.data().players.player4.prevMove
        }

        if (this.scenarioParams.numOfOpponents > 3)
        {
          this.scenarioParams.opponentFourParams.cardOne = doc.data().players.player5.hand[0]
          this.scenarioParams.opponentFourParams.cardTwo = doc.data().players.player5.hand[1]
          this.scenarioParams.opponentFourParams.chipsAvailable = doc.data().players.player5.money.available
          this.scenarioParams.opponentFourParams.name = doc.data().players.player5.name
          this.scenarioParams.opponentFourParams.attributes = doc.data().players.player5.attributes
          this.scenarioParams.opponentFourParams.prevMove = doc.data().players.player5.prevMove
        }

       if (this.scenarioParams.numOfOpponents > 4)
        {
          this.scenarioParams.opponentFiveParams.cardOne = doc.data().players.player6.hand[0]
          this.scenarioParams.opponentFiveParams.cardTwo = doc.data().players.player6.hand[1]
          this.scenarioParams.opponentFiveParams.chipsAvailable = doc.data().players.player6.money.available
          this.scenarioParams.opponentFiveParams.name = doc.data().players.player6.name
          this.scenarioParams.opponentFiveParams.attributes = doc.data().players.player6.attributes
          this.scenarioParams.opponentFiveParams.prevMove = doc.data().players.player6.prevMove

        }
      
      this.loaded = true;
    })
  },
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
