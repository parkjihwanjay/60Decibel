import routes from './router.js';
import VueRouter from 'vue-router';
import store from '../store/store.js';
import axios from 'axios';

const router = new VueRouter({
	mode: 'history',
	hashbang: false,
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});

router.beforeEach(async (to, from, next) => {
	if (localStorage.getItem('isLogin')) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
			'access_token',
		)}`;
		axios.defaults.headers.common['Content-Type'] = 'application/json';
	}
	next();
});

export default router;
