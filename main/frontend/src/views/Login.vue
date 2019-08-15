<template>
  <div class="login">
    <login-form class="login-form" />
  </div>
</template>

<script>
// @ is an alias to /src

import LoginForm from "../components/registerPage/LoginForm.vue";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>
<style scoped>
.login {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 850px;
  color: #fff;
  background: linear-gradient(-45deg, #0e2b68, #22499c, #27adab, #71fcf9);
  background-size: 400% 400%;
  -webkit-animation: Gradient 8s ease infinite;
  -moz-animation: Gradient 8s ease infinite;
  animation: Gradient 8s ease infinite;
}

.login-form {
  width: 100%;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
