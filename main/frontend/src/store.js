import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const enhanceAccessToeken = () => {
    const { access_token } = localStorage;
    if (!access_token) return;
    axios.defaults.headers.common["Authorization"] =
        localStorage.getItem["access_token"];
};
enhanceAccessToeken();

// export default new Vuex.Store({
export const store = new Vuex.Store({
    state: {
        userInfo: null,
        isLogin: false,
        isLoginError: false,
        profile: {},
        stomach: {},
        survey_history: [],
        random_user: {}
    },
    getters: {
        fetchedProfile(state) {
            return state.profile;
        }
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
        }
    },
    actions: {
        //   로그인 function
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
                    axios.defaults.headers.common["Authorization"] =
                        localStorage.getItem["access_token"];
                    this.dispatch("getMemberInfo");
                    router.push({ name: "home" });
                    console.log(res);
                })
                .catch(() => {
                    alert("이메일과 비밀번호를 확인하세요.");
                });
        },
        // 로그아웃 function
        logout({ commit }) {
            commit("logout");
            axios.defaults.headers.common["Authorization"] = undefined;

            router.push({ name: "home" });
        },
        signup(dispatch, loginObj) {
            // login --> 토큰 반환
            if (this.state.random_user) {
                let quickLogin = {};
                let username = this.state.random_user.username;
                let password = this.state.random_user.password1;
                quickLogin["username"] = username;
                quickLogin["password"] = password;
                axios
                    .post("http://127.0.0.1:8000/api/rest-auth/registration/", this.state.random_user)
                    // loginObj = {email,password}
                    .then(res => {
                        alert("회원가입이 성공적으로 이뤄졌습니다.");
                        this.dispatch("login", quickLogin)
                        router.push({ name: "home" });
                        console.log(res);
                    })
                    .catch(() => {
                        alert("이메일과 비밀번호를 확인하세요.");
                    });
            }
            else {
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
            }
        },
        //유저 세션 유지 function
        getMemberInfo({ commit }) {
            //로컬 스토리지에 저장된 토큰을 저장한다.
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            //토큰 -> 멤버 정보 반환
            //새로고침 --> 토큰만 갖고 멤버 정보 요청가능
            axios
                .get("http://127.0.0.1:8000/api/user/", config)
                .then(response => {
                    let userInfo = {
                        username: response.data.username
                    };
                    console.log(userInfo);

                    commit("loginSuccess", userInfo);
                })
                .catch(() => {
                    alert("이메일과 비밀번호를 확인하세요.");
                });
        },
        getProfileInfo({ commit }, userId) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .get(`http://127.0.0.1:8000/api/profiles/${userId}/`, config)
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
            axios
                .get(`http://127.0.0.1:8000/api/stomach/${stomachId}/`, config)
                .then(({ data }) => {
                    console.log(data);
                    commit("SET_STOMACH", data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getSurveyHistory({ commit }, authorId) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .get(`http://127.0.0.1:8000/api/surveys/${authorId}/`, config)
                .then(({ data }) => {
                    commit("SET_SURVEY_HISTORY", data);
                })
                .catch(error => {
                    console.log(error);
                })``;
        },
        start({ commit }) {
            let startObj = {};
            let username = "";

            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 5; i++)
                username += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
            let email = "";
            for (i = 0; i < 5; i++)
                email += possible.charAt(Math.floor(Math.random() * possible.length));

            let password1 = "60dbfighithing!!";
            let password2 = password1;

            startObj["username"] = username;
            startObj["email"] = email + "@naver.com";
            startObj["password1"] = password2;
            startObj["password2"] = password2;
            commit("SET_QUICK_START", startObj);
            router.push({ name: "signup" });
            // axios
            //     .post("http://127.0.0.1:8000/api/rest-auth/registration/", startObj)
            //     // loginObj = {email,password}
            //     .then(res => {
            //         router.push({ name: "home" });
            //         console.log(res);
            //     });
        },
        survey(dispatch, survey_data) {
            console.log(survey_data);
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .post("http://127.0.0.1:8000/api/surveys/stomach/", survey_data, config)
                // loginObj = {email,password}
                .then(res => {
                    // 접근 성공시, 토큰 값이 반환된다. (실제로는 토큰과 함께 유저 id를 받아온다.)
                    // 토큰을 헤더 정보에 포함시켜서 유저 정보를 요청

                    console.log(res);
                })
                .catch(() => {
                    alert("왜 안될까?");
                });
        },
        updateProfileInfo(dispatch, update) {
            console.log(update);
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .put("http://127.0.0.1:8000/api/profiles/admin/update/", update, config)
                .then(res => {
                    console.log(res);
                });
        }
    }
});