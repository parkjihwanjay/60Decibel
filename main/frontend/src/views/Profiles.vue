<template>
  <div class="profile">
    <ul>
      <!-- <img v-bind:src="$store.state.profile.profile${this.state.profile.$store.profile.avatar}`" /> -->
      <li>이름 : {{ this.$store.state.profile.name }}</li>
      <li>성별 : {{ this.$store.state.profile.gender }}</li>
      <li>생년월일 : {{ this.$store.state.profile.birth_date }}</li>
      <li>신장 : {{ this.$store.state.profile.height }}</li>
      <li>체중 : {{ this.$store.state.profile.weight }}</li>
      <br />
      <li
        v-if="`${this.$store.state.profile.had_checkup}`"
      >이름 : {{ this.$store.state.profile.had_checkup_true }}년 전에 건강검진을 받았습니다.</li>
      <li>이전에 {{ this.$store.state.profile.diagnosed_disease }}을 진단받았습니다.</li>
      <li
        v-if="`${this.$store.state.profile.taking_medicine}`"
      >{{ this.$store.state.profile.what_medicine }}을 복용중입니다.</li>
      <li>{{ this.$store.state.profile.family_history }}와(과) 같은 가족력이 있습니다.</li>
      <br />
      <li
        v-if="`${this.$store.state.profile.drinking}`"
      >매주 {{ this.$store.state.profile.name }}병의 술을 마십니다.</li>
      <li
        v-if="`${this.$store.state.profile.smoking}`"
      >{{ this.$store.state.profile.how_long_smoking }}년 동안 {{ this.$store.state.profile.how_long_smoking }}갑씩 피우고 있습니다.</li>
      <li v-if="`${ this.$store.state.profile.job }`">직업 : {{ this.$store.state.profile.job }}</li>
      <li
        v-if="`${this.$store.state.profile.relevant_data}`"
      >기타 특이사항 : {{ this.$store.state.profile.relevant_data }}</li>
    </ul>
  </div>
</template>
<script>
import { PROFILE } from "../store.js";
export default {
  // computed: {
  //     profileInfo() {}
  // },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>
