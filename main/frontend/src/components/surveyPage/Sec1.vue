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
            <p class="question">통증이 언제부터 시작되었나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="radio"
                  value="less_than_month"
                  v-model="survey_data.symptom_start"
                  class="ans"
                />한 달이 안됐습니다.
              </div>
              <br />
              <div class="answer animate fadeInRightBig four">
                <input
                  type="radio"
                  value="more_than_month"
                  v-model="survey_data.symptom_start"
                  class="ans"
                />한 달이 넘었습니다.
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="q2-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증이 언제 시작되었나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer">
                <input
                  type="text"
                  v-model="survey_data.symptom_start_less_than_month"
                  class="ans-txt"
                  placeholder="예) 5일전"
                />
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q3-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              통증이 급격히 생겼나요?
              <br />서서히 생겼나요?
            </p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="radio"
                  v-model="survey_data.fast_or_slow"
                  value="fast"
                  class="ans"
                  placeholder="여기를 수정해보세요"
                />
                갑자기
              </div>
              <br />
              <div class="answer animate fadeInRightBig four">
                <input
                  type="radio"
                  v-model="survey_data.fast_or_slow"
                  value="slow"
                  class="ans"
                  placeholder="여기를 수정해보세요"
                />서서히
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q3-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q4.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              처음 복통이 시작되었을때
              <br />어떤 상황이었나요?
            </p>
            <br />
            <br />
            <div class="answers">
              <div class="answer">
                <input
                  type="text"
                  v-model="survey_data.symtpom_situation"
                  class="ans-txt"
                  placeholder="예)회식에서.."
                />
              </div>
            </div>
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
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      expand: 0,
      survey_data: {
        symptom_start: "",
        symptom_start_less_than_month: "",
        fast_or_slow: "",
        symtpom_situation: ""
      }
    };
  },
  methods: {
    ...mapActions(["survey"])
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

/* 1차 수정 01:07 */

.question {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0.5em;
}
.answer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #1985bb;
  border-radius: 7px;
  width: 15rem;
  height: 2.7rem;

  color: rgb(255, 255, 255);
}
.answer input::placeholder {
  color: rgba(88, 88, 88, 0.5);
}
.ans {
  margin: 0 1rem;
}
.ans-txt {
  width: 100%;
  height: 100%;
  border: #1985bb solid 1px;
  border-radius: 7px;
  outline: none;
  background-color: white;
  padding-left: 1rem;
  color: rgb(56, 56, 56);
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
