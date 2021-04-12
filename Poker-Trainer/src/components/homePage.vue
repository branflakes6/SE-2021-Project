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

    <div id="scenarioThumbnail-container">
      <scenarioThumbnail
        scenarioID="DNbZQrDKW4aDWZA3Hqi6"
        title="Victory Royale"
        author="Upper Hand Poker"
        description="A sample scenario by us here at Upper Hand Poker. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae perspiciatis ipsa commodi tenetur ab quia illo ducimus consequuntur fugiat."
      />
      <scenarioThumbnail
        scenarioID="WXSyM3c4DHKftSwMUafW"
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
    <v-dialog v-model="showSignUpForm" max-width="640">
      <sign-up-form />
    </v-dialog>
  </div>
</template>

<script>
import scenarioThumbnail from "./scenarioThumbnail";
import signUpForm from "./signUpForm";
export default {
  name: "homePage",
  components: {
    scenarioThumbnail,
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

#scenarioThumbnail-container {
  width: 80%;
  height: 500px;
  margin: 20px 0 100px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #2e2e2e;
}

@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
</style>
