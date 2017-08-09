import Vue from "vue";
import Router from "vue-router";
import Home from "@/features/Home";
import List from "@/features/List";
import NewForm from "@/features/NewForm";
import EditForm from "@/features/EditForm";

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
    {
      path: "/new",
      name: "NewForm",
      component: NewForm,
    },
    {
      path: "/edit/:id",
      name: "EditForm",
      component: EditForm,
    },
  ],
});
