<template>
  <div class="info">
    <p class="name" style="font-size: 1.5em;">{{ profile.name }}님의 설문 결과</p>
    <br />
    <p>작성일 : {{profile.created_at}}</p>
    <br />
    <p class="gender-head">성별: {{ profile.gender }}</p>
    <p class="birth">생년월일: {{ profile.birth_date }}</p>
    <p class="height-head">신장: {{ profile.height }}</p>
    <p class="weight-head">체중: {{ profile.weight }}</p>
    <p class="job1" v-if="`${ profile.job }`">직업: {{ profile.job }}</p>
    <p class="job2" v-else>직업: 메롱</p>
    <br />
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
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
.info {
  margin: 5px;
}
p {
  word-break: keep-all;
}
</style>
