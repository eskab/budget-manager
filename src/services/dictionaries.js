import Vue from "vue";

export default {
  fetch() {
    return Vue.http.get("categories")
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
