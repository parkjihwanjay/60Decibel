<template>
  <div class="profile">
    <ul>
      <img v-bind:src="`${profile.avatar}`" />
      <!-- <li>{{profile.avatar}}</li> -->
      <li>이름 : {{ profile.name }}</li>
      <li>성별 : {{ profile.gender }}</li>
      <li>생년월일 : {{ profile.birth_date }}</li>
      <li>신장 : {{ profile.height }}</li>
      <li>체중 : {{ profile.weight }}</li>
      <br />
      <li v-if="`${profile.had_checkup}`">{{ profile.had_checkup_true }}년 전에 건강검진을 받았습니다.</li>
      <li>이전에 {{ profile.diagnosed_disease }}을 진단받았습니다.</li>
      <li v-if="`${profile.taking_medicine}`">{{ profile.what_medicine }}을 복용중입니다.</li>
      <li>{{ profile.family_history }}와(과) 같은 가족력이 있습니다.</li>
      <br />
      <li v-if="`${profile.drinking}`">매주 {{ profile.drinking_per_week }}병의 술을 마십니다.</li>
      <li
        v-if="`${profile.smoking}`"
      >담배를 {{ profile.how_long_smoking }}년 동안 {{ profile.how_long_smoking }}갑씩 피우고 있습니다.</li>
      <li v-if="`${ profile.job }`">직업 : {{ profile.job }}</li>
      <li v-if="`${profile.relevant_data}`">기타 특이사항 : {{ profile.relevant_data }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["profile", "userInfo"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
  }
};
</script>
