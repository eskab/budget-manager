import Vue from "vue";
import Router from "vue-router";
import List from "@/features/List";
import NewForm from "@/features/NewForm";
import EditForm from "@/features/EditForm";
import Configuration from "@/features/Configuration";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
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
      path: "/new/:id",
      name: "NewFormId",
      component: NewForm,
    },
    {
      path: "/edit/:id",
      name: "EditForm",
      component: EditForm,
    },
    {
      path: "/configuration",
      name: "Configuration",
      component: Configuration,
    },
  ],
});
