<template>
  <div class="formContainer">
    <!-- <a class="bold">&nbsp;&nbsp;회원가입</a> -->
    <div data-aos="fade-up" data-aos-duration="1000">
      <div class="signup-cont">
        <div class="signup-header">
          <p>
            60데시벨
            <span>회원가입</span>
          </p>
        </div>
        <form class="signup-box">
          <p>아이디</p>
          <input
            v-if="random_user.username"
            type="text"
            name="username"
            v-bind:value="random_user.username"
          />
          <input v-else type="text" v-model="username" name="username" placeholder="아이디 입력" />

          <p>이메일</p>
          <input v-if="random_user.email" type="text" name="email" v-bind:value="random_user.email" />
          <input v-else type="text" v-model="email" name="email" placeholder="이메일 입력" />

          <p>비밀번호</p>

          <input
            v-if="random_user.password1"
            type="password"
            name="userpassword1"
            v-bind:value="random_user.password1"
          />
          <input
            v-else
            type="password"
            v-model="password1"
            name="userpassword1"
            placeholder="6~12자리 비밀번호 입력"
          />
          <p>비밀번호 확인</p>
          <input
            v-if="random_user.password2"
            type="password"
            name="userpassword2"
            v-bind:value="random_user.password2"
          />
          <input
            v-else
            type="password"
            v-model="password2"
            name="userpassword2"
            placeholder="6~12자리 비밀번호 입력"
          />
          <br />
        </form>
        <div class="privacy">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox"></label>
          <span>이용약관</span>에 동의합니다
        </div>
        <div class="login-btn">
          <input
            v-if="`${this.$store.state.random_user}`"
            type="submit"
            class="button"
            name="submit"
            @click="signup_quick()"
            value="회원가입"
          />
          <input
            v-else
            type="submit"
            class="button"
            name="submit"
            @click="signup_general({username, email, password1, password2})"
            value="회원가입"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "signupForm",
  data() {
    return {
      username: null,
      email: null,
      password1: null,
      password2: null
    };
  },
  methods: {
    ...mapActions(["signup_quick", "signup_general"])
  },
  computed: {
    ...mapState(["random_user"])
  }
};
</script>


<style scoped>
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  padding-top: 0.5rem;
  padding: auto;
}
.signup-cont {
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.308);
  border-radius: 5px;
  height: 680px;
  width: 100%;
  background-color: white;
}
.signup-header p {
  text-align: center;
  padding-top: 4rem;
  font-size: 1.8rem;
}
.signup-header span {
  color: #245dd8;
}
.signup-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 17rem;
  margin-left: 2.5rem;
  margin-bottom: 3.5rem;
  padding-top: 4rem;
  color: rgb(83, 83, 83);
}
.signup-box p {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
}
.signup-box input {
  width: 85%;
  margin-bottom: 2rem;
  font-size: 0.8rem;
}
.signup-box input::placeholder {
  color: rgb(204, 204, 204);
  font-size: 0.85rem;
}
.signup-box input[type="password"] {
  font-family: "맑은고딕";
}
.signup-box input[name="userpassword2"] {
  margin-bottom: 0;
}
.signup-box input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1.1px solid rgb(189, 187, 187);
  background: transparent;
  outline: none;
  height: 35px;
}
.signup-box input[type="text"]:focus,
input[type="password"]:focus {
  border: none;
  border-bottom: 1px solid #0a4b8b;
  background: transparent;
  outline: none;
  height: 35px;
}
.privacy {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  margin-right: 6rem;
  font-size: 0.9rem;
}
.privacy input[type="checkbox"] {
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.privacy input[type="checkbox"] + label {
  display: inline-block;
  cursor: pointer;
  font-size: 15px;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-bottom: 1px;
}
.privacy input[type="checkbox"] + label:before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  background-color: transparent;
  border: 1.5px solid rgb(160, 160, 160);
  border-radius: 2px;
  transition: 0.3s;
}
.privacy input[type="checkbox"]:checked + label:before {
  content: "\2713"; /* 체크모양 */
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  border: none;
  background: #2f87c1;
  text-align: center;
  line-height: 15px;
}

.login-btn {
  display: flex;
  flex-direction: column;
}
.button {
  background-color: #256aaa;
  border-radius: 10px;
  outline-color: rgb(32, 114, 207);
  width: 17rem;
  height: 3rem;
  margin: auto;
  margin-top: 0.2rem;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  font-weight: 500;
}
</style>