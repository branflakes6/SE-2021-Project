<template>
  <div id="main-div">
    <h2 id="scenario-title">{{ scenarioParams.title }}</h2>
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
              <div class="d-c-container">
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentTwoParams.chipsAvailable }}
                </div>
                <div
                  v-if="scenarioParams.dealer == 2"
                  class="dealer-chip-container"
                >
                  <img
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
              </div>
              <div class="player-cards">
                <vue-playing-card
                  :signature="op2c1"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="op2c2"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <v-btn class="player-details">
                {{ scenarioParams.opponentTwoParams.name }}
                <v-icon dark>mdi-information-outline</v-icon>
              </v-btn>
            </template>
          </div>

          <!-- opponent 4 cards -->
          <div id="opponent-4" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 4">
              <div class="d-c-container">
                <div
                  v-if="scenarioParams.dealer == 4"
                  class="dealer-chip-container"
                >
                  <img
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
                  :signature="op4c1"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="op4c2"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <v-btn class="player-details">
                {{ scenarioParams.opponentFourParams.name }}
                <v-icon dark>mdi-information-outline</v-icon>
              </v-btn>
            </template>
          </div>
        </div>

        <div class="group-b">
          <div class="group-d">
            <!-- the "community" cards -->
            <div class="community-cards-container">
              <dealersCards :cards="scenarioParams.cardsOnTable">
              </dealersCards>
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
                  <div
                    v-if="scenarioParams.dealer == 1"
                    class="dealer-chip-container"
                  >
                    <img
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
                    :signature="op1c1"
                    :width="cardWidth"
                  ></vue-playing-card>
                  <vue-playing-card
                    :signature="op1c2"
                    :width="cardWidth"
                  ></vue-playing-card>
                </div>
                <v-btn class="player-details">
                  {{ scenarioParams.opponentOneParams.name }}
                  <v-icon dark>mdi-information-outline</v-icon>
                </v-btn>
              </template>
              <!-- users cards and options -->
            </div>
            <div class="user-container">
              <!-- users cards -->
              <div class="d-c-container">
                <div
                  v-if="scenarioParams.dealer == 0"
                  class="dealer-chip-container"
                >
                  <img
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
              <v-btn class="player-details">
                you
              </v-btn>
            </div>
          </div>
        </div>
        <div class="group-c">
          <!-- opponent 3 cards -->
          <div id="opponent-3" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 3">
              <div class="d-c-container">
                <div class="player-chips-container">
                  Chips: {{ scenarioParams.opponentThreeParams.chipsAvailable }}
                </div>
                <div
                  v-if="scenarioParams.dealer == 3"
                  class="dealer-chip-container"
                >
                  <img
                    class="dealer-chip"
                    src="../assets/dealer-chip.png"
                    alt="dealer-chip"
                  />
                </div>
              </div>
              <div class="player-cards">
                <vue-playing-card
                  :signature="op3c1"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="op3c2"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <v-btn class="player-details">
                {{ scenarioParams.opponentThreeParams.name }}
                <v-icon dark>mdi-information-outline</v-icon>
              </v-btn>
            </template>
          </div>

          <!-- opponent 5 cards -->
          <div id="opponent-5" class="player-container" :key="flip">
            <template v-if="scenarioParams.numOfOpponents >= 5">
              <div class="d-c-container">
                <div
                  v-if="scenarioParams.dealer == 5"
                  class="dealer-chip-container"
                >
                  <img
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
                  :signature="op5c1"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  :signature="op5c2"
                  :width="cardWidth"
                ></vue-playing-card>
              </div>
              <v-btn class="player-details">
                {{ scenarioParams.opponentFiveParams.name }}
                <v-icon dark>mdi-information-outline</v-icon>
              </v-btn>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- users option -->
    <div class="options-container">
      <div v-if="scenarioParams.callType != 'Invalid'">
        <v-btn
          x-large
          dark
          class="option"
          v-on:click="reveal(), (call = true), (answered = true)"
          >Call</v-btn
        >
      </div>
      <div v-if="scenarioParams.raiseType != 'Invalid'">
        <v-btn
          x-large
          dark
          class="option"
          @click="reveal(), (raise = true), (answered = true)"
          >Raise</v-btn
        >
      </div>
      <div v-if="scenarioParams.foldType != 'Invalid'">
        <v-btn
          x-large
          dark
          class="option"
          @click="reveal(), (fold = true), (answered = true)"
          >Fold</v-btn
        >
      </div>
    </div>
    <!-- state of play -->
    <v-card dark class="state-of-play-container">
      <h2>State of Play:</h2>
      <p>{{ scenarioParams.context }}</p>
    </v-card>

    <!-- call dialogue -->
    <v-dialog persistent dark v-model="call" max-width="260">
      <optionDialogue
        :type="this.scenarioParams.callType"
        :text="this.scenarioParams.callText"
      />
    </v-dialog>

    <!-- raise dialogue -->
    <v-dialog persistent dark v-model="raise" max-width="260">
      <optionDialogue
        :type="this.scenarioParams.raiseType"
        :text="this.scenarioParams.raiseText"
      />
    </v-dialog>
    <!-- fold dialogue -->
    <v-dialog persistent dark v-model="fold" max-width="260">
      <optionDialogue
        :type="this.scenarioParams.foldType"
        :text="this.scenarioParams.foldText"
      />
    </v-dialog>
  </div>
</template>

<script>
import dealersCards from "./dealersCards";
import optionDialogue from "./optionDialogue";
export default {
  name: "scenario",
  props: ["scenarioParams"],
  components: {
    dealersCards,
    optionDialogue,
  },
  methods: {
    reveal() {
      if (this.scenarioParams.showCardsAfter) {
        // reveal opponent 1 cards
        this.op1c1 = this.scenarioParams.opponentOneParams.cardOne;
        this.op1c2 = this.scenarioParams.opponentOneParams.cardTwo;
        // reveal opponent 2 cards
        this.op2c1 = this.scenarioParams.opponentTwoParams.cardOne;
        this.op2c2 = this.scenarioParams.opponentTwoParams.cardTwo;
        // reveal opponent 3 cards
        this.op3c1 = this.scenarioParams.opponentThreeParams.cardOne;
        this.op3c2 = this.scenarioParams.opponentThreeParams.cardTwo;
        // reveal opponent 4 cards
        this.op4c1 = this.scenarioParams.opponentFourParams.cardOne;
        this.op4c2 = this.scenarioParams.opponentFourParams.cardTwo;
        // reveal opponent 5 cards
        this.op5c1 = this.scenarioParams.opponentFiveParams.cardOne;
        this.op5c2 = this.scenarioParams.opponentFiveParams.cardTwo;
      }
      this.flip += 1;
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
    reload() {
      window.location.reload();
      window.scrollTo(0, 0);
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
    loaded: false,
    cardWidth: 85, //85 on pc, 40 on mobile
    answered: false,
    op1c1: "cover",
    op1c2: "cover",
    op2c1: "cover",
    op2c2: "cover",
    op3c1: "cover",
    op3c2: "cover",
    op4c1: "cover",
    op4c2: "cover",
    op5c1: "cover",
    op5c2: "cover",
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
#scenario-title {
  text-transform: capitalize;
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
  background-color: rgb(22, 22, 22);
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
  margin: 0.5vw 0 0.5vw 0 !important;
  padding: 0 2px 0 2px !important;
  background-color: rgba(22, 32, 32, 0.8) !important ;
  color: white !important;
  height: auto !important;
  min-width: 7vw !important;
  font-size: 0.7vw !important;
  text-transform: capitalize !important;
  display: flex !important;
  justify-content: space-between !important;
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
  justify-content: center;
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
  margin: 0 7% 0 7%;
}
.dealer-chip {
  width: 100%;
  height: auto;
}
.player-chips-container {
  /* border: solid rgba(32, 32, 32, 0.7); */
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
  width: 6.5vw;
  height: 6.5vw;
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
  transform: rotate(90deg);
  display: flex;
  justify-content: flex-end;

  position: relative;
  top: 30px;
  left: 10px;
}

#opponent-3 {
  transform: rotate(-90deg);
  display: flex;
  justify-content: flex-start;

  position: relative;
  top: 30px;
  right: 10px;
}

#opponent-4 {
  transform: rotate(45deg);
  display: flex;
  justify-content: flex-end;

  position: relative;
  bottom: 10px;
  left: 10px;
}
#opponent-5 {
  transform: rotate(-45deg);
  display: flex;
  justify-content: flex-start;

  position: relative;
  bottom: 10px;
  right: 10px;
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
.user-container .player-details {
  justify-content: center !important;
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
  background-color: rgb(99, 22, 22) !important;
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

.post-option {
  background-color: #222222 !important;
  border: solid white !important;
  margin: 10px 0 10px 0;
}
.post-option:hover {
  background-color: #3d3d3d !important;
}
.no-active {
  background-color: #222222 !important;
}
</style>
