<template>
  <div class="prof-header">
    <div class="contents">
      <div class="prof-img">
        <img v-if="`${profile.avatar}===null`" src="../../assets/60db.png" class="img" />
        <img v-else v-bind:src="`${profile.avatar}`" class="img" />
      </div>
      <div class="prof-name">
        <p class="name">{{ profile.name }}</p>
      </div>
      <div class="prof-JobBirth">
        <p class="job1" v-if="`${ profile.job }`">{{ profile.job }}</p>
        <p class="job2" v-else>메롱</p>&nbsp;&nbsp;|&nbsp;&nbsp;
        <p class="birth">{{ profile.birth_date }}</p>
      </div>
      <div class="prof-intro">
        <p class="intro">
          Lorem ipsum dolor sit amet
          <br />consectetur adipisicing elit.
        </p>
      </div>
    </div>
    <div class="contents2">
      <div class="box">
        <div class="icon">
          <img src="../../assets/love1.png" />
          <p class="box-head">성별</p>
        </div>
        <p class="box-body">{{ profile.gender }}</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/ruler1.png" />
          <p class="box-head">신장</p>
        </div>
        <p class="box-body">{{ profile.height }}cm</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/scale1.png" />
          <p class="box-head">체중</p>
        </div>
        <p class="box-body">{{profile.weight }}kg</p>
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
  justify-content: space-around;
  align-items: center;
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
}

.contents2 {
  display: flex;
  justify-content: space-around;
  width: 425px;
  height: 20%;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 1rem;
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
}
</style>
