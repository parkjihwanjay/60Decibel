<template>
  <div class="section">
    <v-expansion-panels v-model="expand" accordion class="expansion">
      <v-expansion-panel class="q1-1">
        <v-expansion-panel-header class="header animate fadeInDown two">
          Q1.
          <template v-slot:actions></template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="content animate fadeInUp one">
          <p class="question">기타 전달하고 싶은 사항이 있나요?</p>
          <br />

          <div class="answers">
            <textarea
              class="ans-txt animate fadeInRightBig three"
              v-model="survey_data.free_to_describe"
              placeholder="여기에 입력해주세요"
            />
          </div>
          <br />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="buttons">
      <router-link :to="{name:'sec5'}">이전</router-link>
    </div>
    <div class="button2">
      <button @click="sec6(survey_data)">제출</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      expand: 0,
      survey_data: {}
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
    sec6(survey_data) {
      this.$store.dispatch("setSurveyData6", survey_data);
    }
  }
};
</script>
<style scoped>
.question {
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.v-expansion-panels {
  padding: 1rem 1.5rem;
}
.v-expansion-panel-content {
  height: 220px;
}
.v-expansion-panel-header {
  font-weight: 700;
  font-size: 1.1rem;
  color: #125b7f;
}
.section {
  height: 92vh;
}
.ans {
  width: 90%;
  height: 30px;
  background-color: #cecece;
  margin: 5px auto;
}
.answers {
  display: flex;
  justify-content: center;
}
.ans-txt {
  display: block;
  width: 270px;
  height: 10rem;
  border: #1985bb solid 1px;
  outline: none;
  background-color: white;
  padding: 0.5rem;
  color: rgb(56, 56, 56);
}
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
.button2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 182, 47);
  border-radius: 10px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.308);
  outline-color: rgb(32, 114, 207);
  width: 13rem;
  height: 3rem;
  margin: auto;
  margin-top: 5rem;
  color: rgb(54, 54, 54);
  font-size: 1.2rem;
  font-weight: 700;
  /* transition: 0.5s; */
}
.button:hover {
  box-shadow: 5px 7px 10px 2px rgba(0, 0, 0, 0.308);
}
.button2:hover {
  box-shadow: 5px 7px 10px 2px rgba(0, 0, 0, 0.308);
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
