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
        cardOne: "",
        cardTwo: "",
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
    const scenarioID = "vcQX3PUIWKDCbsFuf91a";
    db.collection('scenarios').doc(scenarioID).get().then(doc => {
      this.scenarioParams.cardsOnTable.secondCard = doc.data().cards[0]
      this.scenarioParams.cardsOnTable.thirdCard = doc.data().cards[1]
      this.scenarioParams.cardsOnTable.fourthCard = doc.data().cards[2]
      this.scenarioParams.cardsOnTable.fifthCard = doc.data().cards[3]
      this.scenarioParams.cardsOnTable.sixthCard = doc.data().cards[4]

      this.scenarioParams.userParams.cardOne = doc.data().pHand[0]
      this.scenarioParams.userParams.cardTwo = doc.data().pHand[1]

      this.scenarioParams.opponentOneParams.cardOne = doc.data().players[0].hand[0]
      this.scenarioParams.opponentOneParams.cardTwo = doc.data().players[0].hand[1]
      if (doc.data().players.length > 1)
      {
        this.scenarioParams.opponentTwoParams.cardOne = doc.data().players[1].hand[0]
        this.scenarioParams.opponentTwoParams.cardTwo = doc.data().players[1].hand[1]
      }

       if (doc.data().players.length > 2)
      {
        this.scenarioParams.opponentThreeParams.cardOne = doc.data().players[2].hand[0]
        this.scenarioParams.opponentThreeParams.cardTwo = doc.data().players[2].hand[1]
      }

       if (doc.data().players.length > 3)
      {
        this.scenarioParams.opponentFourParams.cardOne = doc.data().players[3].hand[0]
        this.scenarioParams.opponentFourParams.cardTwo = doc.data().players[3].hand[1]
      }

       if (doc.data().players.length > 4)
      {
        this.scenarioParams.opponentFiveParams.cardOne = doc.data().players[4].hand[0]
        this.scenarioParams.opponentFiveParams.cardTwo = doc.data().players[4].hand[1]
      }
      this.scenarioParams.showCardsAfter = true;
      this.scenarioParams.numOfOpponents = doc.data().players.length
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
