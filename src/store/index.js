import Vue from "vue";
import Vuex from "vuex";
import expenditures from "./expenditures";
import userInterface from "./user-interface";
import expenditureForm from "./expenditure-form";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expenditures,
    userInterface,
    expenditureForm,
  },
});
