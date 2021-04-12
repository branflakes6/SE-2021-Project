<template>
  <div id="main-div">
    <div id="title-btn-container">
      <h1 id="page-title">Pick a scenario</h1>
      <v-btn id="create-btn" dark v-on:click.stop="showForm = !showForm"
        >Create</v-btn
      >
    </div>
    <!-- for now this works, but i want to have a for loop that gets all the scenarios in the database, kinda like what we have in the nav -->
    <div id="scenarioThumbnail-container">
      <scenarioThumbnail
        title="Going all in"
        author="Upper Hand Poker"
        description="A sample scenario by us here at Upper Hand Poker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis ipsa commodi tenetur ab quia illo ducimus consequuntur fugiat."
      />
      <scenarioThumbnail
        title="How aggressive should i play?"
        author="Upper Hand Poker"
        description="A sample scenario by us here at Upper Hand Poker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis ipsa commodi tenetur ab quia illo ducimus consequuntur fugiat."
      />
      <scenarioThumbnail
        title="good time to fold?"
        author="Upper Hand Poker"
        description="A sample scenario by us here at Upper Hand Poker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis ipsa commodi tenetur ab quia illo ducimus consequuntur fugiat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis ipsa commodi tenetur ab quia illo ducimus consequuntur fugiat."
      />
    </div>

    <!-- create form -->
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
                  :items="[0, 1, 2, 3, 4]"
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

                <v-select
                  v-model="cc6v"
                  :items="values"
                  label="Sixth Card Value*"
                  v-if="turn >= 4"
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

                <v-select
                  v-model="cc6s"
                  :items="suits"
                  label="Sixth Card Suit*"
                  v-if="turn >= 4"
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
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="scenarioParams.pot"
                  label="Pot Total*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="scenarioParams.currentBet"
                  label="Current Bet Amount*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="scenarioParams.dealer"
                  label="Dealer Chip Position*"
                  required
                ></v-text-field>
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
          <v-btn color="red darken-1" text @click="showForm = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import scenarioThumbnail from "./scenarioThumbnail";

export default {
  name: "scenarioBrowser",
  components: {
    scenarioThumbnail,
  },
  data: () => ({
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
    cc1v: undefined,
    cc2v: undefined,
    cc3v: undefined,
    cc4v: undefined,
    cc5v: undefined,
    cc6v: undefined,
    cc1s: "",
    cc2s: "",
    cc3s: "",
    cc4s: "",
    cc5s: "",
    cc6s: "",

    // for values for user
    uc1v: undefined,
    uc2v: undefined,
    uc1s: "",
    uc2s: "",
    // form values for opponent 1
    o1c1v: undefined,
    o1c2v: undefined,
    o1c1s: "",
    o1c2s: "",
    // form values for opponent 2
    o2c1v: undefined,
    o2c2v: undefined,
    o2c1s: "",
    o2c2s: "",
    // form values for opponent 3
    o3c1v: undefined,
    o3c2v: undefined,
    o3c1s: "",
    o3c2s: "",
    // form values for opponent 4
    o4c1v: undefined,
    o4c2v: undefined,
    o4c1s: "",
    o4c2s: "",
    // form values for opponent 5
    o5c1v: undefined,
    o5c2v: undefined,
    o5c1s: "",
    o5c2s: "",

    // default params
    scenarioParams: {
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
  }),
};
</script>

<style scoped>
#main-div {
  display: flex;
  flex-direction: column;
  background-color: rgb(22, 22, 22);
  color: white;
  min-height: 100vh;
  align-items: center;
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
  width: 80%;
  height: 500px;
  margin: 20px 0 100px 0;
  padding: 20px;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #2e2e2e;
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
</style>
