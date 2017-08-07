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

// todo
const actions = {
  fetchExpenditures({ dispatch, commit }) {
    ExpenditureService.fetch()
      .then(data => commit(ASSIGN_EXPENDITURES, data))
      .catch(() => dispatch("pushNotification", { message: "Error during fetching", type: "error" }));
  },
  insertExpenditure({ dispatch, commit }, expenditureObject) {
    const newExpenditure = Object.assign(expenditureObject, { id: uuid() });

    ExpenditureService.insert(newExpenditure)
      .then(data => commit(INSERT_EXPENDITURE, data))
      .then(() => dispatch("pushNotification", { message: "Posting succeeded", type: "success" }))
      .catch(() => dispatch("pushNotification", { message: "Posting expenditure error", type: "error" }));
  },
  deleteExpenditure({ dispatch, commit }, id) {
    ExpenditureService.delete(id)
      .then(() => commit(DELETE_EXPENDITURE, id))
      .then(() => dispatch("pushNotification", { message: "Deleting succeeded", type: "success" }))
      .catch(() => dispatch("pushNotification", { message: "Deleting expenditure error", type: "error" }));
  },
};

export default { state, mutations, actions };
