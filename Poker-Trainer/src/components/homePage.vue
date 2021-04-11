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
  </div>
</template>

<script>
export default {
  name: "homePage",

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
  margin-bottom: 10%;
}
</style>
