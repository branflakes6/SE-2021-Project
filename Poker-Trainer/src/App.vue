<template>
<v-app>
      <div class="ma-12 pa-12">
      <v-card>
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
      </v-card>
      </div>
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
      title: "scenario",
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
