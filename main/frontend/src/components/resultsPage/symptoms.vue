<template>
  <div class="cont">
    <div class="head">주요 증상</div>
    <div class="main">
      <br />
      <p
        v-if="`${stomach.symptom_start} === 'less_than_month'`"
      >복통이 {{stomach.symptom_start_less_than_month }}에 처음 발생하였고,</p>
      <p v-else>복통이 발생한지 {{stomach.symptom_start}}이 되었고,</p>
      <p>통증은 {{stomach.fast_or_slow}} 발생하였습니다.</p>
      <p v-if="`${stomach.symptom_situation}`">통증 발생 상황 : {{stomach.symptom_situation}}</p>
      <p>주로 {{stomach.symptom_location}}가 아프고</p>
      <p v-if="`${stomach.location_move}`">아픈 부위가 {{stomach.location_move}} 이동했습니다.</p>
      <p v-else>아픈 부위가 이동하지는 않았습니다.</p>
      <p v-if="`${stomach.pain_spread}`">통증이 {{stomach.pain_spread_where}} 퍼졌습니다.</p>
      <p>통증이 한 번 발생하면 {{stomach.pain_duration}}만큼 지속됩니다.</p>
      <p v-if="`${stomach.pain_repeated}`">통증의 빈도 {{stomach.pain_repeated}}입니다.</p>
      <p v-else>단발성 통증입니다.</p>
      <p>{{stomach.pain_character}}통증입니다.</p>
      <p>0~10 중 {{stomach.pain_score}}에 해당하는 통증입니다.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
export default {
  // method: {
  //   ...mapActions["getStomachInfo"]
  // },
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
p {
  display: inline;
}
.cont {
  padding: 0 1.5rem;
  padding-top: 20px;
}
.head {
  border-bottom: 1px solid rgb(133, 133, 133);
  padding-bottom: 0.5rem;
  width: 100px;
  font-size: 1.5rem;
  font-weight: 700;
}
.main {
  line-height: 1.3rem;
  display: inline;
}
</style>
