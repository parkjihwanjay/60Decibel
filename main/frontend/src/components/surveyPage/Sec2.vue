<template>
  <div class="section">
    <p class="question-header">증상의 위치</p>
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
            <p class="question">배의 어느 부위가 아픈가요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                value="whole abdomen"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />복부전체
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig four"
                value="sternal"
                placeholder="여기를 수정해보세요"
              />명치부위
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig five"
                value="umbilicus"
                placeholder="여기를 수정해보세요"
              />배꼽부위
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig six"
                value="flank"
                placeholder="여기를 수정해보세요"
              />옆구리
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig seven"
                value="LUQ"
                placeholder="여기를 수정해보세요"
              />왼쪽 위
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig eight"
                value="LLQ"
                placeholder="여기를 수정해보세요"
              />오른쪽 위
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                value="RUQ"
                class="ans animate fadeInRightBig nine"
                placeholder="여기를 수정해보세요"
              />왼쪽 아래
            </div>
            <br />
            <div class="answer">
              <input
                type="checkbox"
                v-model="survey_data.symtpom_location"
                class="ans animate fadeInRightBig ten"
                value="RLQ"
                placeholder="여기를 수정해보세요"
              />오른쪽 아래
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
            <p class="question">아픈 부위가 이동하나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.location_move"
                value="True"
                class="ans animate fadeInRightBig three"
              />예
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.location_move"
                value="False"
                class="ans animate fadeInRightBig four"
              />아니오
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
            <p class="question">아픈 부위가 어떻게 이동하나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                v-model="survey_data.location_move_how"
                class="ans animate fadeInRightBig three"
              />
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
            <p class="question">통증이 퍼지나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_spread"
                value="True"
                class="ans animate fadeInRightBig three"
              />예
            </div>
            <br />
            <div class="answer">
              <input
                type="radio"
                v-model="survey_data.pain_spread"
                value="False"
                class="ans animate fadeInRightBig three"
              />아니오
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
            <p class="question">통증이 어디로 퍼지나요?</p>
            <br />
            <br />
            <div class="answer">
              <input
                type="text"
                v-model="survey_data.pain_spread_where"
                class="ans animate fadeInRightBig three"
                placeholder="여기를 수정해보세요"
              />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="buttons">
      <router-link :to="{name:'sec1'}">이전</router-link>
      <router-link :to="{name:'sec3'}" @click.native="sec2(survey_data)">다음</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: 0,
      survey_data: {
        symtpom_location: [],
        location_move: "",
        location_move_how: "",
        pain_spread: "",
        pain_spread_where: ""
      }
    };
  },
  methods: {
    sec2(survey_data) {
      this.$store.dispatch("setSurveyData2", survey_data);
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
