<template>
  <div class="prof-record">
    <div class="content3">
      <p v-if="`${profile.had_checkup}`">{{ profile.had_checkup_true }}년 전에 건강검진을 받았습니다.</p>
      <p v-else>메롱</p>
      <p>이전에 {{ profile.diagnosed_disease }}을 진단받았습니다.</p>
      <p v-if="`${profile.taking_medicine}`">{{ profile.what_medicine }}을 복용중입니다.</p>
      <li>{{ profile.family_history }}와(과) 같은 가족력이 있습니다.</li>
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

<style>
</style>
