import Router from "vue-router";
import homePage from '@/components/homePage';
import accountPage from '@/components/accountPage';
import leaderboard from '@/components/leaderboard';
import scenarioPage from '@/components/scenarioPage';
import Vue from "vue";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path:"/home",
            name: "homepage",
            component: homePage,
            meta: {

            },
        },
        {   
            path: "/account",
            name: "accountPage",
            component: accountPage,
            meta: {

            },
        },
        {
            path: "/leaderboard",
            name: "leaderboardPage",
            component: leaderboard,
            meta: {

            },
        },
        {
            path: "/scenario",
            name: "scenarios",
            component: scenarioPage,
            meta: {

            },
        },
        
    ],
});

export default router;