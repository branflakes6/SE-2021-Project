<template>
  <v-app id="app">
    <Navbar />
    <v-content>
      <PageLoader v-if="$root.loading" />
      <router-view v-else v-bind:loggedIn="$root.loggedIn"> </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";

export default {
  name: "App",
  components: {
    Navbar,
    PageLoader,
  },
  data: () => ({}),
};
</script>

<style scoped>
#app {
  background-color: rgb(22, 22, 22) !important;
}
</style>
