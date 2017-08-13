// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "iview/dist/styles/iview.css";
import Vue from "vue";
import iView from "iview";
import locale from "iview/dist/locale/en-US";
import VueResource from "vue-resource";
import App from "./App";
import router from "./router";
import store from "./store";
import "./assets/styles.scss";

Vue.use(VueResource);
Vue.use(iView, { locale });

Vue.config.productionTip = false;
Vue.http.options.root = "http://localhost:3030";

/* eslint-disable no-new */
new Vue({
  el: "#budget-manager",
  store,
  router,
  template: "<App/>",
  components: { App },
});
