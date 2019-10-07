import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

// .components/surveyPage/example에 적용. 플러그인으로 사용하기 위해 .plugins에 vue-scrollactive plugin인 생성 후, main.js에서 플러그인 호출
import './plugins/vue-scrollactive';
import router from './router/index.js';
import store from './store/store.js';
import axios from 'axios';
import VueRouter from 'vue-router';
// IE에서는 promise를 지원하지 않기 때문에 추가
import ES6Promise from 'es6-promise';
ES6Promise.polyfill();
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	offset: 50,
});

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
	router,
	store,
	vuetify,
	// beforeCreate() {
	// 	if (localStorage.getItem('access_token')) {
	// 		this.$store.dispatch('getMemberInfo');
	// 	}
	// },
	component: {
		App,
	},
	render: h => h(App),
}).$mount('#app');
