import Vue from "vue";

export default {
  fetch() {
    return Vue.http.get("expenditures")
      .then(response => Promise.resolve(response.data));
  },
  insert(request) {
    return Vue.http.post("expenditures", request);
  },
  delete(id) {
    return Vue.http.delete(`expenditures/${id}`);
  },
};
