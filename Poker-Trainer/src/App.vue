<template>
<v-app>    
      <v-main>
        
        <div>
      <v-card>
        <v-row>
        <v-col>
      <v-navigation-drawer permanent v-model="drawer">
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
        </v-col>
      <v-col>
         <router-view>  
       </router-view>
      </v-col>
      </v-row>
      </v-card>
      </div>  
     </v-main>
     <div align = "center">
        <img alt="peppoRideGooseGun" src="./assets/Peppo.gif" contain height = "60px" width = "60px">
      </div>
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
