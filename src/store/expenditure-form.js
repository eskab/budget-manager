/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import ExpenditureService from "@/services/expenditures";
import { ERASE_FORM_DATA, FETCH_EXPENDITURE, SET_CATEGORY, SET_COST, SET_DATE, SET_NAME } from "./mutations";

const state = {
  id: null,
  name: null,
  date: null,
  category: null,
  cost: null,
};

const mutations = {
  [SET_NAME](state, value) {
    state.name = value;
  },
  [SET_DATE](state, value) {
    state.date = value;
  },
  [SET_CATEGORY](state, value) {
    state.category = value;
  },
  [SET_COST](state, value) {
    state.cost = value;
  },
  [FETCH_EXPENDITURE](state, { id, name, date, category, cost }) {
    state.id = id;
    state.name = name;
    state.date = date;
    state.category = category;
    state.cost = cost;
  },
  [ERASE_FORM_DATA](state) {
    state.id = null;
    state.name = null;
    state.date = null;
    state.category = null;
    state.cost = null;
  },
};

const actions = {
  setValue({ commit }, payload) {
    switch (payload.field) {
      case "NAME":
        commit(SET_NAME, payload.value);
        break;
      case "DATE":
        commit(SET_DATE, payload.value);
        break;
      case "CATEGORY":
        commit(SET_CATEGORY, payload.value);
        break;
      case "COST":
        commit(SET_COST, payload.value);
        break;
      default:
        throw new Error("Unknown field type");
    }
  },
  getFormDataById({ dispatch, commit }, id) {
    ExpenditureService.getById(id)
      .then(data => commit(FETCH_EXPENDITURE, data))
      .catch(() => dispatch("pushNotification", { message: "Error during fetching", type: "error" }));
  },
  eraseData({ commit }) {
    commit(ERASE_FORM_DATA);
  },
};

export default { state, mutations, actions };
