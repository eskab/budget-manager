import { INSERT_EXPENDITURE } from "./mutations";

export default {
  state: {
    expenditures: [],
  },
  mutations: {
    [INSERT_EXPENDITURE](state, expenditureObject) {
      state.expenditures.push(expenditureObject);
    },
  },
  actions: {
    insertExpenditure({ commit }, expenditureObject) {
      console.debug("insertExpenditure store: ", expenditureObject);
      commit(INSERT_EXPENDITURE, expenditureObject);
    },
  },
};
