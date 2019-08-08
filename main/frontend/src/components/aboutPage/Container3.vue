<template>
  <div class="container3">
    <div class="under-line">
      <p class="txt-main">
        <span>Service</span>
      </p>
    </div>
    <div class="service-icon">
      <img
        class="icon img-round"
        v-on:click="selectIcon1"
        :class="{imgborder:icon1}"
        src="../../assets/survey.png"
      />
      <img
        class="icon img-round"
        v-on:click="selectIcon2"
        :class="{imgborder:icon2}"
        src="../../assets/chat.png"
      />
    </div>
    <div class="service-intro">
      <div v-if="icon1">
        <p class="txt-main txt-bold">01</p>
        <p class="txt-head txt-bold">설문조사</p>
        <img class="img-center" src="../../assets/survey.png" />
        <p class="txt-detail">
          환자는 설문기록을 통해 자신의 건강상태를 정확히 알리고,
          <br />의사는 환자의 건강상태를 <br>빠른 속도로 빠짐없이 진료할 수 있습니다.
        </p>
      </div>
      <div v-if="icon2">
        <p class="txt-bold txt-main">02</p>
        <p class="txt-bold txt-head">진료대화 카드</p>
        <img class="img-center" src="../../assets/chat.png" />
        <p class="txt-detail">
          대면 진료시 정형화된 진료대화를 미리 버튼으로 만들어서
          <br />환자가 의사의 진료대화를 더 잘 이해하도록 돕습니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: true,
      icon2: false
    };
  },
  methods: {
    selectIcon1: function() {
      this.icon1 = true;
      this.icon2 = false;
    },
    selectIcon2: function() {
      this.icon1 = false;
      this.icon2 = true;
    }
  }
};
</script>


<style scoped>
.container3 {
  height: 76vh;
}
.txt-bold {
  font-weight: 800;
  font-weight: bolder;
}
.txt-head {
  padding-top: 1%;
  font-size: 1.6rem;
  color: #0d4d8d;
}
.txt-main {
  line-height: 140%;
  font-size: 1.05rem;
}
.under-line {
  height: 20px;
  text-align: center;
}
span {
  color: #0d4d8d;
  font-weight: 700;
  display: inline-block;
  vertical-align: center;
  border-bottom: 1px solid;
}
.service-icon {
  width: 100%;
  height: 100px;
  text-align: center;
  padding-top: 25px;
}
.service-intro {
  text-align: center;
}
.icon {
  margin: 0px 5%;
  width: 55px;
  height: 55px;
  opacity: 0.6;
}
.icon:hover,
.icon:active {
  opacity: 1;
}
.imgborder {
  opacity: 1;
  box-shadow: 0 0 0 3px #0d4d8d;
}
.img-round {
  border-radius: 50%;
}
.img-center {
  height: 220px;
}
span {
  color: #0d4d8d;
  font-weight: 700;
}
.service-box {
  display: flex;
}
.txt-detail {
  font-size: 0.9rem;
  line-height: 140%;
}
</style>