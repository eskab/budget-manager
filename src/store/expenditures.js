/* eslint-disable no-param-reassign */
import * as uuid from "uuid/v1";
import { ASSIGN_EXPENDITURES, DELETE_EXPENDITURE, INSERT_EXPENDITURE } from "./mutations";

export default {
  state: {
    expenditures: [],
  },
  mutations: {
    [ASSIGN_EXPENDITURES](state, expenditures) {
      state.expenditures = expenditures;
    },
    [INSERT_EXPENDITURE]({ expenditures }, expenditureObject) {
      expenditures.push(expenditureObject);
    },
    [DELETE_EXPENDITURE](state, id) {
      state.expenditures = state.expenditures.filter(expenditure => expenditure.id !== id);
    },
  },
  actions: {
    fetchExpenditures({ commit }) {
      const expenditures = JSON.parse(localStorage.getItem("expenditures")) || [];

      commit(ASSIGN_EXPENDITURES, expenditures);
    },
    insertExpenditure({ commit }, expenditureObject) {
      const expenditures = JSON.parse(localStorage.getItem("expenditures")) || [];
      const newExpenditure = Object.assign(expenditureObject, { id: uuid() });

      expenditures.push(newExpenditure);
      localStorage.setItem("expenditures", JSON.stringify(expenditures));

      commit(INSERT_EXPENDITURE, newExpenditure);
    },
    deleteExpenditure({ commit }, id) {
      let expenditures = JSON.parse(localStorage.getItem("expenditures")) || [];
      expenditures = expenditures.filter(expenditure => expenditure.id !== id);

      localStorage.setItem("expenditures", JSON.stringify(expenditures));

      commit(DELETE_EXPENDITURE, id);
    },
  },
};
