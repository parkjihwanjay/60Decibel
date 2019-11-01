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

import { SessionExpired, LoginSuccess } from './actions-fun.js';
export default {
	login({ commit }, loginObj) {
		commit('SET_LOADING', true);
		Login(loginObj)
			.then(res => {
				LoginSuccess(res);
				// console.log(res.status);
				// commit('SET_TOKEN');

				// axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
				// axios.defaults.headers.common['Content-Type'] = 'application/json';

				commit('SET_LOADING', false);

				if (loginObj.from_signup) {
					router.push({
						name: 'profileupdate',
					});
				} else
					router.push({
						name: 'home',
					});
			})
			.catch(e => {
				// console.log(e.response.status);
				if (e.response.status === 400) alert('이메일과 비밀번호를 확인하세요.');
				else alert('알 수 없는 오류');
				commit('SET_LOADING', false);
			});
	},
	// 로그아웃 function
	logout({ commit }) {
		commit('SET_LOADING', true);
		return Logout({})
			.then(res => {
				alert('로그아웃이 성공적으로 이루어졌습니다.');
				commit('RESET_RANDOM_USER');
				// axios.defaults.headers.common['Authorization'] = undefined;
				// axios.defaults.headers.common['Content-Type'] = '';
				// this.state.isLoading = false;

				commit('SET_LOADING', false);
				location.reload(true);
				localStorage.clear();
				// router.push({
				// 	name: 'home',
				// });
			})
			.catch(err => {
				// console.log(err.response.status);
				// debugger;
				if (err.response.status === 401) SessionExpired();
				else {
					alert('알 수 없는 오류');
					SessionExpired();
				}
				// console.log(err);
			});
	},
	// getMemberInfo({ commit }) {
	// 	if (!localStorage.getItem('access_token')) {
	// 		commit('loginNotYet');
	// 	} else {
	// 		return getMemberInfo()
	// 			.then(({ data }) => commit('loginSuccess', data.username))
	// 			.catch(() => {
	// 				SessionExpired();
	// 			});
	// 	}
	// },
	signup({ commit, dispatch }, signupObj) {
		commit('SET_LOADING', true);
		// login --> 토큰 반환
		if (this.state.random_user) {
			const { username, email, password1, password2 } = this.state.random_user;

			let quickLogin = {
				username,
				email,
				password: password1,
				// password2,
			};

			let login_info = {
				username,
				password: password1,
				from_signup: true,
			};

			Signup(quickLogin)
				.then(async res => {
					await dispatch('resetRandomUser');
					alert('회원가입이 성공적으로 이뤄졌습니다.');
					commit('SET_LOADING', false);

					await dispatch('login', login_info);
					// console.log(res);
				})
				.catch(err => {
					// console.log(e.response.status);
					if (err.response.status === 400) {
						//이미 존재하는 오류
						if (err.response.data.errmsg) {
							const errmsg = err.response.data.errmsg;

							if (errmsg.includes('email')) alert('이미 존재하는 이메일입니다.');
							else if (errmsg.includes('username')) alert('이미 존재하는 아이디입니다.');
						}
						//validation 오류
						else {
							const errmsg = err.response.data.message;
							if (errmsg.includes('email')) alert('유효하지 않은 이메일 형식입니다.');
							else if (errmsg.includes('password')) alert('비밀번호는 최소 6자리 이상입니다.');
						}
					}
					// if (e.response.status === 400) alert('이미 있는 아이디거나 비밀번호 입니다.');
					// alert('이메일과 비밀번호를 확인하세요.');
					commit('SET_LOADING', false);
				});
		} else {
			// console.log(signupObj);
			Signup(signupObj)
				.then(res => {
					// console.log(signupObj);
					let login_info = {};

					login_info.username = signupObj.username;
					login_info.password = signupObj.password;
					login_info.from_signup = true;

					alert('회원가입이 성공적으로 이뤄졌습니다.');
					commit('SET_LOADING', false);
					this.dispatch('login', login_info);
				})
				.catch(err => {
					// console.log(err.response);
					if (err.response.status === 400) {
						//이미 존재하는 오류
						if (err.response.data.errmsg) {
							const errmsg = err.response.data.errmsg;

							if (errmsg.includes('email')) alert('이미 존재하는 이메일입니다.');
							else if (errmsg.includes('username')) alert('이미 존재하는 아이디입니다.');
						}
						//validation 오류
						else {
							const errmsg = err.response.data.message;
							if (errmsg.includes('email')) alert('유효하지 않은 이메일 형식입니다.');
							else if (errmsg.includes('password')) alert('비밀번호는 최소 6자리 이상입니다.');
						}
					}
					commit('SET_LOADING', false);
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
		return getProfileInfo()
			.then(({ data }) => {
				commit('SET_PROFILE', data);
			})
			.catch(error => {
				SessionExpired();
			});
	},
	getStomachInfo({ commit }, stomachId) {
		return getStomachInfo(stomachId)
			.then(({ data }) => {
				commit('SET_STOMACH', data);
			})
			.catch(error => {
				SessionExpired();
			});
	},

	getSurveyHistory({ commit }) {
		return getSurveyHistory()
			.then(({ data }) => {
				commit('SET_SURVEY_HISTORY', data);
			})
			.catch(error => {
				SessionExpired();
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
	async updateProfileInfo({ commit }, update) {
		commit('SET_LOADING', true);
		try {
			await updateProfileInfo(update);
			const profile = await getProfileInfo();
			// console.log(profile);
			commit('SET_PROFILE', profile.data);
			router.push({
				name: 'profiles',
			});
		} catch (e) {
			if (e.response.status === 400) alert('다시 입력해주세요');
			else if (e.response.status === 401) SessionExpired();
		}
	},
	shootSurveyData({ commit }, survey_data) {
		shootSurveyData(survey_data)
			.then(({ data }) => {
				// commit('RESET_SURVEY');
				router.push({
					path: `/stomach/${data.id}`,
				});
			})
			.catch(error => {
				if (error.response.status === 400) alert('다시 입력해주세요.');
				else if (error.response.status === 401) SessionExpired();
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
