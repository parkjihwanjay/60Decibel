<template>
  <div class="section">
    <p class="question-header">증상의 시작</p>
    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            여기가 질문입니다요 ~~~~~
            <br />
            <br />
            <div class="ans animate fadeInRightBig three">여기가</div>
            <div class="ans animate fadeInRightBig four">선택지</div>
            <div class="ans animate fadeInRightBig five">입니다</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            여기가 질문입니다요 ~~~~~
            <br />
            <br />
            <div class="ans animate fadeInRightBig three">여기가</div>
            <div class="ans animate fadeInRightBig four">선택지</div>
            <div class="ans animate fadeInRightBig five">입니다</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            여기가 질문입니다요 ~~~~~
            <br />
            <br />
            <div class="ans animate fadeInRightBig three">여기가</div>
            <div class="ans animate fadeInRightBig four">선택지</div>
            <div class="ans animate fadeInRightBig five">입니다</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="buttons">
      <router-link :to="{name:'sec2'}">다음</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: 0
    };
  }
};
</script>
<style scoped>
/* question header */
.question-header {
  margin-top: 2rem;
  padding-left: 2.5rem;
  font-size: 1.7rem;
}
/* question body */
.v-expansion-panels {
  width: 100%;
  height: 90%;
  box-shadow: none;
  padding: 0.5rem 1.5rem;
}
.v-expansion-panel-content {
  height: 46vh;
}
.section {
  height: 100vh;
}
.ans {
  width: 90%;
  height: 44px;
  background-color: #cecece;
  margin: 10px auto;
}

/* question footer */
.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0;
  box-shadow: 1px 0.8px 3px -0.5px rgb(128, 128, 128);
  background-color: #125b7f;
  width: 100%;
  height: 2.8rem;
  padding: 0 2.05rem;
}
a {
  color: white;
}

/* transition time set */
.animate {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.one {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.two {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.three {
  -webkit-animation-delay: 0.35s;
  -moz-animation-delay: 0.35s;
  animation-delay: 0.35s;
}
.four {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.five {
  -webkit-animation-delay: 0.45s;
  -moz-animation-delay: 0.45s;
  animation-delay: 0.45s;
}
/* transition effect */

/* fadeInUP */
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

/* fadeInDown */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* fadeinRight */
.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
</style>
