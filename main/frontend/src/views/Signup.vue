<template>
  <div class="signup">
    <signup-form />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupForm from "../components/registerPage/SignupForm.vue";

export default {
  name: "signup",
  components: {
    SignupForm
  }
};
</script>
<style scoped>
.signup {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120vh;

  background: linear-gradient(-45deg, #0a4b8b, #35c3c0);
  /* background-size: 400% 400%; */
  /* -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite; */
}

/* @-webkit-keyframes Gradient {
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
} */
</style>
