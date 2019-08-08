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
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
  }
};
</script>
<style scoped>
.prof-header {
  color: white;
}

.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  font-size: 1.7rem;
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
</style>
