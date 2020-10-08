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
    redirect: { name: "Upcoming" },
    children: [
      {
        path: "keys",
        name: "KeyMessage",
        component: () => import("@/views/Keys.vue")
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
