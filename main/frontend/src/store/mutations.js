export default {
  loginSuccess(state, payload) {
    state.isLogin = "true";
    state.isLoginError = "false";
    state.userInfo = payload;
  },
  loginNotYet(state) {
    state.isLogin = "false";
    state.isLoginError = "false";
    state.userInfo = null;
  },
  loginError(state) {
    state.isLogin = "false";
    state.isLoginError = "true";
    state.userInfo = null;
  },
  logout(state) {
    state.isLogin = "false";
    state.isLoginError = "false";
    state.userInfo = null;
  },
  // 프로필 상태 변이
  SET_PROFILE(state, profile) {
    state.profile = profile;
  },
  // 복통 상태 변이
  SET_STOMACH(state, stomach) {
    state.stomach = stomach;
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
  // SET_SURVEY_DATA2(state, survey_data) {
  //   state.answer = Object.assign(state.answer, survey_data);
  // },
  // SET_SURVEY_DATA3(state, survey_data) {
  //   state.answer = Object.assign(state.answer, survey_data);
  // },
  // SET_SURVEY_DATA4(state, survey_data) {
  //   state.answer = Object.assign(state.answer, survey_data);
  // },
  // SET_SURVEY_DATA5(state, survey_data) {
  //   state.answer = Object.assign(state.answer, survey_data);
  // },
  // SET_SURVEY_DATA6(state, survey_data) {
  //   state.answer = Object.assign(state.answer, survey_data);
  // },
  RESET_SURVEY(state) {
    state.answer = {};
  },
  RESET_RANDOM_USER(state) {
    state.random_user = {};
  },
  ALREADY_LOGIN(state) {
    {
      state.isLogin = localStorage.getItem("isLogin");
      state.isLoginError = localStorage.getItem("isLoginError");
      state.userInfo = localStorage.getItem("username");
    }
  },
  SWITCH_NAME(state, name) {
    state.profile.name = name;
  },
  SWITCH_HEIGHT(state, height) {
    state.profile.height = height;
  },
  SWITCH_WEIGHT(state, weight) {
    state.profile.weight = weight;
  },
  SWITCH_WHAT_MEDICINE(state, what_medicine) {
    state.profile.what_medicine = what_medicine;
  },
  SWITCH_DRINKING_PER_WEEK(state, drinking_per_week) {
    state.profile.drinking_per_week = drinking_per_week;
  },
  SWITCH_HOW_LONG_SMOKING(state, how_long_smoking) {
    state.profile.how_long_smoking = how_long_smoking;
  },
  SWITCH_HOW_MUCH_SMOKING(state, how_much_smoking) {
    state.profile.how_much_smoking = how_much_smoking;
  },
  SWITCH_JOB(state, job) {
    state.profile.job = job;
  },
  SWITCH_AVATAR(state, avatar) {
    state.profile.avatar = avatar;
  }
};
