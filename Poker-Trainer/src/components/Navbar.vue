<template>
  <nav>
    <v-app-bar color=" white--text" dark dense fixed app flat>
      <a id="title-logo" href="/" class="title">
        <div>
          <img id="logo" src="..\assets\logo.png" alt="img not found" />
          <h1>TCD Poker Trainer</h1>
        </div>
      </a>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      color="grey darken-4"
      temporary
      dark
      v-model="drawer"
      app
    >
      <v-list>
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
};
</script>
<style scoped>
.v-app-bar {
  background-color: rgb(22, 22, 22) !important;
}

#title-logo {
  background-color: rgb(22, 22, 22);
  color: #fff;
  text-decoration: none;
}
#title-logo div {
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  height: 45px;
  margin: 0 10px 0 -10px;
}
</style>
