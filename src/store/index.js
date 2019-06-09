import Vue from 'vue';
import Vuex from 'vuex';
import AuthStore from './modules/AuthStore';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: AuthStore,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
