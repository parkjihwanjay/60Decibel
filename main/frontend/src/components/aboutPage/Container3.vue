<template>
  <div class="container2">
    <div class="under-line">
      <p class="txt-main">
        <span>Service</span>
      </p>
    </div>
    <div class="service-icon">
      <img :class="{imgborder:icon1}" class="icon img-round" src="../../assets/about_survey.png" />
      <img :class="{imgborder:icon2}" class="icon img-round" src="../../assets/about_survey.png" />
    </div>
    <div>
      <p class="txt-main">01</p>
      <p class="txt-head">설문조사</p>
      <!-- TODO: 설문조사 페이지 -->
      <p class="txt-main">
        환자는 설문기록을 통해 자신의 건강상태를 정확히 알리고,
        <br />의사는 환자의 건강상태를 빠른 속도로 빠짐없이 진료할 수 있습니다.
      </p>
    </div>
    <div>
      <p class="txt-main">02</p>
      <p class="txt-head">진료대화 카드</p>
      <!-- TODO: 진료대화 페이지 -->
      <p class="txt-main">
        대면 진료시 정형화된 진료대화를 미리 버튼으로 만들어서
        <br />환자가 의사의 진료대화를 더 잘 이해하도록 돕습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: 1,
      icon1: true,
      icon2: false
    };
  }
};
</script>


<style scoped>
.container2 {
  height: 50vh;
}
.txt-head {
  font-size: 1.6rem;
}
.txt-main {
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
.icon {
  width: 75px;
  height: 75px;
}
.imgborder {
  border: 3px solid #0d4d8d;
}
.img-round {
  border-radius: 50%;
}
span {
  color: #0d4d8d;
  font-weight: 700;
}
.service-box {
  display: flex;
}
</style>