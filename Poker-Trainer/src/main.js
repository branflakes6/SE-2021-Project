import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./routes/routes";
import VuePlayingCard from "vue-playing-card";

Vue.use(VuePlayingCard);
Vue.config.productionTip = false;

const app = new Vue({
  vuetify,
  router,
  data: {
    loading: false,
    loggedIn: true,
    profileDetails: {
      id: "5c4",
      name: "Brian Farrel",
      rating: 2000,
      scenariosPlayed: 5,
      contributions: 3,
      profilePicture: "profile-pic-1.png",
      about: "Tell us about yourself...",
    },
    scenario: 0,
  },
  render: (h) => h(App),
}).$mount("#app");

Vue.component("loading", { template: "<div>Loading!</div>" });
router.beforeEach((to, from, next) => {
  app.loading = true;
  next();
});
router.afterEach(() => {
  setTimeout(() => ((app.loading = false), 1500)); // timeout for demo purposes
  window.scrollTo(0, 0);
});
