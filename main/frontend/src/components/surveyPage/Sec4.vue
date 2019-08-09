<template>
  <div class="section">
    <p class="question-header">증상의 정도</p>
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
            <p class="question">통증의 양상</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="checkbox"
                  class="ans"
                  v-model="survey_data.pain_character"
                  value="crushing"
                  placeholder="여기를 수정해보세요"
                />쥐어짜는듯 함
              </div>
              <br />
              <div class="answer animate fadeInRightBig four">
                <input
                  type="checkbox"
                  class="ans"
                  v-model="survey_data.pain_character"
                  value="burning"
                  placeholder="여기를 수정해보세요"
                />
                타는듯 함
              </div>
              <br />
              <div class="answer animate fadeInRightBig five">
                <input
                  type="checkbox"
                  class="ans"
                  v-model="survey_data.pain_character"
                  value="stabbing"
                  placeholder="여기를 수정해보세요"
                />
                베이는듯 함
              </div>
              <br />
              <div class="answer animate fadeInRightBig six">
                <input
                  type="checkbox"
                  class="ans"
                  v-model="survey_data.pain_character"
                  value="splitting"
                  placeholder="여기를 수정해보세요"
                />찢어지듯 함
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증점수</p>
            <br />
            <br />

            <input
              type="range"
              class="range animate fadeInRightBig three"
              min="0"
              max="10"
              v-model="survey_data.pain_score"
              placeholder="여기를 수정해보세요"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증이 점점 심해지나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="radio"
                  v-model="survey_data.pain_worse"
                  class="ans"
                  value="True"
                  placeholder="여기를 수정해보세요"
                />예
              </div>
              <br />
              <div class="answer animate fadeInRightBig four">
                <input type="radio" v-model="survey_data.pain_worse" class="ans" value="False" />아니오
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q4.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">이전에도 비슷한 통증이 있던적이 있나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer animate fadeInRightBig three">
                <input
                  type="radio"
                  v-model="survey_data.pain_experience"
                  class="ans"
                  value="True"
                  placeholder="여기를 수정해보세요"
                />예
              </div>
              <br />
              <div class="answer animate fadeInRightBig four">
                <input
                  type="radio"
                  v-model="survey_data.pain_experience"
                  class="ans"
                  value="False"
                  placeholder="여기를 수정해보세요"
                />아니오
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="buttons">
      <router-link :to="{name:'sec3'}">이전</router-link>
      <router-link :to="{name:'sec5'}">다음</router-link>
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
        pain_worse: "",
        pain_experience: "",
        pain_character: [],
        pain_score: ""
      }
    };
  }
};
</script>
<style scoped>
.question-header {
  margin-top: 2rem;
  padding-left: 2.5rem;
  font-size: 1.7rem;
}
/* question body */
.v-expansion-panels {
  width: 100%;
  height: 80%;
  box-shadow: none;
  padding: 0.5rem 1.5rem;
}
.v-expansion-panel-header {
  font-weight: 700;
  font-size: 1.1rem;
  color: #125b7f;
}
.v-expansion-panel-content {
  height: 40vh;
}
.section {
  height: 92vh;
}

/* 1차 수정 01:07 */

.question {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.answers-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 0.5em;
  width: 100%;
}
.answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0.5em;
}
.answer-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2592c9;
  border-radius: 7px;
  width: 9rem;
  height: 2.7rem;
  margin: 0.1rem;

  color: rgb(255, 255, 255);
}
.answer-box-none {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2592c9;
  border-radius: 7px;
  width: 9rem;
  height: 2.7rem;
  margin-right: 9.2rem;

  color: rgb(255, 255, 255);
}
.answer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2592c9;
  border-radius: 7px;
  width: 15rem;
  height: 2.7rem;
  line-height: 0.2rem;

  color: rgb(255, 255, 255);
}
.answer input::placeholder {
  color: rgba(88, 88, 88, 0.5);
}
.ans {
  margin: 0 1rem;
}
/* range */
input[type="range"] {
  height: 33px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 14px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #50555c;
  background: #50555c;
  border-radius: 14px;
  border: 0px solid #000000;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 27px;
  width: 27px;
  border-radius: 12px;
  background: #529de1;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.5px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #50555c;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 14px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #50555c;
  background: #50555c;
  border-radius: 14px;
  border: 0px solid #000000;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 27px;
  width: 27px;
  border-radius: 12px;
  background: #529de1;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 14px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #50555c;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 1px 1px 1px #50555c;
}
input[type="range"]::-ms-fill-upper {
  background: #50555c;
  border: 0px solid #000000;
  border-radius: 28px;
  box-shadow: 1px 1px 1px #50555c;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #000000;
  height: 27px;
  width: 27px;
  border-radius: 12px;
  background: #529de1;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #50555c;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #50555c;
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
  justify-content: space-between;
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
.six {
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.5s;
}

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
