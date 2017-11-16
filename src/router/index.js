import Vue from "vue";
import Router from "vue-router";
import ExpendituresList from "@/features/Expenditures/List";
import NewExpenditure from "@/features/Expenditures/New";
import EditExpenditure from "@/features/Expenditures/Edit";

import RevenuesList from "@/features/Revenues/List";
import NewRevenue from "@/features/Revenues/New";
import EditRevenue from "@/features/Revenues/Edit";

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
      component: NewExpenditure,
    },
    {
      path: "/expenditures/:id/edit",
      name: "expendituresEdit",
      component: EditExpenditure,
    },
    {
      path: "/revenues",
      name: "revenuesList",
      component: RevenuesList,
    },
    {
      path: "/revenues/new",
      name: "revenuesNew",
      component: NewRevenue,
    },
    {
      path: "/revenues/:id/edit",
      name: "revenuesEdit",
      component: EditRevenue,
    },
    {
      path: "/configuration",
      name: "configuration",
      component: Configuration,
    },
  ],
});
