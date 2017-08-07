/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import * as uuid from "uuid/v1";
import ExpenditureService from "@/services/expenditures";
import { ASSIGN_EXPENDITURES, DELETE_EXPENDITURE, INSERT_EXPENDITURE } from "./mutations";

const state = {
  expenditures: [],
};

const mutations = {
  [ASSIGN_EXPENDITURES](state, expenditures) {
    state.expenditures = expenditures;
  },
  [INSERT_EXPENDITURE]({ expenditures }, expenditureObject) {
    expenditures.push(expenditureObject);
  },
  [DELETE_EXPENDITURE](state, id) {
    state.expenditures = state.expenditures.filter(expenditure => expenditure.id !== id);
  },
};

const actions = {
  fetchExpenditures({ commit }) {
    ExpenditureService.fetch()
      .then(data => commit(ASSIGN_EXPENDITURES, data));
  },
  insertExpenditure({ commit }, expenditureObject) {
    const newExpenditure = Object.assign(expenditureObject, { id: uuid() });

    ExpenditureService.insert(newExpenditure)
      .then(data => commit(INSERT_EXPENDITURE, data));
  },
  deleteExpenditure({ commit }, id) {
    ExpenditureService.delete(id)
      .then(() => commit(DELETE_EXPENDITURE, id));
  },
};

export default { state, mutations, actions };
