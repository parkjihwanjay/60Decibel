<template>
  <div class="info">
    <p class="name" style="font-size: 1.5em;">{{ stomach.name }}님의 설문 결과</p>
    <br />
    <p>작성일 : {{stomach.created_at}}</p>
    <br />
    <p class="gender-head">성별: {{ stomach.gender }}</p>
    <p class="birth">생년월일: {{ stomach.birth_date }}</p>
    <p class="height-head">신장: {{ stomach.height }}</p>
    <p class="weight-head">체중: {{ stomach.weight }}</p>
    <p class="job1" v-if="`${ stomach.job }`">직업: {{ stomach.job }}</p>
    <p class="job2" v-else>직업: 메롱</p>&nbsp;&nbsp;|&nbsp;&nbsp;
    <br />
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
export default {
  computed: {
    ...mapState(["stomach"])
  },
  created() {
    const stomachId = this.$route.params.id;
    this.$store.dispatch("getStomachInfo", stomachId);
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
