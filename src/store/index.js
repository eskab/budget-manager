import Vue from "vue";
import Vuex from "vuex";
import expenditures from "./expenditures";
import userinterface from "./userinterface";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expenditures,
    userinterface,
  },
});
