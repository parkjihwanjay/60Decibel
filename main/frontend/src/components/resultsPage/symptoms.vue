<template>
  <div class="bigbackground">
    <span style="font-size: 1.3em;">주요 증상</span>
    <br />
    <br />
    <p
      v-if="`${stomach.symptom_start} === 'less_than_month'`"
    >복통이 {{stomach.symptom_start_less_than_month }}에 처음 발생하였습니다.</p>
    <p v-else>복통이 발생한지 {{stomach.symptom_start}}</p>
    <br />
    <p>통증이 {{stomach.fast_or_slow}} 발생하였습니다</p>
    <br />
    <p v-if="`${stomach.symptom_situation}`">처음 통증이 발생하였을 때 {{stomach.symptom_situation}}한 상황이었습니다.</p>
    <br />
    <p>{{stomach.symptom_location}}가 아픕니다.</p>
    <br />
    <p v-if="`${stomach.location_move}`">아픈 부위가 {{stomach.location_move}}로 이동했습니다.</p>
    <p v-else>아픈 부위가 이동하지 않았습니다.</p>
    <br />
    <p v-if="`${stomach.pain_spread}`">통증이 {{stomach.pain_spread_where}}로 퍼졌습니다.</p>
    <br />
    <p>통증이 한 번 발생하면 {{stomach.pain_duration}}만큼 지속됩니다.</p>
    <br />
    <p v-if="`${stomach.pain_repeated}`">통증의 빈도는 하루에 {{stomach.pain_repeated}}입니다.</p>
    <p v-else>단발성 통증입니다.</p>
    <br />
    <p>{{stomach.pain_character}}통증입니다.</p>
    <br />
    <p>0~10 중 {{stomach.pain_score}}에 해당하는 통증입니다.</p>
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

<style>
p {
  word-break: keep-all;
}
</style>
