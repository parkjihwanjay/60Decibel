import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import axios from "axios";
import { fetchProfileList } from "./api/axios.js"

Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state: {
//     profile: {
//       "avatar": null,
//       "gender": "남성",
//       "birth_date": "2019-08-06",
//       "height": 10,
//       "weight": 10,
//       "name": "이인우",
//       "had_checkup": true,
//       "had_checkup_true": "1년 이내",
//       "diagnosed_disease": "고혈압",
//       "taking_medicine": true,
//       "what_medicine": "비타민",
//       "family_history": "고혈압",
//       "drinking": true, "drinking_per_week": 1,
//       "smoking": "예",
//       "how_long_smoking": 1,
//       "how_much_smoking": 1,
//       "job": "개발자",
//       "relevant_data": "{'기름진 음식을 많이 먹음', '식사 불규칙'}",
//       "user": "ant"
//     }
//   }
// })
export const store = new Vuex.Store({
  // export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false,
    profile: {},
    stomach: {}
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    SET_PROFILE(state, profile) {
      state.profile = profile;
    }
  },
  actions: {
    login(dispatch, loginObj) {
      // login --> 토큰 반환
      axios
        .post("http://127.0.0.1:8000/api/rest-auth/login/", loginObj)
        // loginObj = {email,password}
        .then(res => {
          // 접근 성공시, 토큰 값이 반환된다. (실제로는 토큰과 함께 유저 id를 받아온다.)
          // 토큰을 헤더 정보에 포함시켜서 유저 정보를 요청
          let token = res.data.token;
          //토큰을 로컬 스토리지에 저장
          localStorage.setItem("access_token", token);
          this.dispatch("getMemberInfo");
          router.push({ name: "home" });
          console.log(res);
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    },
    signup(dispatch, loginObj) {
      // login --> 토큰 반환
      axios
        .post("http://127.0.0.1:8000/api/rest-auth/registration/", loginObj)
        // loginObj = {email,password}
        .then(res => {
          alert("회원가입이 성공적으로 이뤄졌습니다.");
          router.push({ name: "login" });
          console.log(res);
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
    getMemberInfo({ commit }) {
      //로컬 스토리지에 저장된 토큰을 저장한다.
      let token = localStorage.getItem("access_token");
      let config = {
        headers: {
          "access-token": token
        }
      };
      //토큰 -> 멤버 정보 반환
      //새로고침 --> 토큰만 갖고 멤버 정보 요청가능
      axios
        .get("https://127.0.0.1:8000/api/user/", config)
        .then(response => {
          let userInfo = {
            pk: response.data.data.pk,
            username: response.data.data.username,
            email: response.data.data.email
          };
          commit("loginSuccess", userInfo);
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    },
    getProfileInfo({ commit }) {
      fetchProfileList()
        .then(({ data }) => {
          commit('SET_PROFILE', data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
});
