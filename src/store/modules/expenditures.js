/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import * as uuid from "uuid/v1";
import ExpenditureService from "@/services/expenditures";
import { generatePagedData, isDateValid, isCategoryValid } from "@/utils";
import {
  ASSIGN_EXPENDITURES, DELETE_EXPENDITURE, INSERT_EXPENDITURE, UPDATE_CATEGORY_FILTER,
  UPDATE_DATERANGE_FILTER, UPDATE_EXPENDITURE, SET_CURRENT_PAGE,
} from "../mutations";

const filterExpenditures = (expenditures, filters) =>
  expenditures
    .filter(isDateValid(filters.dateRange))
    .filter(isCategoryValid(filters.categories));

const state = {
  expenditures: [],
  filters: {
    categories: [],
    dateRange: [],
  },
  itemsPerPage: 10,
  currentPage: 1,
};

const mutations = {
  [ASSIGN_EXPENDITURES](state, expenditures) {
    state.expenditures = expenditures;
  },
  [INSERT_EXPENDITURE](state, expenditure) {
    state.expenditures.push(expenditure);
  },
  [DELETE_EXPENDITURE](state, id) {
    state.expenditures = state.expenditures.filter(expenditure => expenditure.id !== id);
  },
  [UPDATE_EXPENDITURE](state, expenditure) {
    const index = state.expenditures.findIndex(({ id }) => id === expenditure.id);

    state.expenditures[index] = expenditure;
  },
  [UPDATE_CATEGORY_FILTER](state, value) {
    state.filters.categories = value;
  },
  [UPDATE_DATERANGE_FILTER](state, value) {
    state.filters.dateRange = value;
  },
  [SET_CURRENT_PAGE](state, value) {
    state.currentPage = value;
  },
};

const getters = {
  pagedExpenditures: ({ expenditures, filters, itemsPerPage }) =>
    generatePagedData(
      filterExpenditures(expenditures, filters),
      itemsPerPage,
    ),
  totalCount: ({ expenditures, filters }) => filterExpenditures(expenditures, filters).length,
};

const actions = {
  fetchExpenditures({ dispatch, commit }) {
    ExpenditureService.fetch()
      .then(data => commit(ASSIGN_EXPENDITURES, data))
      .catch(() => dispatch("showErrorNotification", "Error during fetching"));
  },
  insertExpenditure({ dispatch, commit }, expenditureObject) {
    const newExpenditure = Object.assign(expenditureObject, { id: uuid() });

    ExpenditureService.insert(newExpenditure)
      .then(data => commit(INSERT_EXPENDITURE, data))
      .then(() => dispatch("showSuccessNotification", "Posting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Posting expenditure error"));
  },
  updateExpenditure({ dispatch, commit }, expenditureObject) {
    ExpenditureService.update(expenditureObject)
      .then(data => commit(UPDATE_EXPENDITURE, data))
      .then(() => dispatch("showSuccessNotification", "Putting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Putting expenditure error"));
  },
  deleteExpenditure({ dispatch, commit }, id) {
    ExpenditureService.delete(id)
      .then(() => commit(DELETE_EXPENDITURE, id))
      .then(() => dispatch("showSuccessNotification", "Deleting succeeded"))
      .catch(() => dispatch("showErrorNotification", "Deleting expenditure error"));
  },
};

export default { state, mutations, getters, actions };
