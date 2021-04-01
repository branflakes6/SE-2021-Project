<template>
  <v-app>
    <v-navigation-drawer dark permanent v-model="drawer" app>
      <v-list>
        <v-list-item>
          <img id="logo" src="..\assets\logo.jpg" alt="img not found" />
          <h1>TCD Poker Trainer</h1>
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Home ",
        to: "/home",
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
#logo {
  width: 50px;
}
</style>
