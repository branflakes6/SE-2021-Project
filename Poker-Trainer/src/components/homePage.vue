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
    <img src="../assets/browser-screenshot.png" alt="" />
    <h1 class="tutorial-header">
      Analyze the scenrio by looking at the visual representation, and reading
      the "State of Play"
    </h1>
    <img
      id="scenario-screenshot"
      src="../assets/scenario-screenshot.png"
      alt="screenshot of scenario"
    />
    <h1 class="tutorial-header">
      Give back to the community by creating scenarios for other players
    </h1>
    <img
      id="form-screenshot"
      src="../assets/form-screenshot.png"
      alt="screenshot of form"
    />
    <v-dialog v-model="showSignUpForm" max-width="640">
      <sign-up-form />
    </v-dialog>
  </div>
</template>

<script>
import signUpForm from "./signUpForm";
export default {
  name: "homePage",
  components: {
    signUpForm,
  },
  data: () => ({
    signedIn: true,
    drawer: false,
    showSignUpForm: false,
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
#scenarioThumbnail-container {
  width: 80%;
  height: 500px;
  margin: 20px 0 50px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(22, 22, 22);
}
#scenario-screenshot {
  width: 75%;
}
#form-screenshot {
  width: 30%;
  margin: 10px 0 40px 0;
}
@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
</style>
