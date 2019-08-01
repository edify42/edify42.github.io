import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueButtonSpinner from 'vue-button-spinner';

import routes from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue, VueButtonSpinner);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
