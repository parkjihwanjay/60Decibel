import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

// .components/surveyPage/example에 적용. 플러그인으로 사용하기 위해 .plugins에 vue-scrollactive plugin인 생성 후, main.js에서 플러그인 호출
import "./plugins/vue-scrollactive";
import router from "./router";
import {
  store
} from "./store.js";
import axios from "axios";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 50
});

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // 이거 profile에 대한 store임
  vuetify,
  beforeCreate() {
    this.$store.dispatch("getMemberInfo");
  },
  component: {
    App
  },
  render: h => h(App)
}).$mount("#app");
