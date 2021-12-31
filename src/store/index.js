import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import reflinkModule from './modules/reflink';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  key: 'state',
  storage: window.sessionStorage,
  reducer: (state) => state.reflinkModule,
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    reflinkModule,
  },
  plugins: [vuexLocal.plugin],
});
