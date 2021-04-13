import firebase from 'firebase';
import Vue from "vue";
import App from "./App.vue";
import router from "./routes/routes";
import VuePlayingCard from "vue-playing-card";


Vue.use(VuePlayingCard);
Vue.config.productionTip = false;
firebase.auth().onAuthStateChanged(function() {
  if (!App) {
    /* eslint-disable no-new */
    App = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
});


Vue.component("loading", { template: "<div>Loading!</div>" });
router.beforeEach((to, from, next) => {
  App.loading = true;
  next();
});
router.afterEach(() => {
  setTimeout(() => ((App.loading = false), 1500)); // timeout for demo purposes
});
