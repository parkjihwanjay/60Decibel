import axios from "axios";
import router from "../router";
import {
  Login,
  Logout,
  Signup,
  getMemberInfo,
  getProfileInfo,
  getStomachInfo,
  getSurveyHistory,
  updateProfileInfo,
  shootSurveyData
} from "../api/axios.js";

export default {
  //   로그인 function
  login({ commit }, loginObj) {
    // login --> 토큰 반환
    Login(loginObj)
      // loginObj = {email,password}
      .then(res => {
        this.dispatch("getMemberInfo");

        localStorage.setItem("isLogin", true);

        let token = res.data.token;
        //토큰을 로컬 스토리지에 저장
        localStorage.setItem("access_token", token);
        axios.defaults.headers.common["Authorization"] =
          localStorage.getItem["access_token"];

        if (loginObj.from_signup)
          router.push({
            name: "profileupdate"
          });
        else
          router.push({
            name: "home"
          });
      })
      .catch(() => {
        alert("이메일과 비밀번호를 확인하세요.");
      });
  },
  // 로그아웃 function
  logout({ commit }) {
    // axios.post("http://localhost:8000/api/rest-auth/logout/", this.state.userInfo)
    Logout(this.state.userInfo)
      .then(res => {
        alert("로그아웃이 성공적으로 이루어졌습니다.");
        commit("logout", "RESET_RANDOM_USER");
        axios.defaults.headers.common["Authorization"] = undefined;
        localStorage.clear();
        // location.href = "/"
        router.push({
          name: "home"
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  signup(dispatch, signupObj) {
    // login --> 토큰 반환
    if (
      this.state.random_user.username &&
      this.state.random_user.email &&
      this.state.random_user.password1 &&
      this.state.random_user.password2
    ) {
      let quickLogin = {};

      let login_info = {};

      quickLogin["username"] = this.state.random_user.username;
      quickLogin["email"] = this.state.random_user.email;
      quickLogin["password1"] = this.state.random_user.password1;
      quickLogin["password2"] = this.state.random_user.password2;

      login_info["username"] = quickLogin.username;
      login_info["password"] = quickLogin.password1;
      login_info["from_signup"] = true;

      Signup(signupObj)
        .then(res => {
          alert("회원가입이 성공적으로 이뤄졌습니다.");
          console.log(res);
          this.dispatch("login", login_info);
          this.dispatch("resetRandomUser");
        })
        .catch(() => {
          alert("이메일과 비밀번호를 확인하세요.");
        });
    } else {
      Signup(signupObj)
        // loginObj = {email,password}
        .then(res => {
          console.log(signupObj);
          alert("회원가입이 성공적으로 이뤄졌습니다.");
          let login_info = {};

          login_info["username"] = signupObj.username;
          login_info["password"] = signupObj.password1;
          login_info["from_signup"] = true;
          this.dispatch("login", login_info);
        })
        .catch(err => {
          console.log(err.response);
          if (err.response.data.username) alert("이미 존재하는 아이디입니다");
          else if (err.response.data.email) alert("이미 존재하는 이메일입니다");
          // else if (err.response.data.password)
          //     alert("패스워드가 같지 않습니다.");
          else if (err.response.data.non_field_errors)
            alert("패스워드가 같지 않습니다.");
          else if (err.response.data.password1) {
            alert(err.response.data.password1[0]);
          }
        });
    }
  },
  getMemberInfo({ commit }) {
    //로컬 스토리지에 저장된 토큰을 저장한다.
    if (!localStorage.getItem("access_token")) {
      commit("loginNotYet");
    } else {
      let token = localStorage.getItem("access_token");
      let config = {
        headers: {
          Authorization: "JWT " + token,
          "Content-Type": "application/json"
        }
      };
      //토큰 -> 멤버 정보 반환
      //새로고침 --> 토큰만 갖고 멤버 정보 요청가능
      getMemberInfo(config)
        .then(response => {
          localStorage.setItem("isLogin", true);
          localStorage.setItem("isLoginError", false);
          localStorage.setItem("username", userInfo);

          let userInfo = response.data.username;

          commit("loginSuccess", userInfo);
        })
        .catch(() => {
          localStorage.setItem("isLogin", false);
          localStorage.setItem("isLoginError", false);

          commit("loginError");
        });
    }
  },
  getProfileInfo({ commit }) {
    let token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json"
      }
    };

    getProfileInfo(config)
      .then(({ data }) => {
        commit("SET_PROFILE", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getStomachInfo({ commit }, stomachId) {
    let token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json"
      }
    };

    getStomachInfo(stomachId, config)
      .then(({ data }) => {
        console.log(data);
        commit("SET_STOMACH", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getSurveyHistory({ commit }) {
    let token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json"
      }
    };
    getSurveyHistory(config)
      .then(({ data }) => {
        commit("SET_SURVEY_HISTORY", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  // 지환 : 랜덤 계정을 생성해서 회원가입 폼에 보냄
  start({ commit }) {
    let startObj = {};
    let username = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 12; i++)
      username += possible.charAt(Math.floor(Math.random() * possible.length));
    let email = username;
    let password1 = "60dbfighithing!!";
    let password2 = password1;

    startObj["username"] = username;
    startObj["email"] = email + "@naver.com";
    startObj["password1"] = password1;
    startObj["password2"] = password2;
    commit("SET_QUICK_START", startObj);
    router.push({
      name: "signup"
    });
  },
  updateProfileInfo(dispatch, update) {
    let token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json"
      }
    };
    updateProfileInfo(config, update)
      .then(res => {
        console.log(res);
        router.push({
          name: "profiles"
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  setSurveyData({ commit }, survey_data) {
    commit("SET_SURVEY_DATA", survey_data);
    console.log(survey_data);
    console.log(this.state.answer);
  },
  shootSurveyData({ commit }) {
    let token = localStorage.getItem("access_token");
    let config = {
      headers: {
        Authorization: "JWT " + token,
        "Content-Type": "application/json"
      }
    };
    let stomachData = this.state.answer;

    shootSurveyData(stomachData, config)
      .then(res => {
        console.log(res);
        let id = res.data.id;
        commit("RESET_SURVEY");
        router.push({
          path: `/stomach/${id}`
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  resetRandomUser({ commit }) {
    commit("RESET_RANDOM_USER");
  },
  alreadyLogin({ commit }) {
    console.log("로그인이 되어있을때");
    commit("ALREADY_LOGIN");
  },
  switchName({ commit }, name) {
    commit("SWITCH_NAME", name);
  },
  switchHeight({ commit }, height) {
    commit("SWITCH_HEIGHT", height);
  },
  switchWeight({ commit }, weight) {
    commit("SWITCH_WEIGHT", weight);
  },
  switchWhatMedicine({ commit }, what_medicine) {
    commit("SWITCH_WHAT_MEDICINE", what_medicine);
  },
  switchDrinkingPerWeek({ commit }, drinking_per_week) {
    commit("SWITCH_DRINKING_PER_WEEK", drinking_per_week);
  },
  switchHowLongSmoking({ commit }, how_long_smoking) {
    commit("SWITCH_HOW_LONG_SMOKING", how_long_smoking);
  },
  switchHowMuchSmoking({ commit }, how_much_smoking) {
    commit("SWITCH_HOW_MUCH_SMOKING", how_much_smoking);
  },
  switchJob({ commit }, job) {
    commit("SWITCH_JOB", job);
  },
  switchAvatar({ commit }, avatar) {
    commit("SWITCH_AVATAR", avatar);
  }
};
