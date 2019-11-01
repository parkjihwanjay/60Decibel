const SessionExpired = () => {
	alert('세션이 만료되었습니다.');
	localStorage.clear();
	location.reload(true);
	router.push({
		name: 'home',
	});
};

const LoginSuccess = res => {
	localStorage.setItem('access_token', res.data.token);
	localStorage.setItem('isLogin', true);
	localStorage.setItem('username', res.data.username);
};

export { SessionExpired, LoginSuccess };
