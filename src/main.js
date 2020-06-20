import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import * as services from "./services/";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.prototype.$services = services;
Vue.config.productionTip = false;
Vue.config.productionTip = false;


Vue.use(BootstrapVue);
Vue.use(VueToast);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
