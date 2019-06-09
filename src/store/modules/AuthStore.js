import AuthService from '../../services/AuthService';

const clientid = process.env.VUE_APP_CLIENT_ID;
const authority = process.env.VUE_APP_AUTHORITY;
const scopes = [process.env.VUE_APP_SCOPE_READ];

console.log(`clientid = ${clientid}`);
console.log(`authority = ${authority}`);
console.log(`scopes = ${scopes}`);

const authservice = new AuthService(clientid, authority, scopes);

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: {},
  },
  mutations: {
    updateIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    updateUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async login({ commit }) {
      console.log('DEBUG: Store login called');
      const user = await authservice.login();
      commit('updateUser', user);
      commit('updateIsAuthenticated', true);
      console.log('DEBUG: Store login complete.');
    },
    logout({ commit }) {
      authservice.logout();
      commit('updateUser', {});
      commit('updateIsAuthenticated', false);
    },
  },
};
