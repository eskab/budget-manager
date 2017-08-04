import Vue from "vue";
import Router from "vue-router";
import Home from "@/features/Home";
import List from "@/features/List";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
  ],
});
