<template>
  <div>
    <div id="title-btn-container">
      <h1 id="page-title">Pick a scenario</h1>
      <v-btn id="create-btn" dark v-on:click.stop="showForm = !showForm">
        Create
      </v-btn>
    </div>

    <v-dialog dark v-model="showForm" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Create A Scenario</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="scenarioParams.title"
                  label="Scenario Title*"
                  hint="Something to indicate what the scenario is about"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="scenarioParams.description"
                  label="Scenario Description*"
                  hint="What people will see when browsing the scenario page"
                  type="text"
                  class="text-wrap"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="scenarioParams.context"
                  label="State of Play*"
                  hint="What the context of the scenario is"
                  type="text"
                  class="text-wrap"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="turn"
                  :items="[0, 1, 2, 3]"
                  label="Turn number"
                  required
                ></v-select>
              </v-col>

              <!-- community cards -->
              <v-col v-if="turn >= 1" cols="12">
                <h1 class="headline">Community Cards</h1>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="cc1v"
                  :items="values"
                  label="First Card Value*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc2v"
                  :items="values"
                  label="Second Card Value*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc3v"
                  :items="values"
                  label="Third Card Value*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc4v"
                  :items="values"
                  label="Fourth Card Value*"
                  v-if="turn >= 2"
                  required
                ></v-select>

                <v-select
                  v-model="cc5v"
                  :items="values"
                  label="Fifth Card Value*"
                  v-if="turn >= 3"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="cc1s"
                  :items="suits"
                  label="First Card Suit*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc2s"
                  :items="suits"
                  label="Second Card Suit*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc3s"
                  :items="suits"
                  label="Third Card Suit*"
                  v-if="turn >= 1"
                  required
                ></v-select>

                <v-select
                  v-model="cc4s"
                  :items="suits"
                  label="Fourth Card Suit*"
                  v-if="turn >= 2"
                  required
                ></v-select>

                <v-select
                  v-model="cc5s"
                  :items="suits"
                  label="Fifth Card Suit*"
                  v-if="turn >= 3"
                  required
                ></v-select>
              </v-col>

              <!-- user cards -->
              <v-col cols="12">
                <div class="opponent-details-container">
                  <p class="headline">User Details</p>
                  <v-select
                    v-model="uc1v"
                    :items="values"
                    label="First Card Value*"
                    required
                  ></v-select>
                  <v-select
                    v-model="uc1s"
                    :items="suits"
                    label="First Card Suit*"
                    required
                  ></v-select>
                  <v-select
                    v-model="uc2v"
                    :items="values"
                    label="Second Card Value*"
                    required
                  ></v-select>
                  <v-select
                    v-model="uc2s"
                    :items="suits"
                    label="Second Card Suit*"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.userParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
              <!-- number of opponents -->
              <v-col cols="12" sm="6">
                <v-select
                  v-model="scenarioParams.numOfOpponents"
                  :items="[1, 2, 3, 4, 5]"
                  label="Number of Opponents"
                  required
                ></v-select>
              </v-col>
              <!-- reveal cards after -->
              <v-col cols="12" sm="6">
                <v-checkbox
                  v-model="scenarioParams.reveal"
                  label="Reveal Cards At End"
                  color="red"
                  hide-details
                ></v-checkbox>
              </v-col>

              <!--opponent 1 -->
              <v-col v-if="scenarioParams.numOfOpponents >= 1" cols="12" sm="6">
                <div class="opponent-details-container">
                  <v-text-field
                    v-model="scenarioParams.opponentOneParams.name"
                    label="Opponent One Name*"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="o1c1v"
                    :items="values"
                    label="First Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o1c1s"
                    :items="suits"
                    label="First Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o1c2v"
                    :items="values"
                    label="Second Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o1c2s"
                    :items="suits"
                    label="Second Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.opponentOneParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
              <!--opponent 2 -->
              <v-col v-if="scenarioParams.numOfOpponents >= 2" cols="12" sm="6">
                <div class="opponent-details-container">
                  <v-text-field
                    v-model="scenarioParams.opponentTwoParams.name"
                    label="Opponent Two Name*"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="o2c1v"
                    :items="values"
                    label="First Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o2c1s"
                    :items="suits"
                    label="First Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o2c2v"
                    :items="values"
                    label="Second Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o2c2s"
                    :items="suits"
                    label="Second Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.opponentTwoParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
              <!--opponent 3 -->
              <v-col v-if="scenarioParams.numOfOpponents >= 3" cols="12" sm="6">
                <div class="opponent-details-container">
                  <v-text-field
                    v-model="scenarioParams.opponentThreeParams.name"
                    label="Opponent Three Name*"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="o3c1v"
                    :items="values"
                    label="First Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o3c1s"
                    :items="suits"
                    label="First Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o3c2v"
                    :items="values"
                    label="Second Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o3c2s"
                    :items="suits"
                    label="Second Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.opponentThreeParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
              <!--opponent 4 -->
              <v-col v-if="scenarioParams.numOfOpponents >= 4" cols="12" sm="6">
                <div class="opponent-details-container">
                  <v-text-field
                    v-model="scenarioParams.opponentFourParams.name"
                    label="Opponent Four Name*"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="o4c1v"
                    :items="values"
                    label="First Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o4c1s"
                    :items="suits"
                    label="First Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o4c2v"
                    :items="values"
                    label="Second Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o4c2s"
                    :items="suits"
                    label="Second Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.opponentFourParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
              <!--opponent 5 -->
              <v-col v-if="scenarioParams.numOfOpponents >= 5" cols="12" sm="6">
                <div class="opponent-details-container">
                  <v-text-field
                    v-model="scenarioParams.opponentFiveParams.name"
                    label="Opponent Five Name*"
                    required
                  ></v-text-field>
                  <v-select
                    v-model="o5c1v"
                    :items="values"
                    label="First Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o5c1s"
                    :items="suits"
                    label="First Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o5c2v"
                    :items="values"
                    label="Second Card Value*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-select
                    v-model="o5c2s"
                    :items="suits"
                    label="Second Card Suit*"
                    v-if="scenarioParams.reveal"
                    required
                  ></v-select>
                  <v-text-field
                    type="number"
                    v-model="scenarioParams.opponentFiveParams.chipsAvailable"
                    label="Chips Available*"
                    required
                  ></v-text-field>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <!-- find dealer position -->
              <v-select
                v-model="scenarioParams.dealer"
                :items="dealerOptions"
                label="Who Has the Dealer Chip*"
                required
              ></v-select>
            </v-row>
            <!-- indicate correct answers -->
            <v-row>
              <v-select
                v-model="correctAnswer"
                :items="options"
                label="Correct Answer*"
                required
              ></v-select>
            </v-row>
            <!-- ask for explanations -->
            <v-row>
              <v-text-field
                v-model="scenarioParams.callText"
                label="Call Explanation*"
                hint="Explain why this is the correct/wrong decision"
                required
              ></v-text-field>
            </v-row>
            <v-row cols="12">
              <v-select
                v-model="raises"
                :items="[1, 2, 3]"
                label="Number of raise options"
                required
              ></v-select>
            </v-row>

            <v-row v-if="raises >= 1">
              <v-text-field
                type="number"
                v-model="raise1"
                label="First raise amount"
                required
              >
              </v-text-field>
            </v-row>
            <v-row v-if="raises >= 2">
              <v-text-field
                type="number"
                v-model="raise2"
                label="Second raise amount"
                required
              >
              </v-text-field>
            </v-row>
            <v-row v-if="raises >= 3">
              <v-text-field
                type="number"
                v-model="raise3"
                label="Third raise amount"
                required
              >
              </v-text-field>
            </v-row>
            <v-row>
              <h3>
                Select the correct raise option
              </h3>
            </v-row>
            <v-col cols="12" sm="6">
              <v-radio-group v-model="correctRaise">
                <v-radio
                  value="0"
                  label="None"
                  color="red"
                  hide-details
                ></v-radio>
                <v-radio
                  value="1"
                  label="First"
                  color="red"
                  hide-details
                ></v-radio>
                <v-radio
                  value="2"
                  label="Second"
                  color="red"
                  hide-details
                ></v-radio>
                <v-radio
                  value="3"
                  label="Third"
                  color="red"
                  hide-details
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-row>
              <v-text-field
                v-model="scenarioParams.raiseText"
                label="Raise Explanation*"
                hint="Explain why this is the correct/wrong decision"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="scenarioParams.foldText"
                label="Fold Explanation*"
                hint="Explain why this is the correct/wrong decision"
                required
              ></v-text-field>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="number"
                  v-model="scenarioParams.currentBet"
                  label="Amount of Current Bet*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  type="number"
                  v-model="scenarioParams.pot"
                  label="Pot Total*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="sCat"
                  :items="this.categories"
                  label="Category"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="showForm = false">
            Close
          </v-btn>
          <v-btn color="red darken-1" text @click="sendScenario">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "firebase/app";
const db = firebase.firestore();
export default {
  name: "creationForm",
  methods: {
    sendScenario() {
      if (this.turn == 1) {
        this.scenarioParams.dCards = 3;
      }
      if (this.correctAnswer == "Call") {
        this.scenarioParams.callType = "Correct";
      } else {
        this.scenarioParams.callType = "Incorrect";
      }
      if (this.correctAnswer == "Fold") {
        this.scenarioParams.foldType = "Correct";
      } else {
        this.scenarioParams.foldType = "Incorrect";
      }
      if (this.correctAnswer == "Raise") {
        this.scenarioParams.raiseType = "Correct";
      } else {
        this.scenarioParams.raiseType = "Incorrect";
      }

      // get correct dealer value
      if (this.scenarioParams.dealer == "User") {
        this.scenarioParams.dealer = 0;
      } else if (this.scenarioParams.dealer == "Opponent 1") {
        this.scenarioParams.dealer = 1;
      } else if (this.scenarioParams.dealer == "Opponent 2") {
        this.scenarioParams.dealer = 2;
      } else if (this.scenarioParams.dealer == "Opponent 3") {
        this.scenarioParams.dealer = 3;
      } else if (this.scenarioParams.dealer == "Opponent 4") {
        this.scenarioParams.dealer = 4;
      } else if (this.scenarioParams.dealer == "Opponent 5") {
        this.scenarioParams.dealer = 5;
      }

      db.collection("scenarios")
        .add({
          raiseOptions: {
            numRaises: this.raises,
            raise1: this.raise1,
            raise2: this.raise2,
            raise3: this.raise3,
            correctRaise: this.correctRaise,
          },
          call: {
            text: this.scenarioParams.callText,
            type: this.scenarioParams.callType,
          },
          dCards: this.scenarioParams.dCards,
          dealer: this.scenarioParams.dealer,
          fold: {
            text: this.scenarioParams.foldText,
            type: this.scenarioParams.foldType,
          },
          numPlayers: this.scenarioParams.numOfOpponents,
          player: {
            hand: [this.uc1v.concat(this.uc1s), this.uc2v.concat(this.uc2s)],
            money: {
              available: this.scenarioParams.userParams.chipsAvailable,
              bet: this.scenarioParams.currentBet,
            },
          },
          players: {
            player2: {
              attributes: "",
              hand: [
                this.o1c1v.concat(this.o1c1s),
                this.o1c2v.concat(this.o1c2s),
              ],
              money: {
                available: this.scenarioParams.opponentOneParams.chipsAvailable,
                bet: "",
              },
              name: this.scenarioParams.opponentOneParams.name,
            },
            player3: {
              attributes: "",
              hand: [
                this.o2c1v.concat(this.o2c1s),
                this.o1c2v.concat(this.o2c2s),
              ],
              money: {
                available: this.scenarioParams.opponentTwoParams.chipsAvailable,
                bet: "",
              },
              name: this.scenarioParams.opponentTwoParams.name,
            },
            player4: {
              attributes: "",
              hand: [
                this.o3c1v.concat(this.o3c1s),
                this.o3c2v.concat(this.o3c2s),
              ],
              money: {
                available: this.scenarioParams.opponentThreeParams
                  .chipsAvailable,
                bet: "",
              },
              name: this.scenarioParams.opponentThreeParams.name,
            },
            player5: {
              attributes: "",
              hand: [
                this.o4c1v.concat(this.o4c1s),
                this.o4c2v.concat(this.o4c2s),
              ],
              money: {
                available: this.scenarioParams.opponentFourParams
                  .chipsAvailable,
                bet: "",
              },
              name: this.scenarioParams.opponentFourParams.name,
            },
            player6: {
              attributes: "",
              hand: [
                this.o5c1v.concat(this.o5c1s),
                this.o5c2v.concat(this.o5c2s),
              ],
              money: {
                available: this.scenarioParams.opponentFiveParams
                  .chipsAvailable,
                bet: "",
              },
              name: this.scenarioParams.opponentFiveParams.name,
            },
          },
          raise: {
            text: this.scenarioParams.raiseText,
            type: this.scenarioParams.raiseType,
          },
          showCards: this.scenarioParams.reveal,
          stateOfPlay: this.scenarioParams.context,
          tableCards: [
            this.cc1v.concat(this.cc1s),
            this.cc2v.concat(this.cc2s),
            this.cc3v.concat(this.cc3s),
            this.cc4v.concat(this.cc4s),
            this.cc5v.concat(this.cc5s),
          ],
          title: this.scenarioParams.title,
        })
        .then(
          function(docRef) {
            db.collection("scenarios")
              .doc("masterList")
              .update({
                Scenarios: firebase.firestore.FieldValue.arrayUnion({
                  id: docRef.id,
                  name: this.scenarioParams.title,
                  category: this.sCat,
                  description: this.scenarioParams.description,
                }),
              });
          }.bind(this)
        );
      window.location.reload();
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      masterList: [],
      raise1: 0,
      raise2: 0,
      raise3: 0,
      correctRaise: 0,
      categories: ["All", "Open", "ISO", "3Bet", "4Bet", "5Bet"],
      selectedCat: "All",
      rasieAmounts: [0, 0, 0],
      raises: 0,
      numCols: 3,
      masterList_id: "",
      newID: "",
      searchTerm: "",
      loaded: false,
      select: "",
      showForm: false,
      // card values
      values: [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace",
      ],
      // card suits
      suits: ["Hearts", "Spades", "Diamonds", "Clubs"],
      // dealer chip array
      dealerOptions: [
        "User",
        "Opponent 1",
        "Opponent 2",
        "Opponent 3",
        "Opponent 4",
        "Opponent 5",
      ],
      options: ["Call", "Raise", "Fold"],
      correctAnswer: "",
      turn: 0,
      // community card values
      cc1v: "",
      cc2v: "",
      cc3v: "",
      cc4v: "",
      cc5v: "",
      cc6v: "",
      cc1s: "",
      cc2s: "",
      cc3s: "",
      cc4s: "",
      cc5s: "",
      cc6s: "",
      // for values for user
      uc1v: "",
      uc2v: "",
      uc1s: "",
      uc2s: "",
      // form values for opponent 1
      o1c1v: "",
      o1c2v: "",
      o1c1s: "",
      o1c2s: "",
      // form values for opponent 2
      o2c1v: "",
      o2c2v: "",
      o2c1s: "",
      o2c2s: "",
      // form values for opponent 3
      o3c1v: "",
      o3c2v: "",
      o3c1s: "",
      o3c2s: "",
      // form values for opponent 4
      o4c1v: "",
      o4c2v: "",
      o4c1s: "",
      o4c2s: "",
      // form values for opponent 5
      o5c1v: "",
      o5c2v: "",
      o5c1s: "",
      o5c2s: "",
      // default params
      scenarioParams: {
        dCards: " ",
        title: " ",
        description: " ",
        context: " ",
        reveal: false,
        pot: 0,
        currentBet: 0,
        dealer: 0,
        callType: "",
        foldType: "",
        raiseType: "",
        callText: "",
        raiseText: "",
        foldText: "",
        numOfOpponents: 0,
        cardsOnTable: [],
        userParams: {
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
        opponentOneParams: {
          name: "",
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
        opponentTwoParams: {
          name: "",
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
        opponentThreeParams: {
          name: "",
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
        opponentFourParams: {
          name: "",
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
        opponentFiveParams: {
          name: "",
          cardOne: "",
          cardTwo: "",
          chipsAvailable: 0,
        },
      },
    };
  },
};
</script>

<style scoped>
#main-div {
  background-color: rgb(22, 22, 22);
  color: white;
  min-height: 100vh;
}

#title-btn-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px 0 20px;
}
#create-btn {
  background-color: rgb(148, 42, 42);
  position: absolute;
  right: 10px;
}
#scenarioThumbnail-container {
  width: 480px;
  justify-content: center;
  margin: 0 auto;
  padding: 25px;
  background-color: rgb(22, 22, 22);
}

.opponent-details-container {
  border: solid white;
  border-width: 1px;
  padding: 0 10px 0 10px;
}
@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
@media screen and (max-width: 450px) {
  #title-btn-container {
    justify-content: flex-start;
  }
}
@media screen and (max-width: 360px) {
  #title-btn-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #create-btn {
    position: relative;
  }
}
.card-list {
  display: grid;
  grid-gap: 1em;
}

.card-item {
  background-color: dodgerblue;
  padding: 2em;
}

body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}
ul {
  list-style-type: none;
}
.grid {
  display: grid;
  grid-template-columns: 6ch auto;
}
</style>
