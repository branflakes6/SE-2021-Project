<template>
  <nav>
    <v-app-bar color="white--text" dark dense fixed app flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-snackbar v-model="snackbar" timeout="-1" top app>
      jojojojojo asdfjasldf
    </v-snackbar>
    <v-navigation-drawer temporary dark v-model="drawer" app>
      <v-list>
        <a id="title-logo" href="/">
          <div>
            <img id="logo" src="..\assets\logo.jpg" alt="img not found" />
            <h1>TCD Poker Trainer</h1>
          </div>
        </a>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Home ",
        to: "/",
      },
      {
        title: "Profile",
        to: "/account",
      },
      {
        title: "Scenario",
        to: "/scenario",
      },
      {
        title: "Leaderboard",
        to: "/leaderboard",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped>
.v-app-bar {
  background-color: rgb(22, 22, 22) !important;
}

#title-logo {
  background-color: #363636;
  color: #fff;
  text-decoration: none;
}
#title-logo div {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
#logo {
  width: 50px;
}
</style>
