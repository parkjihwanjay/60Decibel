<template>
  <div class="section">
    <p class="question-header">동반증상</p>
    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="height:250px;" class="content animate fadeInUp one">
            <p class="question">
              소화기
              <span>(모두선택)</span>
            </p>
            <br />
            <div class="answers-box animate fadeInRightBig three">
              <button
                value="change of appetite"
                @click="button_click_multiple('associated_symptom_digestive', 'change of appetite')"
                class="answer animate fadeInRightBig three"
              >식욕감소</button>

              <br />

              <button
                value="nausea"
                @click="button_click_multiple('associated_symptom_digestive', 'nausea')"
                class="answer animate fadeInRightBig three"
              >구역질</button>

              <br />

              <button
                value="vomiting"
                @click="button_click_multiple('associated_symptom_digestive', 'vomiting')"
                class="answer animate fadeInRightBig three"
              >구토</button>

              <br />

              <button
                value="vomiting blood"
                @click="button_click_multiple('associated_symptom_digestive', 'vomiting blood')"
                class="answer animate fadeInRightBig three"
              >토혈</button>

              <br />

              <button
                value="abdominal inflation"
                @click="button_click_multiple('associated_symptom_digestive', 'abdominal inflation')"
                class="answer animate fadeInRightBig three"
              >복부팽만</button>

              <br />

              <button
                value="lump on abdomen"
                @click="button_click_multiple('associated_symptom_digestive', 'lump on abdomen')"
                class="answer animate fadeInRightBig three"
              >복부종괴</button>

              <br />

              <button
                value="constipation"
                @click="button_click_multiple('associated_symptom_digestive', 'constipation')"
                class="answer animate fadeInRightBig three"
              >변비</button>

              <br />

              <button
                value="diarrhea"
                @click="button_click_multiple('associated_symptom_digestive', 'diarrhea')"
                class="answer animate fadeInRightBig three"
              >설사</button>

              <br />

              <button
                value="rectal_bleeding/melena"
                @click="button_click_multiple('associated_symptom_digestive', 'rectal_bleeding/melena')"
                class="answer animate fadeInRightBig three"
              >혈변/흑변</button>

              <br />

              <button
                value="steatorrhea"
                @click="button_click_multiple('associated_symptom_digestive', 'steatorrhea')"
                class="answer animate fadeInRightBig three"
              >지방변</button>

              <br />

              <button
                value="jaundice"
                @click="button_click_multiple('associated_symptom_digestive', 'jaundice')"
                class="answer animate fadeInRightBig three"
              >황달</button>

              <br />

              <button
                value="nothing"
                @click="button_click('associated_symptom_digestive', 'nothing')"
                class="answer animate fadeInRightBig three"
              >해당없음</button>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              순환기/호흡기
              <span>(모두선택)</span>
            </p>
            <br />
            <br />
            <div class="answers-box animate fadeInRightBig three">
              <button
                value="chest pain"
                @click="button_click_multiple('associated_symptom_circulatory', 'chest pain')"
                class="answer animate fadeInRightBig three"
              >가슴통증</button>

              <br />

              <button
                value="shortness of breah"
                @click="button_click_multiple('associated_symptom_circulatory', 'shortness of breah')"
                class="answer animate fadeInRightBig three"
              >호흡곤란</button>

              <br />

              <button
                value="cough"
                @click="button_click_multiple('associated_symptom_circulatory', 'cough')"
                class="answer animate fadeInRightBig three"
              >기침</button>

              <br />

              <button
                value="runny nose"
                @click="button_click_multiple('associated_symptom_circulatory', 'runny nose')"
                class="answer animate fadeInRightBig three"
              >콧물</button>

              <br />

              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_circulatory', 'nothing')"
                class="answer animate fadeInRightBig three"
              >해당없음</button>
              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_circulatory', 'nothing')"
                class="answer blank animate fadeInRightBig three"
              >해당없음</button>
            </div>
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
            <p class="question">
              부인과
              <span>(모두선택)</span>
            </p>
            <br />
            <br />
            <div class="answers-box animate fadeInRightBig three">
              <button
                value="colporrhagia"
                @click="button_click_multiple('associated_symptom_gynecology', 'colporrhagia')"
                class="answer animate fadeInRightBig three"
              >질출혈</button>

              <br />

              <button
                value="leukorrhea"
                @click="button_click_multiple('associated_symptom_gynecology', 'leukorrhea')"
                class="answer animate fadeInRightBig three"
              >질분비물</button>

              <br />

              <button
                value="menstrual cycle change"
                @click="button_click_multiple('associated_symptom_gynecology', 'menstrual cycle change')"
                class="answer animate fadeInRightBig three"
              >생리변화</button>

              <br />

              <button
                value="pregnant possibility"
                @click="button_click_multiple('associated_symptom_gynecology', 'pregnant possibility')"
                class="answer animate fadeInRightBig three"
              >임신가능성</button>

              <br />

              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_gynecology', 'nothing')"
                class="answer animate fadeInRightBig three"
              >해당없음</button>
              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_circulatory', 'nothing')"
                class="answer blank animate fadeInRightBig three"
              >해당없음</button>
            </div>
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
            <p class="question">
              전신증상
              <span>(모두선택)</span>
            </p>
            <br />
            <div class="answers-box animate fadeInRightBig three">
              <button
                value="fever"
                @click="button_click_multiple('associated_symptom_whole_body', 'fever')"
                class="answer animate fadeInRightBig three"
              >발열</button>

              <br />

              <button
                value="chilling"
                @click="button_click_multiple('associated_symptom_whole_body', 'chilling')"
                class="answer animate fadeInRightBig three"
              >오한</button>

              <br />

              <button
                value="fatigue"
                @click="button_click_multiple('associated_symptom_whole_body', 'fatigue')"
                class="answer animate fadeInRightBig three"
              >피로</button>

              <br />

              <button
                value="weight change"
                @click="button_click_multiple('associated_symptom_whole_body', 'weight change')"
                class="answer animate fadeInRightBig three"
              >체중변화</button>

              <br />

              <button
                value="sweating"
                @click="button_click_multiple('associated_symptom_whole_body', 'sweating')"
                class="answer animate fadeInRightBig three"
              >식은땀</button>

              <br />

              <button
                value="sleep disturbance"
                @click="button_click_multiple('associated_symptom_whole_body', 'sleep disturbance')"
                class="answer animate fadeInRightBig three"
              >수면곤란</button>

              <br />

              <button
                value="headache"
                @click="button_click_multiple('associated_symptom_whole_body', 'headache')"
                class="answer animate fadeInRightBig three"
              >두통</button>

              <br />

              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_whole_body', 'nothing')"
                class="answer animate fadeInRightBig three"
              >해당없음</button>
              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_circulatory', 'nothing')"
                class="answer blank animate fadeInRightBig three"
              >해당없음</button>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q5.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">
              비뇨기
              <span>(모두선택)</span>
            </p>
            <br />
            <br />
            <div class="answers-box animate fadeInRightBig three">
              <button
                value="painful urination"
                @click="button_click_multiple('associated_symptom_urinary', 'painful urination')"
                class="answer animate fadeInRightBig three"
              >배뇨통</button>

              <br />

              <button
                value="chnage the quantity of urine"
                @click="button_click_multiple('associated_symptom_urinary', 'chnage the quantity of urine')"
                class="answer animate fadeInRightBig three"
              >소변량변화</button>

              <br />

              <button
                value="red urine"
                @click="button_click_multiple('associated_symptom_urinary', 'red urine')"
                class="answer animate fadeInRightBig three"
              >혈뇨</button>

              <br />

              <button
                value="foamy urine"
                @click="button_click_multiple('associated_symptom_urinary', 'foamy urine')"
                class="answer animate fadeInRightBig three"
              >거품뇨</button>

              <br />

              <button
                value="frequency"
                @click="button_click_multiple('associated_symptom_urinary', 'frequency')"
                class="answer animate fadeInRightBig three"
              >잦은 소변</button>

              <br />

              <button
                value="nothing"
                @click="button_click_multiple('associated_symptom_urinary', 'nothing')"
                class="answer animate fadeInRightBig three"
              >해당없음</button>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q6
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">그외 동반되는 증상이 있나요?</p>
            <br />
            <br />
            <div class="answers">
              <div class="answer-box animate fadeInRightBig three">
                <input
                  class="ans-txt"
                  v-model="survey_data.associated_symptom_others"
                  placeholder="여기에 입력해주세요"
                />
              </div>
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="buttons">
      <router-link :to="{name:'sec4'}">이전</router-link>
      <router-link :to="{name:'sec6'}" @click.native="sec5(survey_data)">다음</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: 0,
      survey_data: {
        associated_symptom_digestive: [],
        associated_symptom_circulatory: [],
        associated_symptom_gynecology: [],
        associated_symptom_urinary: []
      }
    };
  },
  methods: {
    button_click(model, value) {
      this.survey_data[model] = value;
      console.log(this.survey_data);
    },
    button_click_multiple(model, value) {
      this.survey_data[model].push(value);
      this.survey_data[model] = Array.from(new Set(this.survey_data[model]));
      console.log(this.survey_data);
    },
    sec5(survey_data) {
      this.$store.dispatch("setSurveyData5", survey_data);
    }
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
  height: 100vh;
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
  justify-content: center;
  align-items: center;
  background-color: #2592c9;
  font-size: 0.9rem;
  border-radius: 7px;
  width: 13rem;
  height: 2.7rem;
  margin: 0.1rem 0.1rem;

  color: rgb(255, 255, 255);
}

.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2592c9;
  border-radius: 7px;
  width: 5.5rem;
  height: 2.7rem;
  margin: 0.1rem 0.1rem;

  color: rgb(255, 255, 255);
}
.answer input::placeholder {
  color: rgba(88, 88, 88, 0.5);
}
.ans {
  margin: 0 0.1rem;
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
.blank {
  visibility: hidden;
}
span {
  font-size: 0.9rem;
  color: #125b7f;
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
