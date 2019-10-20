import store from '../store/store.js';

const requireAuth = () => {
	if (!store.state.isLogin) {
		if (store.state.isLoginError) {
			alert('세션이 만료 되었습니다.');
			return 'session-expired';
		} else {
			alert('로그인을 먼저 해주세요');
			return 'not-login';
		}
	} else {
		return 'login';
	}
};

const checkProfile = () => {
	for (let ans in store.state.profile) {
		if (!store.state.profile[ans]) {
			return false;
		}
	}

	return true;
};

export { requireAuth, checkProfile };
