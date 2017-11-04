import Vue from "vue";
import Vuex from "vuex";
import * as sinon from "sinon";
import moment from "moment";
import List from "@/features/ExpendituresList/ExpendituresList";
import router from "@/router";
import { ASSIGN_EXPENDITURES } from "../../../src/store/mutations";

const store = {
  state: {
    expenditures: [],
  },
  mutations: {
    ASSIGN_EXPENDITURES(state, expenditures) {
      // eslint-disable-next-line
      state.expenditures = expenditures;
    },
  },
  getters: {
    pagedExpenditures: (state) => {
      const { expenditures } = state;

      expenditures.forEach((expenditure) => {
        //eslint-disable-next-line
        expenditure.date = moment(expenditure.date).format("DD-MM-YYYY");
      });

      return expenditures;
    },
  },
  actions: {
    fetchExpenditures({ commit }) {
      commit(ASSIGN_EXPENDITURES, [
        {
          id: "b90c9210-7f66-11e7-9744-e16db33d6e5d",
          name: "NameName",
          date: "2017-08-01T14:01:00.000Z",
          category: "Food",
          cost: "123",
        },
      ]);
    },
  },
};

describe("List.vue", () => {
  it("should correctly map data from store", (done) => {
    const Ctor = Vue.extend(List);
    const vm = new Ctor({
      router,
      store: new Vuex.Store({
        modules: {
          expenditures: store,
        },
      }),
    });

    vm.$mount();

    Vue.nextTick()
      .then(() => {
        expect(vm.list.length).to.equal(1);
        done();
      })
      .catch(done);
  });

  it("should call fetch method", () => {
    const Ctor = Vue.extend(List);
    const vm = new Ctor({
      router,
      store: new Vuex.Store({
        modules: {
          expenditures: store,
        },
      }),
    });

    const spy = sinon.spy(List.methods, "fetchExpenditures");

    vm.$mount();

    expect(spy).to.have.been.called();
  });
});
