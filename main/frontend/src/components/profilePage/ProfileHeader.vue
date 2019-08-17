<template>
  <div class="prof-header">
    <div class="contents">
      <div class="prof-img">
        <img v-if="profile.avatar.length" v-bind:src="profile.avatar" class="img" />
        <img v-else src="../../assets/60db.png" class="img" />
      </div>
      <div class="prof-name">
        <p class="name">{{ profile.name }}</p>
      </div>
      <div class="prof-JobBirth">
        <p class="job1" v-if="`${ profile.job }`">{{ profile.job }}</p>
        <p class="job2" v-else>[직업]</p>&nbsp;&nbsp;|&nbsp;&nbsp;
        <p v-if="`${ profile.birth_date }`" class="birth">{{ profile.birth_date }}</p>
        <p v-else>생년월일</p>
      </div>
      <div class="prof-intro">
        <p class="intro">
          60DB와 함께
          <br />더 나은 진료서비스를 경험하세요!
        </p>
      </div>
    </div>
    <div class="contents2">
      <div class="box">
        <div class="icon">
          <img src="../../assets/love1.png" />
          <p class="box-head">성별</p>
        </div>
        <p v-if="profile.gender" class="box-body">{{ profile.gender }}</p>
        <p v-else class="box-body">?</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/ruler1.png" />
          <p class="box-head">신장</p>
        </div>
        <p v-if="profile.height" class="box-body">{{ profile.height }}cm</p>
        <p v-else class="box-body">?</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/scale1.png" />
          <p class="box-head">체중</p>
        </div>
        <p v-if="profile.weight" class="box-body">{{ profile.weight }}kg</p>
        <p v-else class="box-body">?</p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>
<style scoped>
.prof-header {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
}
.prof-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 185px;
  border: 1.5px solid rgb(255, 255, 255);
  border-radius: 50%;
}
.img {
  border-radius: 50%;
  width: 170px;
  height: 170px;
}
.prof-name {
  color: white;
  font-size: 1.9rem;
  margin-top: 3rem;
}
.prof-JobBirth {
  display: flex;
  margin-top: 0.5rem;
}
.prof-intro {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  line-height: 140%;
}

.contents2 {
  display: flex;
  justify-content: space-between;
  min-width: 60%;
  height: 20%;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 1rem;
  width: 33%;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
}
img {
  width: 20px;
  height: 20px;
  margin-bottom: 0.2rem;
}
.box-head {
  width: 3rem;
  color: #ffffff;
  font-size: 0.9em;
  text-align: center;
}
.box-body {
  color: rgb(196, 30, 99);
  font-size: 1.6rem;
  text-align: center;
  width: 100%;
}
</style>
