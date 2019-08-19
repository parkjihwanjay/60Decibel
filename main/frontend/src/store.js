import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const enhanceAccessToeken = () => {
    const {
        access_token
    } = localStorage;
    if (!access_token) return;
    axios.defaults.headers.common["Authorization"] =
        localStorage.getItem["access_token"];
};
enhanceAccessToeken();

// export default new Vuex.Store({
export const store = new Vuex.Store({
    state: {
        userInfo: null,
        isLogin: "false",
        isLoginError: "false",
        profile: {},
        stomach: {},
        survey_history: [],
        random_user: {},
        answer: {}
    },

    mutations: {
        loginSuccess(state, payload) {
            state.isLogin = 'true';
            state.isLoginError = 'false';
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
        SET_SURVEY_DATA1(state, survey_data) {
            state.answer = Object.assign(state.answer, survey_data);
        },
        SET_SURVEY_DATA2(state, survey_data) {
            state.answer = Object.assign(state.answer, survey_data);
        },
        SET_SURVEY_DATA3(state, survey_data) {
            state.answer = Object.assign(state.answer, survey_data);
        },
        SET_SURVEY_DATA4(state, survey_data) {
            state.answer = Object.assign(state.answer, survey_data);
        },
        SET_SURVEY_DATA5(state, survey_data) {
            state.answer = Object.assign(state.answer, survey_data);
        },
        SET_SURVEY_DATA6(state, survey_data) {
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
    },
    actions: {
        //   로그인 function
        login({
            commit
        }, loginObj) {
            // login --> 토큰 반환
            axios
                .post("http://127.0.0.1:8000/api/rest-auth/login/", loginObj)
                // loginObj = {email,password}
                .then(res => {
                    // console.log(res.data.user.username)
                    // 접근 성공시, 토큰 값이 반환된다. (실제로는 토큰과 함께 유저 id를 받아온다.)
                    // 토큰을 헤더 정보에 포함시켜서 유저 정보를 요청
                    let token = res.data.token;
                    //토큰을 로컬 스토리지에 저장
                    localStorage.setItem("access_token", token);
                    axios.defaults.headers.common["Authorization"] =
                        localStorage.getItem["access_token"];

                    this.dispatch("getMemberInfo");

                    if (loginObj.from_signup)
                        router.push({
                            name: "profileupdate"
                        })
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
        logout({
            commit
        }) {
            commit("logout", "RESET_RANDOM_USER");
            axios.defaults.headers.common["Authorization"] = undefined;
            router.push({
                name: "home"
            });
            localStorage.clear();
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
                axios
                    .post(
                        "http://127.0.0.1:8000/api/rest-auth/registration/",
                        quickLogin
                    )
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
                axios
                    .post(
                        "http://127.0.0.1:8000/api/rest-auth/registration/",
                        signupObj
                    )
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
                        if (err.response.data.username)
                            alert("이미 존재하는 아이디입니다");
                        else if (err.response.data.email)
                            alert("이미 존재하는 이메일입니다");
                        // else if (err.response.data.password)
                        //     alert("패스워드가 같지 않습니다.");
                        else if (err.response.data.non_field_errors)
                            alert("패스워드가 같지 않습니다.");
                        else if (err.response.data.password1) {
                            alert(err.response.data.password1[0])
                        }
                    });
            }
        },
        getMemberInfo({
            commit
        }) {
            //로컬 스토리지에 저장된 토큰을 저장한다.
            if (!localStorage.getItem("access_token")) {
                commit("loginNotYet")
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
                axios
                    .get("http://127.0.0.1:8000/api/user/", config)
                    .then(response => {

                        localStorage.setItem('isLogin', true);
                        localStorage.setItem('isLoginError', false);
                        localStorage.setItem('username', userInfo);

                        let userInfo = response.data.username;

                        commit("loginSuccess", userInfo)
                    })
                    .catch(() => {
                        localStorage.setItem('isLogin', false);
                        localStorage.setItem('isLoginError', false);

                        commit("loginError")
                    });
            }

        },
        getProfileInfo({
            commit
        }) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .get("http://127.0.0.1:8000/api/profiles/", config)
                .then(({
                    data
                }) => {
                    commit("SET_PROFILE", data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getStomachInfo({
            commit
        }, stomachId) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .get(`http://127.0.0.1:8000/api/stomach/${stomachId}/`, config)
                .then(({
                    data
                }) => {
                    console.log(data);
                    commit("SET_STOMACH", data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getSurveyHistory({
            commit
        }, authorId) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            axios
                .get(`http://127.0.0.1:8000/api/surveys/${authorId}/`, config)
                .then(({
                    data
                }) => {
                    commit("SET_SURVEY_HISTORY", data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // 지환 : 랜덤 계정을 생성해서 회원가입 폼에 보냄
        start({
            commit
        }) {
            let startObj = {};
            let username = "";
            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < 12; i++)
                username += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                );
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
            axios
                .put("http://127.0.0.1:8000/api/profileupdate/", update, config)
                .then(res => {
                    console.log(res);
                    router.push({
                        name: "profiles"
                    });
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        setSurveyData1({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA1", survey_data);
            console.log(survey_data);
            console.log(this.state.answer);
        },
        setSurveyData2({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA2", survey_data);
            console.log(this.state.answer);
        },
        setSurveyData3({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA3", survey_data);
            console.log(this.state.answer);
        },
        setSurveyData4({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA4", survey_data);
            console.log(this.state.answer);
        },
        setSurveyData5({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA5", survey_data);
            console.log(this.state.answer);
        },
        setSurveyData6({
            commit
        }, survey_data) {
            commit("SET_SURVEY_DATA6", survey_data);
            console.log(this.state.answer);
            this.dispatch("shootSurveyData");
        },
        shootSurveyData({
            commit
        }) {
            let token = localStorage.getItem("access_token");
            let config = {
                headers: {
                    Authorization: "JWT " + token,
                    "Content-Type": "application/json"
                }
            };
            let stomachData = this.state.answer;
            axios
                .post(
                    "http://127.0.0.1:8000/api/surveys/stomach/", stomachData, config)
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
        resetRandomUser({
            commit
        }) {
            commit("RESET_RANDOM_USER");
        },
        alreadyLogin({
            commit
        }) {
            console.log("로그인이 되어있을때")
            commit("ALREADY_LOGIN");
        },
        switchName({
            commit
        }, name) {
            commit("SWITCH_NAME", name);
        },
        switchHeight({
            commit
        }, height) {
            commit("SWITCH_HEIGHT", height);
        },
        switchWeight({
            commit
        }, weight) {
            commit("SWITCH_WEIGHT", weight);
        },
        switchWhatMedicine({
            commit
        }, what_medicine) {
            commit("SWITCH_WHAT_MEDICINE", what_medicine);
        },
        switchDrinkingPerWeek({
            commit
        }, drinking_per_week) {
            commit("SWITCH_DRINKING_PER_WEEK", drinking_per_week);
        },
        switchHowLongSmoking({
            commit
        }, how_long_smoking) {
            commit("SWITCH_HOW_LONG_SMOKING", how_long_smoking);
        },
        switchHowMuchSmoking({
            commit
        }, how_much_smoking) {
            commit("SWITCH_HOW_MUCH_SMOKING", how_much_smoking);
        },
        switchJob({
            commit
        }, job) {
            commit("SWITCH_JOB", job);
        },
        switchAvatar({
            commit
        }, avatar) {
            commit("SWITCH_AVATAR", avatar);
        }
        // checkToken({ commit }, access_token) {
        //     axios
        //         .post("http://54.180.144.241:8000/api/rest-auth/verify_token/", access_token)
        //         .then(res => {
        //             console.log(res)
        //             localStorage.setItem('isLogin', true);
        //             localStorage.setItem('isLoginError', false);

        //             commit("CHECK_LOGIN");
        //         })
        //         .catch(() => {
        //             alert("로그인을 다시 해주세요");
        //             localStorage.setItem('isLogin', false);
        //             this.state.isLogin = "false"
        //             router.push('login');
        //         })
        //         // }
        // }
    }
    //   axios
    //     .put("http://54.180.144.241:8000/api/profileupdate/", update, config)
    //     .then(res => {
    //       console.log(res);
    //       router.push({
    //         name: "profiles"
    //       });
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
});