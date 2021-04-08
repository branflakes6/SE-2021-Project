<template>
  <div id="main-div">
    <h2>Sample Scenario</h2>
    <div id="state-of-ply-container">
      <h4>State of Play:</h4>
      <p>Opponent went all in!</p>
    </div>
    <div id="table-cards-container">
      <img id="table-cards-background" src="..\assets\red-table.png" alt="" />
      <div id="table-cards-foreground">
        <v-card class="mx-auto mt-4 pt-8" color="transparent" flat>
          <div align="center" :key="flip">
            <vue-playing-card
              :signature="pCard1"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              :signature="pCard2"
              :width="cardWidth"
            ></vue-playing-card>
          </div>

          <div class="mt-8 pt-8">
            <vue-playing-card
              signature="cover"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              signature="kh"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              signature="8s"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              signature="ah"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              signature="3d"
              :width="cardWidth"
            ></vue-playing-card>
            <vue-playing-card
              signature="qh"
              :width="cardWidth"
            ></vue-playing-card>
          </div>

          <div class="mx-auto mt-16 pt-16" align="center">
            <v-row class="pl-16">
              <v-col>
                <vue-playing-card
                  signature="jh"
                  :width="cardWidth"
                ></vue-playing-card>
                <vue-playing-card
                  signature="th"
                  :width="cardWidth"
                ></vue-playing-card>
              </v-col>

              <v-col>
                <v-row class="mb-2">
                  <v-btn v-on:click="callF"> Call</v-btn>
                </v-row>
                <v-row class="mb-2">
                  <v-btn @click="raise = true"> Raise</v-btn>
                </v-row>
                <v-row class="mb-2">
                  <v-btn @click="fold = true"> Fold</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>
    </div>

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
        (this.pCard1 = "ad"),
        (this.pCard2 = "as"),
        (this.flip += 1);
    },
  },
  data: () => ({
    call: false,
    raise: false,
    fold: false,
    flip: 0,
    pCard1: "cover",
    pCard2: "cover",
    cardWidth: 85, //35 on mobile
  }),
};
</script>

<style scoped>
#main-div {
  padding: 0%;
  margin: 0%;
  min-height: 100%;
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
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 650px) {
  #table-cards-background {
    height: 40vh;
    width: 105vw;
  }
}
</style>
