<template>
  <div class="container4">
    <div class="under-line">
      <p class="txt-main">
        <span>Members</span>
      </p>
    </div>
    <div class="carousel">
      <v-btn v-on:click="left" icon="true">
        <i class="fas fa-chevron-left"></i>
      </v-btn>
      <div class="carousel-center">
        <div v-if="member===1" class="member-intro">
          <p class="txt-head">고려대 의과대학</p>
          <p class="txt-bold">컨텐츠 개발</p>
          <img class="icon" src="../../assets/kumc.png" />
          <p class="txt-main">
            정형화된 진료 대화를 정리하고,
            <br />의대 교수님들의 검증을 거쳐
            <br />양질의 컨텐츠를 개발합니다.
          </p>
        </div>
        <div v-if="member===2" class="member-intro">
          <p class="txt-head">고려대 장애인권위원회</p>
          <p class="txt-bold">마케팅</p>
          <img class="icon" src="../../assets/about_kuda.png" />
          <p class="txt-main">
            제작된 컨텐츠와 어플리케이션이
            <br />실용성이 있는지를 알아보고,
            <br />지속적으로 피드백을 제공합니다.
          </p>
        </div>
        <div v-if="member===3" class="member-intro">
          <p class="txt-head">고려대 멋쟁이사자처럼</p>
          <p class="txt-bold">어플리케이션 개발</p>
          <img class="icon" src="../../assets/about_kulion.png" />
          <p class="txt-main">
            대화 컨텐츠를 사용하기 편리하도록
            <br />스마트폰 어플로 제작할 예정입니다.
            <br />현재는 웹앱 제작중입니다.
          </p>
        </div>
        <div class="carousel-btn-box">
          <div @click="click1" class="carousel-btn" :class="{selected:member===1}"></div>
          <div @click="click2" class="carousel-btn" :class="{selected:member===2}"></div>
          <div @click="click3" class="carousel-btn" :class="{selected:member===3}"></div>
        </div>
      </div>
      <v-btn v-on:click="right" icon="true">
        <i class="fas fa-chevron-right"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: 1
    };
  },
  methods: {
    left: function() {
      if (this.member === 1) {
        this.member = 3;
      } else {
        this.member--;
      }
    },
    right: function() {
      if (this.member === 3) {
        this.member = 1;
      } else {
        this.member++;
      }
    },
    click1: function() {
      this.member = 1;
    },
    click2: function() {
      this.member = 2;
    },
    click3: function() {
      this.member = 3;
    }
  }
};
</script>


<style scoped>
.container4 {
  height: 60vh;
}
.member-intro {
  width: 35vh;
  height: 40vh;
  text-align: center;
  display: inline-block;
}
.member-deatil {
  display: flex;
}
.txt-head {
  padding-top: 30px;
  padding-bottom: 10px;
  color: #0d4d8d;
  font-size: 1.4rem;
  font-weight: bolder;
  font-weight: 550;
}
.txt-bold {
  font-weight: bolder;
  font-weight: 800;
}
.txt-main {
  font-size: 0.9rem;
  line-height: 140%;
}
.carousel-btn-box {
  display: flex;
  padding-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.carousel-btn {
  text-align: center;
  height: 1vh;
  width: 1vh;
  margin: 0 1.2vh;
  background-color: #dadada;
  border-radius: 50%;
}
.selected {
  background-color: #0d4d8d;
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
  margin-top: 12px;
  margin-bottom: 12px;
  width: 150px;
  height: 150px;
}
.icon:hover,
.icon:active {
}
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-center {
  text-align: center;
}
</style>