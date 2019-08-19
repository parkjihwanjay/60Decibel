<template>
  <div>
    <span style="font-size: 1.3em;">사회력 과거력</span>
    <br />
    <br />
    <p v-if="`${profile.had_checkup}=false`">{{ profile.had_checkup_true }}년 전에 건강검진을 받았습니다.</p>
    <br />
    <p>이전에{{ profile.diagnosed_disease }}을 진단받았습니다.</p>
    <br />
    <p v-if="`${profile.taking_medicine}`">{{ profile.what_medicine }}을 복용중입니다.</p>
    <br />
    <p>
      <span class="s">{{ profile.family_history }}</span>와(과) 같은 가족력이 있습니다.
    </p>
    <br />
    <p v-if="`${profile.drinking}`">매주 {{ profile.drinking_per_week }}병의 술을 마십니다.</p>
    <br />
    <p
      v-if="`${profile.smoking}`"
    >담배를 {{ profile.how_long_smoking }}년 동안 {{ profile.how_long_smoking }}갑씩 피우고 있습니다.</p>
    <br />
    <p v-if="`${profile.relevant_data}`">기타 특이사항 : {{ profile.relevant_data }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
export default {
  computed: {
    ...mapState(["profile"])
  },
  method: {
    ...mapActions(["getProfileInfo"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
  }
};
</script>
<style scoped>
.s {
  color: #0e4f8f;
}
p {
  word-break: keep-all;
}
</style>
    
