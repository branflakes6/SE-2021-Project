<template>
  <div id="main-div">
    <div v-if="loaded">
    <scenario v-bind:scenarioParams="scenarioParams"></scenario>
    </div>
  </div>
</template>

<script>
import scenario from "./scenario";
import db from "../firebase";
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
      },
      opponentTwoParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
      },
      opponentThreeParams: {
        cardOne: "cover",
        cardTwo: "cover",
      },
      opponentFourParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
      },
      opponentFiveParams: {
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 30,
      },
    },
    }
  },
  created() {
    this.sID = this.$route.params.scenarioID
    db.collection('scenarios').get().then(doc =>{
      console.log(doc)
    })
    
    db.collection('scenarios').doc(this.sID).get().then(doc => {

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

      this.scenarioParams.foldType = doc.data().fold.type
      this.scenarioParams.foldText = doc.data().fold.text

      this.scenarioParams.userParams.cardOne = doc.data().player.hand[0]
      this.scenarioParams.userParams.cardTwo = doc.data().player.hand[1]

      this.scenarioParams.opponentOneParams.cardOne = doc.data().players.player2.hand[0]
      this.scenarioParams.opponentOneParams.cardTwo = doc.data().players.player2.hand[1]
      this.scenarioParams.opponentOneParams.chipsAvailable = doc.data().players.player2.money.available
      this.scenarioParams.opponentOneParams.name = doc.data().players.player2.name
  
        if (this.scenarioParams.numOfOpponents > 1)
        {
          this.scenarioParams.opponentTwoParams.cardOne = doc.data().players.player3.hand[0]
          this.scenarioParams.opponentTwoParams.cardTwo = doc.data().players.player3.hand[1]
          this.scenarioParams.opponentTwoParams.chipsAvailable = doc.data().players.player3.money.available
          this.scenarioParams.opponentTwoParams.name = doc.data().players.player3.name
        }

        if (this.scenarioParams.numOfOpponents > 2)
       {
          this.scenarioParams.opponentThreeParams.cardOne = doc.data().players.player4.hand[0]
          this.scenarioParams.opponentThreeParams.cardTwo = doc.data().players.player4.hand[1]
          this.scenarioParams.opponentThreeParams.chipsAvailable = doc.data().players.player4.money.available
          this.scenarioParams.opponentThreeParams.name = doc.data().players.player4.name
        }

        if (this.scenarioParams.numOfOpponents > 3)
        {
          this.scenarioParams.opponentFourParams.cardOne = doc.data().players.player5.hand[0]
          this.scenarioParams.opponentFourParams.cardTwo = doc.data().players.player5.hand[1]
          this.scenarioParams.opponentFourParams.chipsAvailable = doc.data().players.player5.money.available
          this.scenarioParams.opponentFourParams.name = doc.data().players.player5.name
        }

       if (this.scenarioParams.numOfOpponents > 4)
        {
          this.scenarioParams.opponentFiveParams.cardOne = doc.data().players.player4.hand[0]
          this.scenarioParams.opponentFiveParams.cardTwo = doc.data().players.player4.hand[1]
          this.scenarioParams.opponentFiveParams.chipsAvailable = doc.data().players.player6.money.available
          this.scenarioParams.opponentFiveParams.name = doc.data().players.player6.name

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
