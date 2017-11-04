import Vue from "vue";
import Router from "vue-router";
import ExpendituresList from "@/features/Expenditures/ExpendituresList";
import NewForm from "@/features/Expenditures/NewForm";
import EditForm from "@/features/Expenditures/EditForm";

import RevenuesList from "@/features/Revenues/RevenuesList";
import NewRevenueForm from "@/features/Revenues/NewRevenue";
import EditRevenueForm from "@/features/Revenues/EditRevenue";

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
