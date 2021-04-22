<template>
  <v-app id="app">
    <Navbar :loggedIn="loggedIn" />
    <v-content>
      <PageLoader v-if="$root.loading" />
      <router-view
        v-else
        :loggedIn="$root.loggedIn"
        :profileDetails="$root.profileDetails"
      >
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import firebase from "firebase";
export default {
  name: "App",
  components: {
    Navbar,
    PageLoader,
  },
  watch: {
        $route() {
            if(firebase.auth().currentUser){
                this.loggedIn = true
                this.user = firebase.auth().currentUser.email
            }
            else{
                this.loggedIn = false
                this.user = ""
            }
        }
    },
  data: () => ({
  loggedIn: false
  }),
};
</script>

<style scoped>
#app {
  background-color: rgb(22, 22, 22) !important;
}
</style>
