import Vue from "vue";
import firebase from 'firebase';
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
          /*webpackChunkName: "account"*/ "..\\components\\accountPage.vue"
        ),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/loginPage",
      name: "loginPage",
      component: () =>
        import(/*webpackChunkName: "account"*/ "..\\components\\loginPage.vue"),
      meta: {
        requiresGuest: true
      },
    },
    {
      path: "/createAccount",
      name: "createAccount",
      component: () =>
        import(
          /*webpackChunkName: "account"*/ "..\\components\\createAccount.vue"
        ),
      meta: {
        requiresGuest: true
      },
    },
    {
      path: "/scenario",
      name: "scenarios",
      component: () =>
        import(
          /*webpackChunkName: "scenario"*/ "..\\components\\scenarioPage.vue"
        ),
      meta: {
        requiresAuth: true
      },
    },
    {
      path: "/leaderboard",
      name: "leaderboardPage",
      component: () =>
        import(
          /*webpackChunkName: "leaderboard"*/ "..\\components\\leaderboard.vue"
        ),
      meta: {},
    },
    {
      path: "*",
      name: "pageNotFound",
      component: () =>
        import(
          /*webpackChunkName: "pageNotFound"*/ "..\\components\\pageNotFound.vue"
        ),
      meta: {},
    },
  ],
});
router.beforeEach((to,from,next)=>{
    //check for requiredAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)){
      //Check if NOT logged in 
    if(!firebase.auth().currentUser){
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }else{
         next();
      }
    }else if(to.matched.some(record => record.meta.requiresGuest)){
        //Check if logged in 
    if(firebase.auth().currentUser){
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
    });
  }else{
         next();
      }}
    else{
      next();
    }
});
export default router;
