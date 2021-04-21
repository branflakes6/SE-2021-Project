import Vue from "vue";
import Router from "vue-router";
import homePage from "@/components/homePage";

Vue.use(Router);

// Routes are implemented using lazy-loading to increase app speed
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/", // '/' acts like index.html would in a multipage website
      name: "homepage",
      component: homePage,
      meta: {},
    },
    {
      path: "/account",
      name: "accountPage",
      component: () =>
        import(
          /*webpackChunkName: "account"*/ "..//components//accountPage.vue"
        ),
      meta: {},
    },
    {
      path: "/profile/:userName",
      name: "profile",
      component: () =>
        import(
          /*webpackChunkName: "account"*/ "..//components//profilePage.vue"
        ),
      meta: {},
    },
    {
      path: "/scenarioBrowser",
      name: "scenarioBrowser",
      component: () =>
        import(
          /*webpackChunkName: "scenario"*/ "..//components//scenarioBrowser.vue"
        ),
      meta: {},
    },
    {
      path: "/scenarioPage/:scenarioID",
      name: "scenarioPage",
      component: () =>
        import(
          /*webpackChunkName: "scenario"*/ "..//components//scenarioPage.vue"
        ),
      meta: {},
    },
    {
      path: "/leaderboard",
      name: "leaderboardPage",
      component: () =>
        import(
          /*webpackChunkName: "leaderboard"*/ "..//components//leaderboardPage.vue"
        ),
      meta: {},
    },
    {
      path: "*",
      name: "pageNotFound",
      component: () =>
        import(
          /*webpackChunkName: "pageNotFound"*/ "..//components//pageNotFound.vue"
        ),
      meta: {},
    },
  ],
});

export default router;
