import routes from './router.js';
import VueRouter from 'vue-router';
import store from '../store/store.js';

const router = new VueRouter({
	mode: 'history',
	hashbang: false,
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});

router.beforeEach(async (to, from, next) => {
	try {
		store.commit('SET_LOADING', true);
		await store.dispatch('getMemberInfo');
		store.commit('SET_LOADING', false);
		next();
	} catch (error) {
		alert(error);
	}
});

export default router;
