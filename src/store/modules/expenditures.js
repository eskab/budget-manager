/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import * as uuid from "uuid/v1";
import moment from "moment";
import ExpenditureService from "@/services/expenditures";
import { ASSIGN_EXPENDITURES, DELETE_EXPENDITURE, INSERT_EXPENDITURE, UPDATE_EXPENDITURE } from "../mutations";

// Todo - move it somewhere
const filterByCategories = (expenditures, categories) =>
  expenditures.filter(expenditure =>
    !categories.length || categories.some(category => category === expenditure.category),
  );

const filterByDateRange = (expenditures, [startDate, endDate]) =>
  expenditures.filter(({ date }) => {
    const dateObject = moment(date);
    return (
      dateObject.isSame(startDate, "day") || dateObject.isAfter(startDate, "day")
    ) && (
      dateObject.isSame(endDate, "day") || dateObject.isBefore(endDate, "day")
    );
  });

const state = {
  expenditures: [],
  filters: {
    categories: [],
    dateRange: [],
  },
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
  [UPDATE_EXPENDITURE](state, expenditureObject) {
    state.expenditures.forEach((expenditure) => {
      if (expenditure.id === expenditureObject.id) {
        expenditure = expenditureObject;
      }
    });
  },
};

const getters = {
  // Todo - it is not the best approach to do that
  filteredExpenditures: ({ expenditures, filters }) => {
    let filteredExpenditures = expenditures;

    Object.keys(filters)
      // eslint-disable-next-line
      .forEach((key) => {
        switch (key) {
          case "dateRange":
            filteredExpenditures = filterByDateRange(filteredExpenditures, filters.dateRange);
            break;
          case "categories":
            filteredExpenditures = filterByCategories(filteredExpenditures, filters.categories);
            break;
          default:
            return filteredExpenditures;
        }
      });

    return filteredExpenditures;
  },
};

const actions = {
  fetchExpenditures({ dispatch, commit }) {
    ExpenditureService.fetch()
      .then(data => commit(ASSIGN_EXPENDITURES, data))
      // Todo
      .catch(() => dispatch("pushNotification", { message: "Error during fetching", type: "error" }));
  },
  insertExpenditure({ dispatch, commit }, expenditureObject) {
    const newExpenditure = Object.assign(expenditureObject, { id: uuid() });

    ExpenditureService.insert(newExpenditure)
      .then(data => commit(INSERT_EXPENDITURE, data))
      .then(() => dispatch("pushNotification", { message: "Posting succeeded", type: "success" }))
      .catch(() => dispatch("pushNotification", { message: "Posting expenditure error", type: "error" }));
  },
  updateExpenditure({ dispatch, commit }, expenditureObject) {
    ExpenditureService.update(expenditureObject)
      .then(data => commit(UPDATE_EXPENDITURE, data))
      .then(() => dispatch("pushNotification", { message: "Putting succeeded", type: "success" }))
      .catch(() => dispatch("pushNotification", { message: "Putting expenditure error", type: "error" }));
  },
  deleteExpenditure({ dispatch, commit }, id) {
    ExpenditureService.delete(id)
      .then(() => commit(DELETE_EXPENDITURE, id))
      .then(() => dispatch("pushNotification", { message: "Deleting succeeded", type: "success" }))
      .catch(() => dispatch("pushNotification", { message: "Deleting expenditure error", type: "error" }));
  },
};

export default { state, mutations, getters, actions };