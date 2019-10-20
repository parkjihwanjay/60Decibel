import axios from 'axios';
import router from '../router/index.js';

import {
	Login,
	Logout,
	Signup,
	getMemberInfo,
	getProfileInfo,
	getStomachInfo,
	getSurveyHistory,
	updateProfileInfo,
	shootSurveyData,
} from '../api/axios.js';

export default {
	login({ commit }, loginObj) {
		Login(loginObj)
			.then(res => {
				localStorage.setItem('access_token', res.data.token);

				axios.defaults.headers.common['Authorization'] = res.data.token;

				if (loginObj.from_signup) {
					router.push({
						name: 'profileupdate',
					});
				} else
					router.push({
						name: 'home',
					});
			})
			.catch(() => {
				alert('이메일과 비밀번호를 확인하세요.');
			});
	},
	// 로그아웃 function
	logout({ commit }) {
		Logout(this.state.userInfo)
			.then(res => {
				alert('로그아웃이 성공적으로 이루어졌습니다.');
				commit('logout', 'RESET_RANDOM_USER');
				axios.defaults.headers.common['Authorization'] = undefined;
				localStorage.clear();
				router.push({
					name: 'home',
				});
			})
			.catch(err => {
				console.log(err);
			});
	},
	getMemberInfo({ commit }) {
		if (!localStorage.getItem('access_token')) {
			commit('loginNotYet');
		} else {
			let token = localStorage.getItem('access_token');
			let config = {
				headers: {
					Authorization: 'JWT ' + token,
					'Content-Type': 'application/json',
				},
			};

			return getMemberInfo(config)
				.then(({ data }) => commit('loginSuccess', data.username))
				.catch(() => {
					commit('loginError');
				});
		}
	},
	signup(dispatch, signupObj) {
		// login --> 토큰 반환
		if (
			this.state.random_user.username &&
			this.state.random_user.email &&
			this.state.random_user.password1 &&
			this.state.random_user.password2
		) {
			const { username, email, password1, password2 } = this.state.random_user;

			let quickLogin = {
				username,
				email,
				password1,
				password2,
			};

			let login_info = {
				username,
				password: password1,
				from_signup: true,
			};

			Signup(quickLogin)
				.then(async res => {
					await this.dispatch('resetRandomUser');
					alert('회원가입이 성공적으로 이뤄졌습니다.');
					this.dispatch('login', login_info);
					console.log(res);
				})
				.catch(() => {
					alert('이메일과 비밀번호를 확인하세요.');
				});
		} else {
			Signup(signupObj)
				.then(res => {
					console.log(signupObj);
					let login_info = {};

					login_info['username'] = signupObj.username;
					login_info['password'] = signupObj.password1;
					login_info['from_signup'] = true;

					alert('회원가입이 성공적으로 이뤄졌습니다.');

					this.dispatch('login', login_info);
				})
				.catch(err => {
					console.log(err.response);
					if (err.response.data.username) alert('이미 존재하는 아이디입니다');
					else if (err.response.data.email) alert('이미 존재하는 이메일입니다');
					else if (err.response.data.non_field_errors) alert('패스워드가 같지 않습니다.');
					else if (err.response.data.password1) {
						alert(err.response.data.password1[0]);
					}
				});
		}
	},
	setSurveyData({ commit }, survey_data) {
		commit('SET_SURVEY_DATA', survey_data);
	},
	setSurveyData6({ dispatch, commit }, survey_data) {
		commit('SET_SURVEY_DATA', survey_data);
		dispatch('shootSurveyData', this.state.answer);
	},

	getProfileInfo({ commit }) {
		let token = localStorage.getItem('access_token');
		let config = {
			headers: {
				Authorization: 'JWT ' + token,
				'Content-Type': 'application/json',
			},
		};

		return getProfileInfo(config)
			.then(({ data }) => {
				commit('SET_PROFILE', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	getStomachInfo({ commit }, stomachId) {
		let token = localStorage.getItem('access_token');
		let config = {
			headers: {
				Authorization: 'JWT ' + token,
				'Content-Type': 'application/json',
			},
		};

		return getStomachInfo(stomachId, config)
			.then(({ data }) => {
				commit('SET_STOMACH', data);
			})
			.catch(error => {
				console.log(error);
			});
	},

	getSurveyHistory({ commit }) {
		let token = localStorage.getItem('access_token');
		let config = {
			headers: {
				Authorization: 'JWT ' + token,
				'Content-Type': 'application/json',
			},
		};
		return getSurveyHistory(config)
			.then(({ data }) => {
				commit('SET_SURVEY_HISTORY', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	// 지환 : 랜덤 계정을 생성해서 회원가입 폼에 보냄
	start({ commit }) {
		let username = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < 12; i++)
			username += possible.charAt(Math.floor(Math.random() * possible.length));

		let email = username + '@naver.com';

		let password1 = '60dbfighithing!!';
		let password2 = password1;

		let startObj = {
			username,
			email,
			password1,
			password2,
		};

		commit('SET_QUICK_START', startObj);

		router.push({
			name: 'signup',
		});
	},
	updateProfileInfo(dispatch, update) {
		let token = localStorage.getItem('access_token');
		let config = {
			headers: {
				Authorization: 'JWT ' + token,
				'Content-Type': 'application/json',
			},
		};
		updateProfileInfo(config, update)
			.then(() => {
				router.push({
					name: 'profiles',
				});
			})
			.catch(error => {
				console.log(error);
			});
	},
	shootSurveyData({ commit }, survey_data) {
		let token = localStorage.getItem('access_token');
		let config = {
			headers: {
				Authorization: 'JWT ' + token,
				'Content-Type': 'application/json',
			},
		};

		shootSurveyData(survey_data, config)
			.then(({ data }) => {
				commit('RESET_SURVEY');
				router.push({
					path: `/stomach/${data.id}`,
				});
			})
			.catch(error => {
				console.log(error);
			});
	},
	resetRandomUser({ commit }) {
		commit('RESET_RANDOM_USER');
	},
	alreadyLogin({ commit }) {
		commit('ALREADY_LOGIN');
	},
};
