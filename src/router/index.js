import Vue from "vue";
import Router from "vue-router";
import ExpendituresList from "@/features/ExpendituresList/ExpendituresList";
import NewForm from "@/features/ExpendituresList/NewForm";
import EditForm from "@/features/ExpendituresList/EditForm";

import RevenuesList from "@/features/RevenuesList/RevenuesList";
import NewRevenueForm from "@/features/RevenuesList/NewRevenue";
import EditRevenueForm from "@/features/RevenuesList/EditRevenue";

import Configuration from "@/features/Configuration";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        name: "expendituresList",
      },
    },
    {
      path: "/expenditures",
      name: "expendituresList",
      component: ExpendituresList,
    },
    {
      path: "/expenditures/new",
      name: "expendituresNew",
      component: NewForm,
    },
    {
      path: "/expenditures/:id/edit",
      name: "expendituresEdit",
      component: EditForm,
    },
    {
      path: "/revenues",
      name: "revenuesList",
      component: RevenuesList,
    },
    {
      path: "/revenues/new",
      name: "revenuesNew",
      component: NewRevenueForm,
    },
    {
      path: "/revenues/:id/edit",
      name: "revenuesEdit",
      component: EditRevenueForm,
    },
    {
      path: "/configuration",
      name: "configuration",
      component: Configuration,
    },
  ],
});
