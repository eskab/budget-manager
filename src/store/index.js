import Vue from "vue";
import Vuex from "vuex";
import expenditures from "./modules/expenditures";
import userInterface from "./modules/user-interface";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expenditures,
    userInterface,
  },
});
