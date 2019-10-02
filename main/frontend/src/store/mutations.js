export default {
	loginSuccess(state, payload) {
		state.isLogin = 'true';
		state.isLoginError = 'false';
		state.userInfo = payload;
	},
	loginNotYet(state) {
		state.isLogin = 'false';
		state.isLoginError = 'false';
		state.userInfo = null;
	},
	loginError(state) {
		state.isLogin = 'false';
		state.isLoginError = 'true';
		state.userInfo = null;
	},
	logout(state) {
		state.isLogin = 'false';
		state.isLoginError = 'false';
		state.userInfo = null;
	},
	// 프로필 상태 변이
	SET_PROFILE(state, profile) {
		state.profile = profile;
		state.profile.diagnosed_disease = state.profile.diagnosed_disease.slice(1, -1);
		state.profile.relevant_data = state.profile.relevant_data.slice(1, -1);
		state.profile.family_history = state.profile.family_history.slice(1, -1);
	},
	// 복통 상태 변이
	SET_STOMACH(state, stomach) {
		state.stomach = stomach;
		state.stomach.symptom_location = state.stomach.symptom_location.slice(1, -1);
		state.stomach.associated_symptom_digestive = state.stomach.associated_symptom_digestive.slice(
			1,
			-1,
		);
		state.stomach.associated_symptom_circulatory = state.stomach.associated_symptom_circulatory.slice(
			1,
			-1,
		);
		state.stomach.associated_symptom_gynecology = state.stomach.associated_symptom_gynecology.slice(
			1,
			-1,
		);
		state.stomach.associated_symptom_whole_body = state.stomach.associated_symptom_whole_body.slice(
			1,
			-1,
		);
		state.stomach.associated_symptom_urinary = state.stomach.associated_symptom_urinary.slice(
			1,
			-1,
		);
		state.stomach.associated_symptom_others = state.stomach.associated_symptom_others.slice(1, -1);
		state.stomach.factor = state.stomach.factor.slice(1, -1);
		state.stomach.abdomen_relevant = state.stomach.abdomen_relevant.slice(1, -1);
	},
	// 설문조사 이력 변이
	SET_SURVEY_HISTORY(state, survey_history) {
		state.survey_history = survey_history;
	},
	//설문조사 빠른 시작하기 변이
	SET_QUICK_START(state, startObj) {
		state.random_user = startObj;
	},
	SET_SURVEY_DATA(state, survey_data) {
		state.answer = Object.assign(state.answer, survey_data);
	},
	RESET_SURVEY(state) {
		state.answer = {};
	},
	RESET_RANDOM_USER(state) {
		state.random_user = {};
	},
	ALREADY_LOGIN(state) {
		{
			state.isLogin = localStorage.getItem('isLogin');
			state.isLoginError = localStorage.getItem('isLoginError');
			state.userInfo = localStorage.getItem('username');
		}
	},
	SET_LOADING(state, isloading) {
		state.isloading = isloading;
	},
};
