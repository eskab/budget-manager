import Vue from "vue";

export default {
  fetch() {
    return Vue.http.get("expenditures")
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  insert(request) {
    return Vue.http.post("expenditures", request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  delete(id) {
    return Vue.http.delete(`expenditures/${id}`)
      .catch(error => Promise.reject(error));
  },
  update(request) {
    return Vue.http.put(`expenditures/${request.id}`, request);
  },
  getById(id) {
    return Vue.http.get(`expenditures/${id}`)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
