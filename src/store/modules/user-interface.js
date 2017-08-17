/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

import { CLEAR_CURRENT_NOTIFICATION, PUSH_NOTIFICATION, SET_NOTIFICATION } from "../mutations";

const state = {
  notifications: [],
  currentNotification: null,
};

const mutations = {
  [PUSH_NOTIFICATION]({ notifications }, notification) {
    notifications.push(notification);
  },
  [SET_NOTIFICATION](state, notification) {
    state.currentNotification = notification;
  },
  [CLEAR_CURRENT_NOTIFICATION](state) {
    state.currentNotification = null;
  },
};

const actions = {
  pushNotification({ dispatch, commit }, payload) {
    commit(PUSH_NOTIFICATION, payload);
    dispatch("setCurrentNotification", payload);
  },
  setCurrentNotification({ commit }, payload) {
    commit(SET_NOTIFICATION, payload);
  },
  clearCurrentNotification({ commit }) {
    commit(CLEAR_CURRENT_NOTIFICATION);
  },
  showErrorNotification({ dispatch }, message) {
    dispatch("pushNotification", { message, type: "error" });
  },
  showSuccessNotification({ dispatch }, message) {
    dispatch("pushNotification", { message, type: "success" });
  },
};

export default { state, mutations, actions };
