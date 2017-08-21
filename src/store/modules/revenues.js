/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import * as uuid from "uuid/v1";
import { ASSIGN_REVENUES, INSERT_REVENUE, UPDATE_REVENUE, DELETE_REVENUE } from "@/store/mutations";
import RevenuesService from "@/services/revenues";

const state = {
  revenues: [],
};

const mutations = {
  [ASSIGN_REVENUES](state, revenues) {
    state.revenues = revenues;
  },
  [INSERT_REVENUE](state, revenue) {
    state.revenues.push(revenue);
  },
  [DELETE_REVENUE](state, id) {
    state.revenues = state.revenues.filter(revenue => revenue.id !== id);
  },
  [UPDATE_REVENUE](state, revenueObject) {
    state.revenues.forEach((revenue) => {
      if (revenue.id === revenueObject.id) {
        revenue = revenueObject;
      }
    });
  },
};

const actions = {
  fetchRevenues({ dispatch, commit }) {
    RevenuesService.fetch()
      .then(data => commit(ASSIGN_REVENUES, data))
      .catch(() => dispatch("showErrorNotification", "Error during fetching"));
  },
  insertRevenue({ commit, dispatch }, revenueObject) {
    // Todo - move id creation
    const newRevenue = Object.assign(revenueObject, { id: uuid() });

    RevenuesService.insert(newRevenue)
      .then(data => commit(INSERT_REVENUE, data))
      .then(() => dispatch("showSuccessNotification", "Posting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Posting revenue error"));
  },
  updateRevenue({ dispatch, commit }, revenueObject) {
    RevenuesService.update(revenueObject)
      .then(data => commit(UPDATE_REVENUE, data))
      .then(() => dispatch("showSuccessNotification", "Putting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Putting revenue error"));
  },
  deleteRevenue({ dispatch, commit }, id) {
    RevenuesService.delete(id)
      .then(() => commit(DELETE_REVENUE, id))
      .then(() => dispatch("showSuccessNotification", "Deleting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Deleting revenue error"));
  },
};

export default { state, mutations, actions };
