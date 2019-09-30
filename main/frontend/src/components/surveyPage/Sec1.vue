<template>
  <div class="section">
    <p class="question-header">증상의 시작</p>
    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions></template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증이 언제부터 시작되었나요?</p>
            <br />
            <br />
            <div class="answers">
              <button
                value="less_than_month"
                @click="button_click('symptom_start', '한 달 미만')"
                class="answer animate fadeInRightBig three"
              >
                한 달이 안됐습니다.
              </button>
              <br />
              <button
                value="more_than_month"
                @click="button_click('symptom_start', '한 달 이상')"
                class="answer animate fadeInRightBig three"
              >
                한 달이 넘었습니다.
              </button>
              <br />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="q2-1">
          <v-expansion-panel-header
            class="header animate fadeInDown two"
            v-if="survey_data.symptom_start === '한 달이 안됐습니다'"
          >
            &nbsp;&nbsp; Q1-1.
            <template v-slot:actions></template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증이 언제 시작되었나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
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
            Q2.
            <template v-slot:actions></template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              통증이 급격히 생겼나요?
              <br />서서히 생겼나요?
            </p>
            <br />
            <br />
            <div class="answers">
              <button
                value="fast"
                @click="button_click('fast_or_slow', '갑자기')"
                class="answer animate fadeInRightBig three"
              >
                갑자기
              </button>
              <br />

              <button
                value="slow"
                @click="button_click('fast_or_slow', '서서히')"
                class="answer animate fadeInRightBig three"
              >
                서서히
              </button>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q3-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3.
            <template v-slot:actions></template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              처음 복통이 시작되었을때
              <br />어떤 상황이었나요?
            </p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="text"
                  v-model="survey_data.symptom_situation"
                  class="ans-txt"
                  placeholder="예)회식에서.."
                />
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q4
            <template v-slot:actions></template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">과거 복부 진료 경험이 있나요?</p>
            <br />
            <div class="answers">
              <button
                value="abdomen_hurted"
                @click="
                  button_click_multiple(
                    'abdomen_relevant',
                    '복부를 다친 적이 있음'
                  )
                "
                class="answer"
              >
                복부를 다친 적이 있음
              </button>

              <br />

              <button
                value="abdomen_surgery"
                @click="
                  button_click_multiple(
                    'abdomen_relevant',
                    '복부 수술을 받은 적이 있음'
                  )
                "
                class="answer"
              >
                복부 수술을 받은 적이 있음
              </button>

              <br />

              <button
                value="abdomen_nothing"
                @click="button_click_multiple('abdomen_relevant', '해당없음')"
                class="answer"
              >
                해당없음
              </button>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'sec2' }" @click.native="send(survey_data)"
        >다음</router-link
      >
    </div>
  </div>
</template>

<script>
import surveyMixin from "../../mixin/surveyMixin";
export default {
  mixins: [surveyMixin],
  data() {
    return {
      expand: 0,
      survey_data: {
        symptom_location: [],
        abdomen_relevant: [],
        symptom_start: ""
      }
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
  /* height: 80%; */
  padding: 0 1rem;
  padding-top: 1rem;
}
.v-expansion-panel-header {
  font-weight: 700;
  font-size: 1.1rem;
  color: #125b7f;
}
.v-expansion-panel-content {
  height: 220px;
}
.section {
  width: 100%;
  height: 100vh;
}

/* 1차 수정 01:07 */
.fa-check {
  color: teal;
}
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
  justify-content: center;
  align-items: center;
  background-color: #2592c9;
  border-radius: 7px;
  width: 13rem;
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
  line-height: 0;
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
button:focus {
  background-color: #055075;
  outline: none;
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
