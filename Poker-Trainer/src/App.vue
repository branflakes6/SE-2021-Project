<template>
<v-app>    
     <v-navigation-drawer permanent v-model="drawer" app>
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
            <v-list-item-content>
              <v-list-item-title class="title">
                {{item.title}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app flat> 
        <v-toolbar-title> Poker </v-toolbar-title>
      </v-app-bar>
      <v-main>
         <router-view>  
         </router-view>
     </v-main>
</v-app>

</template>
<script>


export default {
  name: 'App',
  components: {

  },
  data: () => ({
    drawer: null,
    items: [{
      title: "Home Page",
      to: "/home"
    },
    {
      title: "Acount Page",
      to: "/account"
    },
    {
      title: "Scenario",
      to: "/scenario"
    },
    {
      title: "Leaderboard",
      to: "/leaderboard"
    },
    ]
  }),
};
</script>
