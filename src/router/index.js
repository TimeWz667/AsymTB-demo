import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout";
import NotFound from "@/views/NotFound";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/keys",
    children: [
      {
        path: "keys",
        name: "KeyMessage",
        component: () => import("@/views/Keys.vue")
      },
      {
        path: "care",
        name: "CareSeeking",
        component: () => import("@/views/Care.vue")
      },
      {
        path: "asym",
        name: "AsymptomaticTB",
        component: () => import("@/views/Asym.vue")
      },
      {
        path: "progression",
        name: "Progression",
        component: () => import("@/views/Progression.vue")
      },
      {
        path: "country",
        name: "CountryProfiles",
        //redirect: { name: "Upcoming" },
        component: () => import("@/views/Country.vue"),
        //component: () => import("@/views/Upcoming.vue")
      },
      {
        path: "discussion",
        name: "Discussion",
        component: () => import("@/views/Discussion.vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue")
      }
    ]
  },
  { path: "*", component: NotFound },
  { path: "upcoming",
    name: "Upcoming",
    component: () => import("@/views/Upcoming.vue") }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active"
});

export default router;
