import Vue from "vue";

export default {
  fetch() {
    return Vue.http.get("revenues")
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  insert(request) {
    return Vue.http.post("revenues", request)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  delete(id) {
    return Vue.http.delete(`revenues/${id}`)
      .catch(error => Promise.reject(error));
  },
  update(request) {
    return Vue.http.put(`revenues/${request.id}`, request);
  },
  getById(id) {
    return Vue.http.get(`revenues/${id}`)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
