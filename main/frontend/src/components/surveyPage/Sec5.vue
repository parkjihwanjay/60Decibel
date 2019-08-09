<template>
  <div class="section">
    <p class="question-header">동반증상</p>
    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">소화기(동반된 증상을 모두 선택해주세요)</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="change of appetite"
                placeholder="여기를 수정해보세요"
              />식욕감소
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="nausea"
                placeholder="여기를 수정해보세요"
              />구역질
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="vomiting"
                placeholder="여기를 수정해보세요"
              />
              구토
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="vomiting blood"
                placeholder="여기를 수정해보세요"
              />
              토혈
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="abdominal inflation"
                placeholder="여기를 수정해보세요"
              />
              복부팽만
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="lump on abdomen"
                placeholder="여기를 수정해보세요"
              />
              복부종괴
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="constipation"
                placeholder="여기를 수정해보세요"
              />
              변비
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="diarrhea"
                placeholder="여기를 수정해보세요"
              />
              설사
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="rectal_bleeding"
                placeholder="여기를 수정해보세요"
              />
              혈변
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="melena"
                placeholder="여기를 수정해보세요"
              />
              흑색변
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="steatorrhea"
                placeholder="여기를 수정해보세요"
              />
              지방변
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="jaundice"
                placeholder="여기를 수정해보세요"
              />
              황달
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_digestive"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">순환기/호흡기(동반된 증상을 모두 선택해주세요)</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="chest pain"
                placeholder="여기를 수정해보세요"
              />가슴통증
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="shortness of breah"
                placeholder="여기를 수정해보세요"
              />호흡곤란
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="cough"
                placeholder="여기를 수정해보세요"
              />
              기침
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="runny nose"
                placeholder="여기를 수정해보세요"
              />
              콧물
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_circulatory"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
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
            <p class="question">동반되는 증상이 있나요?(부인과)</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="colporrhagia"
                placeholder="여기를 수정해보세요"
              />질출혈
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="leukorrhea"
                placeholder="여기를 수정해보세요"
              />질분비물
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="menstrual cycle change"
                placeholder="여기를 수정해보세요"
              />생리주기변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="pregnant possibility"
                placeholder="여기를 수정해보세요"
              />임신가능성
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_gynecology"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">전신증상(동반된 증상을 모두 선택해주세요)</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="fever"
                placeholder="여기를 수정해보세요"
              />발열
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="chilling"
                placeholder="여기를 수정해보세요"
              />오한
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="fatigue"
                placeholder="여기를 수정해보세요"
              />
              피로
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="weight change"
                placeholder="여기를 수정해보세요"
              />
              체중변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="sweating"
                placeholder="여기를 수정해보세요"
              />
              식은땀
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="sleep disturbance"
                placeholder="여기를 수정해보세요"
              />
              수면곤란
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="headache"
                placeholder="여기를 수정해보세요"
              />
              두통
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_whole_body"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q1.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">비뇨기(동반된 증상을 모두 선택해주세요)</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="painful urination"
                placeholder="여기를 수정해보세요"
              />배뇨통
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="chnage the quantity of urine"
                placeholder="여기를 수정해보세요"
              />소변량변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="red urine"
                placeholder="여기를 수정해보세요"
              />
              혈뇨
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="foamy urine"
                placeholder="여기를 수정해보세요"
              />
              거품뇨
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="frequency"
                placeholder="여기를 수정해보세요"
              />
              잦은 소변
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_urinary"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-1">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">그외 동반되는 증상이 있나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                class="ans animate fadeInRightBig three"
                v-model="survey_data.associated_symptom_others"
                placeholder="여기를 수정해보세요"
              />
            </div>
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q5
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">과거 복부 관련 경험이 있나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.abdomen_relevant"
                class="ans animate fadeInRightBig three"
                value="abdomen_hurted"
                placeholder="여기를 수정해보세요"
              />
              복부를 다친 적이 있음
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.abdomen_relevant"
                class="ans animate fadeInRightBig three"
                value="abdomen_surgery"
                placeholder="여기를 수정해보세요"
              />
              복부 수술을 받은 적이 있음
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.abdomen_relevant"
                class="ans animate fadeInRightBig three"
                value="abdomen_nothing"
                placeholder="여기를 수정해보세요"
              />
              해당없음
            </div>
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
        associated_symptom_whole_body: [],
        associated_symptom_urinary: [],
        associated_symptom_others: "",
        abdomen_relevant: []
      }
    };
  },
  methods: {
    sec5(survey_data) {
      this.$store.dispatch("setSurveyData5", survey_data);
    }
  }
};
</script>
<style scoped>
.v-expansion-panels {
  height: 80%;
  box-shadow: none;
  padding: 1rem 1.5rem;
}
.v-expansion-panel-content {
  height: 46vh;
}
.section {
  height: 100vh;
}
.ans {
  background-color: #cecece;
  margin: 5px auto;
}
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
