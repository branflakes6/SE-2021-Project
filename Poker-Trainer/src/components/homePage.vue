<template>
  <div id="main-div">
    <div id="home-banner">
      <img id="home-banner-background" src="../assets/home-banner.png" alt="" />

      <div id="home-banner-foreground">
        <h2>Want to be the best at the table?</h2>
        <router-link v-if="!signedIn" to="/account" class="signup">
          Sign Up
        </router-link>
        <router-link v-if="signedIn" to="/scenarioPage" class="signup">
          Practice
        </router-link>
      </div>
    </div>

    <div id="scenarioThumbnail-container">
      <scenarioThumbnail
        scenarioID="DNbZQrDKW4aDWZA3Hqi6"
        title="Victory Royale"
        author="Upper Hand Poker"
        description="A beginners sample scenario designed to give you familiarity with the website"
      />
      <scenarioThumbnail
        scenarioID="WXSyM3c4DHKftSwMUafW"
        title="How aggressive should i play?"
        author="Upper Hand Poker"
        description="A more in depth sample scenario designed to test your skills of the basics."
      />
      <scenarioThumbnail
        title="good time to fold?"
        author="Upper Hand Poker"
        description="An advanced scenario designed to really test if you know your stuff or not.."
      />
    </div>
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
  background-color: rgb(22, 22, 22);
}

@media screen and (max-width: 1250px) {
  #scenarioThumbnail-container {
    flex-direction: row;
    padding: 0;
    height: auto;
  }
}
</style>
