<template>
  <div id="main-div">
    <h2>Want to be the best at the table?</h2>
    <div>
      <router-link v-if="!signedIn" to="/account" class="signup">
        Sign Up
      </router-link>
      <router-link v-if="signedIn" to="/scenario" class="signup">
        Practice
      </router-link>
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
  min-height: 200%;
  background-color: rgb(22, 22, 22);
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup {
  color: red;
}
.test {
  width: 100px;
  height: 100px;
  background-color: blanchedalmond;
}
</style>
