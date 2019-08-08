<template>
  <div class="prof-record">
    <ul>
      <li v-if="`${profile.had_checkup}=false`">{{ profile.had_checkup_true }}년 전에 건강검진을 받았습니다.</li>
      <li>이전에 {{ profile.diagnosed_disease }}을 진단받았습니다.</li>
      <li v-if="`${profile.taking_medicine}`">{{ profile.what_medicine }}을 복용중입니다.</li>
      <li>{{ profile.family_history }}와(과) 같은 가족력이 있습니다.</li>
    </ul>
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

<style>
</style>
