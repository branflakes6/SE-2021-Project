<template>
  <div id="main-div">
    <div id="home-banner">
      <img id="home-banner-background" src="../assets/home-banner.png" alt="" />

      <div id="home-banner-foreground">
        <h2>Want to be the best at the table?</h2>
        <v-btn
          width="200"
          outlined
          v-if="!signedIn"
          class="signup"
          v-on:click="showSignUpForm = !showSignUpForm"
        >
          Sign Up
        </v-btn>
        <v-btn
          width="200"
          outlined
          v-if="signedIn"
          class="signup"
          to="/scenarioBrowser"
        >
          Practice
        </v-btn>
      </div>
    </div>
    <h1 class="tutorial-header">
      Browse scenarios to find a topic you want to improve on
    </h1>
    <div id="bigger-container-lol">
      <div id="scenarioThumbnail-container">
        <scenarioThumbnail
          scenarioID="DNbZQrDKW4aDWZA3Hqi6"
          title="Victory Royale"
          author="Upper Hand Poker"
          description="A beginners sample scenario designed to give you familiarity with the website"
        />
      </div>
      <div id="scenarioThumbnail-container">
        <scenarioThumbnail
          scenarioID="WXSyM3c4DHKftSwMUafW"
          title="How aggressive should i play?"
          author="Upper Hand Poker"
          description="A more in depth sample scenario designed to test your skills of the basics."
        />
      </div>
      <div id="scenarioThumbnail-container">
        <scenarioThumbnail
          scenarioID="qQ6pkBbkHyIDGuTC8jtN"
          title="good time to fold?"
          author="Upper Hand Poker"
          description="An advanced scenario designed to really test if you know your stuff or not.."
        />
      </div>
    </div>
    <v-stepper v-model="e1" :dark="true" non-linear>
    <v-stepper-header>
      <v-stepper-step
        editable
        step="1"
      >
        The Board
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        editable
        step="2"
      >
        Analyse your opponents
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable step="3">
        Create your own Scenarios
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items >
      <v-stepper-content step="1">
        <v-card class="mb-12" color="grey lighten-1">
        <v-img id="scenario-screenshot" src="../assets/scenario-screenshot.png" max-width="1600" class="mx-auto"></v-img>
        </v-card>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          
        >
        <v-img id="scenario-screenshot" src="../assets/playerInfo.png" max-width="1600" class="mx-auto"></v-img>
        </v-card>
        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="700px"
        >
        <v-img id="scenario-screenshot" src="../assets/form-screenshot.png" max-height="1200" class="mx-auto"></v-img>
        </v-card>
        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
import scenarioThumbnail from "./scenarioThumbnail";
export default {
  name: "homePage",
  components: {
    scenarioThumbnail,
  },
  data: () => ({
    signedIn: true,
    drawer: false,
    showSignUpForm: false,
    e1:1,
  }),
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
.signup {
  color: red;
  font-size: 1.5vw !important;
}
#home-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home-banner-background {
  opacity: 45%;
  position: static;
  width: 100%;
}

#home-banner-foreground {
  background: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3vw;
}
#home-banner-foreground h2 {
  text-transform: capitalize;
  margin-bottom: 10%;
}
.tutorial-header {
  text-transform: capitalize;
  margin: 50px 0 20px 0;
  font-size: 2vw;
  text-align: center;
}
#bigger-container-lol {
  display: flex;
}
#scenarioThumbnail-container {
  width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
#scenario-screenshot {
  width: 75%;
}
#form-screenshot {
  width: 30%;
  margin: 10px 0 40px 0;
}
@media screen and (max-width: 1250px) {
  #bigger-container-lol {
    flex-direction: column;
  }
}
</style>
