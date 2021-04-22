
<template>
  <nav>
    <v-app-bar color=" white--text" dark dense fixed app flat>
      <router-link id="title-logo" to="/" class="title">
        <div>
          <img id="logo" src="../assets/logo.png" alt="img not found" />
          <h1 class="title">Upper Hand Poker Trainer</h1>
        </div>
      </router-link>
      <v-spacer />
          <li v-if="loggedIn">
            <button v-on:click="toProfile" class="minis" rounded color="black" dark>
           {{email}}
          </button>
            <button v-on:click="logout" rounded color="black" dark>
           Logout
          </button>    
        </li>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      color="grey darken-4"
      temporary
      dark
      v-model="drawer"
      app
      fixed
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

      <v-footer class="justify-center pl-0" inset app>
        <v-col align="center" justify="center">
          <v-row align="center" justify="center">
          <h5>Created by TCD SWENG-7</h5>
          </v-row>
          <v-row align="center" justify="center">
           <h6>2021</h6>
          </v-row>
        </v-col>
      </v-footer>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import firebase from '../firebase';
export default {
  props: ["loggedIn", "email"],
  data: () => ({
    currentUser: false,
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
        title: "Scenarios",
        to: "/scenarioBrowser",
      },
      {
        title: "Leaderboard",
        to: "/leaderboard",
      },
      
    ],
  }),
  
  created() {
    if(firebase.auth().currentUser){
      this.currentUser = firebase.auth().currentUser.email
    }

  },
  methods: {
    logout: function(){
      this.$root.loggedIn= false;
      firebase.auth().signOut().then(()=> {
        this.$router.push('/account')
    });
    },
    toProfile() {
    this.$router.push(`profile/${this.email}`);
  },
  }
};
</script>
<style scoped>
.v-app-bar {
  background-color: rgb(22, 22, 22) !important;
}
.minis {
  padding: 20px 20px 20px 0px
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
