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
  data: () => ({
    clicked: false,
    loaded: false,
    showCards: false,
    title:  "",
      scenarioParams: {
      title: "Sample Scenario",
      context: "",
      numOfOpponents: 5,
      cardsOnTable: {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
        fourthCard: "",
        fifthCard: "",
        sixthCard: "",
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
  }),
  created() {
    const scenarioID = "WXSyM3c4DHKftSwMUafW";
    db.collection('scenarios').doc(scenarioID).get().then(doc => {

      this.scenarioParams.showCardsAfter = doc.data().showCards
      this.scenarioParams.title = doc.data().title
      this.scenarioParams.cardsOnTable.secondCard = doc.data().tableCards[0]
      this.scenarioParams.cardsOnTable.thirdCard = doc.data().tableCards[1]
      this.scenarioParams.cardsOnTable.fourthCard = doc.data().tableCards[2]
      this.scenarioParams.cardsOnTable.fifthCard = doc.data().tableCards[3]
      this.scenarioParams.cardsOnTable.sixthCard = doc.data().tableCards[4]

      this.scenarioParams.userParams.cardOne = doc.data().player.hand[0]
      this.scenarioParams.userParams.cardTwo = doc.data().player.hand[1]

      this.scenarioParams.opponentOneParams.chipsAvailable = doc.data().players.player2.money.available
      this.scenarioParams.opponentTwoParams.chipsAvailable = doc.data().players.player3.money.available
      this.scenarioParams.opponentThreeParams.chipsAvailable = doc.data().players.player4.money.available
      this.scenarioParams.opponentFourParams.chipsAvailable = doc.data().players.player5.money.available
      this.scenarioParams.opponentFiveParams.chipsAvailable = doc.data().players.player6.money.available
      
      this.scenarioParams.opponentOneParams.name = doc.data().players.player2.name
      this.scenarioParams.opponentTwoParams.name = doc.data().players.player3.name
      this.scenarioParams.opponentThreeParams.name = doc.data().players.player4.name
      this.scenarioParams.opponentFourParams.name = doc.data().players.player5.name
      this.scenarioParams.opponentFiveParams.name = doc.data().players.player6.name
      
    
      if(doc.data().showCards){ 

          this.scenarioParams.opponentOneParams.cardOne = doc.data().players.players2.hand[0]
          this.scenarioParams.opponentOneParams.cardTwo = doc.data().players.players2.hand[1]
  
        if (doc.data().players.length > 1)
        {
          this.scenarioParams.opponentTwoParams.cardOne = doc.data().players.players3.hand[0]
          this.scenarioParams.opponentTwoParams.cardTwo = doc.data().players.players3.hand[1]
        }

        if (doc.data().players.length > 2)
       {
          this.scenarioParams.opponentThreeParams.cardOne = doc.data().players.players4.hand[0]
          this.scenarioParams.opponentThreeParams.cardTwo = doc.data().players.players4.hand[1]
        }

        if (doc.data().players.length > 3)
        {
          this.scenarioParams.opponentFourParams.cardOne = doc.data().players.players5.hand[0]
          this.scenarioParams.opponentFourParams.cardTwo = doc.data().players.players5.hand[1]
        }

       if (doc.data().players.length > 4)
        {
          this.scenarioParams.opponentFiveParams.cardOne = doc.data().players.players[4].hand[0]
          this.scenarioParams.opponentFiveParams.cardTwo = doc.data().players.players[4].hand[1]
        }
      }
      this.scenarioParams.numOfOpponents = Object.keys(doc.data().players).length
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
