<template>
  <div class="prof-body1">
    <div class="contents">
      <div class="box">
        <div class="icon">
          <img src="../../assets/love.png" />
          <p class="box-head">성별</p>
        </div>
        <p class="box-body">{{ profile.gender }}</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/ruler.png" />
          <p class="box-head">신장</p>
        </div>
        <p class="box-body">{{ profile.height }}</p>
      </div>
      <div class="box">
        <div class="icon">
          <img src="../../assets/scale.png" />
          <p class="box-head">체중</p>
        </div>
        <p class="box-body">{{profile.weight }}</p>
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
.prof-body1 {
  display: flex;
  justify-content: center;
}
.contents {
  display: flex;
  justify-content: space-around;
  width: 350px;
  height: 100%;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 rem;
}
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  margin-top: 1rem;
}
img {
  width: 20px;
  height: 20px;
  margin-bottom: 0.5rem;
}
.box-head {
  width: 3rem;
  padding-bottom: 0.5rem;
  color: rgb(151, 151, 151);
  font-size: 0.9rem;
  text-align: center;
}
.box-body {
  margin-bottom: 1rem;
  color: #0e4f8f;
  font-size: 1.9rem;
  font-weight: bold;
}
</style>
