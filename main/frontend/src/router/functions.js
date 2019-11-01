import store from '../store/store.js';

const requireAuth = () => {
	if (!localStorage.getItem('isLogin')) {
		alert('로그인을 먼저 해주세요');
		return 'not-login';
	} else {
		return 'login';
	}
};

const checkProfile = () => {
	for (let ans in store.state.profile) {
		if (store.state.profile[ans] === false) break;
		if (!store.state.profile[ans]) {
			return false;
		}
	}

	return true;
};

export { requireAuth, checkProfile };
