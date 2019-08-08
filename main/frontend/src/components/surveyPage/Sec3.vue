<template>
  <div class="section">
    <p class="question-header">증상의 지속시간</p>
    <div class="question-body">
      <v-expansion-panels v-model="expand" accordion class="expansion">
        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q2.
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">통증이 얼마나 지속되나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="lest_than_10m"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />10분 미만
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="from_10m_to_1h"
                class="ans animate fadeInRightBig four"
                placeholder="여기를 수정해보세요"
              />
              10분-1시간
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="more_than_1h"
                class="ans animate fadeInRightBig five"
                placeholder="여기를 수정해보세요"
              />
              1시간이상
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_duration"
                value="all_day"
                class="ans animate fadeInRightBig six"
                placeholder="여기를 수정해보세요"
              />
              하루종일
            </div>
            <br />
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
            <p class="question">통증이 주기적으로 있나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_repeated"
                class="ans animate fadeInRightBig three"
                value="True"
                placeholder="여기를 수정해보세요"
              />반복됩니다.
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_repeated"
                class="ans animate fadeInRightBig four"
                value="False"
                placeholder="여기를 수정해보세요"
              />단발성입니다
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
            <p class="question">통증의 빈도는 어떻게 되세요?</p>
            <br />
            <br />통증의 빈도는
            <div class="pain-frequency">
              <select
                class="ans animate fadeInRightBig three"
                v-model="survey_data.pain_how_often_day"
                name="job"
              >
                <option value="one_day">하루에</option>
                <option value="one_week">일주일</option>
              </select>

              <select
                class="ans animate fadeInRightBig three"
                v-model="survey_data.pain_how_often_many"
                name="job"
              >
                <option value="0_to_1">0-1회</option>
                <option value="2_to_3">2-3회</option>
                <option value="4_to_5">4-5회</option>
                <option value="more_than_6">6회이상</option>
              </select>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-2">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q3
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">증상 후 달라진 요인이 있나요</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="after meal"
                placeholder="여기를 수정해보세요"
              />식사후 심해짐
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="no meal"
                placeholder="여기를 수정해보세요"
              />공복에심해짐
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="after alchol"
                placeholder="여기를 수정해보세요"
              />
              음주후 심해짐
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="posture"
                placeholder="여기를 수정해보세요"
              />
              자세에따라 통증변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="urination"
                placeholder="여기를 수정해보세요"
              />
              배뇨시 통증변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="defecation"
                placeholder="여기를 수정해보세요"
              />
              배변시 통증변화
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                class="ans animate fadeInRightBig three"
                v-model="survey_data.factor"
                value="nothing"
                placeholder="여기를 수정해보세요"
              />
              해당사항 없음
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel class="q1-3">
          <v-expansion-panel-header class="header animate fadeInDown two">
            Q4
            <template v-slot:actions>
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content animate fadeInUp one">
            <p class="question">기타 요인이 있나요?</p>
            <br />
            <br />
            <input
              class="ans animate fadeInRightBig three"
              type="text"
              v-model="survey_data.other_factor"
              placeholder="여기를 수정해보세요"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="buttons">
      <router-link :to="{name:'sec2'}">이전</router-link>
      <router-link :to="{name:'sec4'}">다음</router-link>
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
        pain_duration: "",
        pain_repeated: "",
        pain_how_often_day: "",
        pain_how_often_many: "",
        factor: [],
        other_factor: ""
      }
    };
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
