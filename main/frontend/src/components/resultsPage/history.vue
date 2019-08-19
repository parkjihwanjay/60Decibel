<template>
  <div>
    <span style="font-size: 1.3em;">사회력 과거력</span>
    <br />
    <br />
    <p v-if="`${stomach.had_checkup}=false`">{{ stomach.had_checkup_true }}년 전에 건강검진을 받았습니다.</p>
    <br />
    <p>이전에{{ stomach.diagnosed_disease }}을 진단받았습니다.</p>
    <br />
    <p v-if="`${stomach.taking_medicine}`">{{ stomach.what_medicine }}을 복용중입니다.</p>
    <br />
    <p>
      <span class="s">{{ stomach.family_history }}</span>와(과) 같은 가족력이 있습니다.
    </p>
    <br />
    <p v-if="`${stomach.drinking}`">매주 {{ stomach.drinking_per_week }}병의 술을 마십니다.</p>
    <br />
    <p
      v-if="`${stomach.smoking}`"
    >담배를 {{ stomach.how_long_smoking }}년 동안 {{ stomach.how_long_smoking }}갑씩 피우고 있습니다.</p>
    <br />
    <p v-if="`${stomach.relevant_data}`">기타 특이사항 : {{ stomach.relevant_data }}</p>
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
.s {
  color: #0e4f8f;
}
p {
  word-break: keep-all;
}
</style>
    
