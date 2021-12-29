import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './languages';
import VueMeta from 'vue-meta';
import './registerGlobalComponents';
import './email';

Vue.config.productionTip = true;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
