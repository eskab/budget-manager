import Vue from "vue";
import Router from "vue-router";
import List from "@/features/ExpendituresList/ExpendituresList";
import NewForm from "@/features/NewForm";
import EditForm from "@/features/EditForm";
import Configuration from "@/features/Configuration";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/expenditures",
      name: "expendituresList",
      component: List,
    },
    {
      path: "/expenditure/new",
      name: "expenditureNew",
      component: NewForm,
    },
    {
      path: "/expenditure/edit/:id",
      name: "expenditureEdit",
      component: EditForm,
    },
    {
      path: "/configuration",
      name: "configuration",
      component: Configuration,
    },
  ],
});
