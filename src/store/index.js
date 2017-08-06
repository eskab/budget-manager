import Vue from "vue";
import Vuex from "vuex";
import expenditures from "./expenditures";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expenditures,
  },
});
