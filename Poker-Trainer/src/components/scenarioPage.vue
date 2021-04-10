<template>
  <div id="main-div">
    <h2>{{ scenarioParams.title }}</h2>

    <!-- Render the table and cards -->
    <div id="table-cards-container">
      <!-- ie, the table -->
      <img id="table-cards-background" src="../assets/red-table.png" alt="" />
      <!-- ie, the cards and chips -->
      <div id="table-cards-foreground">
        <div class="group-a">
          <!-- opponent 2 cards -->
          <div id="opponent-2" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 2">
              <div class="player-cards">
                <vue-playing-card
                  :signature="scenarioParams.opponentTwoParams.cardOne"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="scenarioParams.opponentTwoParams.cardTwo"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <div class="player-chips-container"></div>
            </template>
          </div>

          <!-- opponent 4 cards -->
          <div id="opponent-4" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 4">
              <div class="player-cards">
                <vue-playing-card
                  :signature="scenarioParams.opponentFourParams.cardOne"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="scenarioParams.opponentFourParams.cardTwo"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <div class="player-chips-container"></div>
            </template>
          </div>
        </div>

        <div class="group-b">
          <!-- opponent 1 cards -->
          <div id="opponent-1" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 1">
              <div class="player-chips-container"></div>
              <div class="player-cards">
                <vue-playing-card
                  :signature="scenarioParams.opponentOneParams.cardOne"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="scenarioParams.opponentOneParams.cardTwo"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
            </template>
          </div>

          <!-- the "community" cards -->
          <div class="community-cards-container">
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.firstCard"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.secondCard"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.thirdCard"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.fourthCard"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.fifthCard"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="scenarioParams.cardsOnTable.sixthCard"
              :width="cardWidth"
            ></vue-playing-card>
          </div>
          <!-- users cards and options -->
          <div class="user-container">
            <!-- users cards -->
            <div class="player-chips-container"></div>
            <div class="user-cards">
              <vue-playing-card
                :signature="scenarioParams.userParams.cardOne"
                :width="cardWidth"
              ></vue-playing-card>
              <vue-playing-card
                :signature="scenarioParams.userParams.cardTwo"
                :width="cardWidth"
              ></vue-playing-card>
            </div>
          </div>
        </div>
        <div class="group-c">
          <!-- opponent 3 cards -->
          <div id="opponent-3" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 3">
              <div class="player-chips-container"></div>
              <div class="player-cards">
                <vue-playing-card
                  :signature="scenarioParams.opponentThreeParams.cardOne"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="scenarioParams.opponentThreeParams.cardTwo"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
            </template>
          </div>

          <!-- opponent 5 cards -->
          <div id="opponent-5" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 5">
              <div class="player-chips-container"></div>
              <div class="player-cards">
                <vue-playing-card
                  :signature="scenarioParams.opponentFiveParams.cardOne"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="scenarioParams.opponentFiveParams.cardTwo"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- users option -->
    <div class="options-container">
      <div>
        <v-btn x-large dark class="option" v-on:click="callF">Call</v-btn>
      </div>
      <div>
        <v-btn x-large dark class="option" @click="raise = true">Raise</v-btn>
      </div>
      <div>
        <v-btn x-large dark class="option" @click="fold = true">Fold</v-btn>
      </div>
    </div>

    <!-- state of play -->
    <v-card dark class="state-of-play-container">
      <h2>State of Play:</h2>
      <p>{{ scenarioParams.context }}</p>
    </v-card>

    <!-- dialogue pop-ups -->
    <v-dialog v-model="call" max-width="260">
      <v-card max-height="260">
        <v-container>
          <h3 align="center">
            Correct Decision
          </h3>
          <h4>
            Your opponent went all in and you had a Royal Flush, the best
            possible hand. The only correct decision in this situation is to go
            all in!
          </h4>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="raise" max-width="260">
      <v-card>
        <v-container>
          <h3 align="center">
            Invalid
          </h3>
          <h4 class="ma-4">
            Your opponent went all in, you cannot raise you can only call.
          </h4>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="fold" max-width="260">
      <v-card>
        <v-container>
          <h3 align="center">
            Wrong Decision
          </h3>
          <h4 class="ma-4">
            Your opponent went all in and you had a Royal Flush, the best
            possible hand. The only correct decision in this situation is to go
            all in!
          </h4>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "scenarioPage",
  componets: {},

  methods: {
    callF: function() {
      (this.call = true),
        (this.scenarioParams.opponentOneParams.cardOne = "ad"),
        (this.scenarioParams.opponentOneParams.cardTwo = "as"),
        (this.flip += 1);
    },
  },
  data: () => ({
    call: false,
    raise: false,
    fold: false,
    flip: 0,
    cardWidth: 85, //85 on pc, 40 on mobile
    scenarioParams: {
      title: "Sample Scenario",
      context:
        "Your opponent went all in! Will you call his bluff? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reprehenderit ullam consectetur fugiat, pariatur labore debitis iste animi nemo ex.",
      numOfOpponents: 5,
      cardsOnTable: {
        firstCard: "cover",
        secondCard: "kh",
        thirdCard: "8s",
        fourthCard: "ah",
        fifthCard: "3d",
        sixthCard: "qh",
      },

      userParams: {
        cardOne: "jh",
        cardTwo: "th",
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
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100vh;
  min-width: 100%;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  font-size: 2vw;
}
#flop {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#table-cards-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0 50px 0;
}
#table-cards-background {
  position: static;
  width: 100%;
}
#table-cards-foreground {
  /*border: solid white;*/
  padding: 0 0 5vh 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.group-a {
  /*border: solid white;*/
  height: 85%;
  width: 33%;
  margin: 0 0 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}
.group-b {
  /*border: solid white;*/
  height: 75%;
  width: 33%;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.group-c {
  /*border: solid white;*/
  height: 85%;
  width: 33%;
  margin: 0 0 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}
.community-cards-container {
  /*border: solid white;*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.player-container {
  /*border: solid white;*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.player-cards {
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-chips-container {
  border: solid black;
  border-radius: 40%;
  width: 100px;
  height: 100%;
  margin: 0 10px 0 10px;
}
#opponent-1 {
  /*border: solid white;*/
  display: flex;
}
#opponent-2 {
  /*border: solid white;*/
  margin: 100px 0 0 0px;
  transform: rotate(-45deg);
  display: flex;
  justify-content: flex-end;
  padding: 0 40px 0 0;
}
#opponent-3 {
  /*border: solid white;*/
  margin: 100px 0 0 0;
  transform: rotate(45deg);
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 40px;
}
#opponent-4 {
  /* /*border: solid white; */
  margin: 0 0 100px 50px;
  transform: rotate(45deg);
  display: flex;
  justify-content: flex-end;
  padding: 0 40px 0 0;
}
#opponent-5 {
  /*border: solid white;*/
  margin: 0 50px 100px 0;
  transform: rotate(-45deg);
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 40px;
}
.user-container {
  /*border: solid white;*/
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.user-cards {
  display: flex;
  justify-content: center;
  align-items: center;
}

.options-container {
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  margin: 0 0 50px 0;
}
.option {
  background-color: transparent !important;
  border: solid white !important;
}

.state-of-play-container {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  padding: 5px 10px 5px 10px;
  width: 90% !important ;
  margin: 0 5vw 5vh 5vw !important;
  font-size: 1.5vw;
}
@media screen and (max-height: 750px) {
  .table-cards-container {
    overflow: auto;
  }
  .player-chips-container {
    border: solid purple;
    border-radius: 40%;
    width: 50px;
    height: 60px;
    margin: 0 10px 0 10px;
  }
  #opponent-2 {
    /*border: solid white;*/
    margin: 0 0 0 0px;
    padding: 0 40px 0 0;
  }
  #opponent-3 {
    /*border: solid white;*/
    margin: 0 0 0 0;
    padding: 0 0 0 40px;
  }
  #opponent-4 {
    /* /*border: solid white; */
    margin: 0 0 0 0;
    padding: 0 40px 20px 0;
  }
  #opponent-5 {
    /*border: solid white;*/
    margin: 0 0 0 0;
    padding: 0 0 20px 40px;
  }
}
</style>
