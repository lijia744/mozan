import Vue from "vue";
import App from "./App.vue";
import "./assets/global.css";
import store from "./store";
import router from "./router";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUi);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
