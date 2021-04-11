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
              <v-card class="player-details">
                {{ scenarioParams.opponentTwoParams.name }}
              </v-card>
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
              <div class="d-c-container">
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentTwoParams.chipsAvailable }}
                </div>
                <div class="dealer-chip-container">
                  <img
                    v-if="scenarioParams.dealer == 2"
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
              </div>
            </template>
          </div>

          <!-- opponent 4 cards -->
          <div id="opponent-4" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 4">
              <div class="d-c-container">
                <div class="dealer-chip-container">
                  <img
                    v-if="scenarioParams.dealer == 4"
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentFourParams.chipsAvailable }}
                </div>
              </div>
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
              <v-card class="player-details">
                {{ scenarioParams.opponentFourParams.name }}
              </v-card>
            </template>
          </div>
        </div>

        <div class="group-b">
          <div class="group-d">
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
            <div id="pot" class="player-chips-container">
              Pot: {{ scenarioParams.pot }}
            </div>
          </div>

          <div class="group-e">
            <!-- opponent 1 cards -->
            <div id="opponent-1" class="player-container" :key="flip">
              <template v-if="scenarioParams.numOfOpponents >= 1">
                <div class="d-c-container">
                  <div class="dealer-chip-container">
                    <img
                      v-if="scenarioParams.dealer == 1"
                      class="dealer-chip"
                      src="../assets/dealer-chip.png"
                      alt="dealer-chip"
                    />
                  </div>
                  <div class="player-chips-container">
                    Chips: {{ scenarioParams.opponentOneParams.chipsAvailable }}
                  </div>
                </div>
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
                <v-card class="player-details">
                  {{ scenarioParams.opponentOneParams.name }}
                </v-card>
              </template>
              <!-- users cards and options -->
            </div>
            <div class="user-container">
              <!-- users cards -->
              <div class="d-c-container">
                <div class="dealer-chip-container">
                  <img
                    v-if="scenarioParams.dealer == 0"
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.userParams.chipsAvailable }}
                </div>
              </div>
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
              <v-card class="player-details">
                {{ scenarioParams.userParams.name }}
              </v-card>
            </div>
          </div>
        </div>
        <div class="group-c">
          <!-- opponent 3 cards -->
          <div id="opponent-3" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 3">
              <v-card class="player-details">
                {{ scenarioParams.opponentThreeParams.name }}
              </v-card>
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
              <div class="d-c-container">
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentThreeParams.chipsAvailable }}
                </div>
                <div class="dealer-chip-container">
                  <img
                    v-if="scenarioParams.dealer == 3"
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
              </div>
            </template>
          </div>

          <!-- opponent 5 cards -->
          <div id="opponent-5" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 5">
              <div class="d-c-container">
                <div class="dealer-chip-container">
                  <img
                    v-if="scenarioParams.dealer == 5"
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentFiveParams.chipsAvailable }}
                </div>
              </div>
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
              <v-card class="player-details">
                {{ scenarioParams.opponentFiveParams.name }}
              </v-card>
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
        // reveal opponent 1 cards
        (this.scenarioParams.opponentOneParams.cardOne = "ad"),
        (this.scenarioParams.opponentOneParams.cardTwo = "as"),
        // reveal opponent 2 cards
        (this.scenarioParams.opponentTwoParams.cardOne = "9s"),
        (this.scenarioParams.opponentTwoParams.cardTwo = "ts"),
        // reveal opponent 3 cards
        (this.scenarioParams.opponentThreeParams.cardOne = "2s"),
        (this.scenarioParams.opponentThreeParams.cardTwo = "2d"),
        // reveal opponent 4 cards
        (this.scenarioParams.opponentFourParams.cardOne = "ks"),
        (this.scenarioParams.opponentFourParams.cardTwo = "kd"),
        // reveal opponent 5 cards
        (this.scenarioParams.opponentFiveParams.cardOne = "qs"),
        (this.scenarioParams.opponentFiveParams.cardTwo = "qd"),
        (this.flip += 1);
    },
    handleResize() {
      if (window.innerWidth < 400) {
        this.cardWidth = 10;
      } else if (window.innerWidth < 600) {
        this.cardWidth = 20;
      } else if (window.innerWidth < 800) {
        this.cardWidth = 30;
      } else if (window.innerWidth < 1000) {
        this.cardWidth = 40;
      } else if (window.innerWidth < 1200) {
        this.cardWidth = 50;
      } else {
        this.cardWidth = 65;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data: () => ({
    call: false,
    raise: false,
    fold: false,
    flip: 0,
    cardWidth: 85, //85 on pc, 40 on mobile
    scenarioParams: {
      title: "Sample Scenario",
      context: "Your opponent went all in! Will you call his bluff? ",
      pot: 55,
      numOfOpponents: 5,
      dealer: 2,
      cardsOnTable: {
        firstCard: "cover",
        secondCard: "kh",
        thirdCard: "8s",
        fourthCard: "ah",
        fifthCard: "3d",
        sixthCard: "qh",
      },

      userParams: {
        name: "You",
        cardOne: "jh",
        cardTwo: "th",
        chipsBet: 5,
        chipsAvailable: 55,
      },
      opponentOneParams: {
        name: "Kylie",
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 33,
      },
      opponentTwoParams: {
        name: "Jack",
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 35,
      },
      opponentThreeParams: {
        name: "Daniel",
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 49,
      },
      opponentFourParams: {
        name: "Alex",
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 42,
      },
      opponentFiveParams: {
        name: "Kevin",
        cardOne: "cover",
        cardTwo: "cover",
        chipsBet: 5,
        chipsAvailable: 47,
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
  padding: 0 0 5% 0;
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
  /* border: solid white; */
  min-height: 75%;
  width: 33%;
  margin: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 8%;
  height: 85%;
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

.group-d {
  /*border: solid white;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.group-e {
  /* border: solid white; */
  height: 55%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 110%;
}
.community-cards-container {
  /*border: solid white;*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
}
.player-container {
  /* border: solid white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.1vw;
}
.player-details {
  margin: 0.5vw 0 0.5vw 0;
  padding: 0 2px 0 2px;
  background-color: rgba(22, 32, 32, 0.8) !important ;
  color: white !important;
}
.player-cards {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-c-container {
  /* border: solid white; */
  padding: 1%;
  width: 9vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dealer-chip-container {
  /* border: solid white; */
  border-radius: 50%;
  width: 2vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dealer-chip {
  width: 100%;
  height: auto;
}
.player-chips-container {
  border: solid rgba(32, 32, 32, 0.7);
  border-radius: 40%;

  width: 5.5vw;
  height: 5.5vw;
  /* max-width: 100px;
  max-height: 100px; */
  padding: 1% 5px 5px 5px;
  font-size: 1vw;

  display: flex;
  align-items: flex-start;
  justify-content: center;
}
#pot {
  border: solid rgba(255, 217, 0, 0.6);
  margin: 3% 0 0 0;
}
#opponent-1 {
  /*border: solid white;*/
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin: 0 10px 0 10px;
  padding: 0 0 10px 0;
}
#opponent-2 {
  transform: rotate(-60deg);
  display: flex;
  justify-content: flex-end;

  position: relative;
  top: 30px;
  left: 10px;
}
#opponent-3 {
  transform: rotate(60deg);
  display: flex;
  justify-content: flex-start;

  position: relative;
  top: 30px;
  right: 10px;
}
#opponent-4 {
  transform: rotate(70deg);
  display: flex;
  justify-content: flex-end;

  position: relative;
  bottom: 10px;
}
#opponent-5 {
  transform: rotate(-70deg);
  display: flex;
  justify-content: flex-start;

  position: relative;
  bottom: 10px;
}
.user-container {
  /*border: solid white;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 10px 0 10px;
  padding: 0 0 10px 0;
  justify-content: space-evenly;
}
.user-cards {
  display: flex;
  justify-content: center;
  align-items: center;
}

.options-container {
  /* border: solid white; */
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
</style>
