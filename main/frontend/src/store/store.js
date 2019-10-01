import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	actions,
});

// const enhanceAccessToeken = () => {
//   const { access_token } = localStorage;
//   if (!access_token) return;
//   axios.defaults.headers.common["Authorization"] =
//     localStorage.getItem["access_token"];
// };
// enhanceAccessToeken();

// export default new Vuex.Store({
