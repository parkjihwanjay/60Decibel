<template>
  <div class="stomach-result">
    <ul>
      <li>작성일 : {{stomach.created_at}}</li>
      <li
        v-if="`${stomach.symptom_start} === 'less_than_month'`"
      >복통이 {{stomach.symptom_start_less_than_month }}에 처음 발생하였습니다.</li>
      <li v-else>복통이 발생한지 {{stomach.symptom_start}}</li>
      <li>통증이 {{stomach.fast_or_slow}} 발생하였습니다</li>
      <li v-if="`${stomach.symptom_situation}`">처음 통증이 발생하였을 때 {{stomach.created_at}}한 상황이었습니다.</li>
      <li>{{stomach.symptom_location}}가 아픕니다.</li>
      <li v-if="`${stomach.location_move}`">아픈 부위가 {{stomach.created_at}}로 이동했습니다.</li>
      <li v-else>아픈 부위가 이동하지 않았습니다.</li>
      <li v-if="`${stomach.pain_spread}`">통증이 {{stomach.pain_spread_where}}로 퍼졌습니다.</li>
      <li>통증이 한 번 발생하면 {{stomach.created_at}}만큼 지속됩니다.</li>
      <li v-if="`${stomach.pain_repeated}`">통증의 빈도는 하루에 {{stomach.created_at}}입니다.</li>
      <li v-else>단발성 통증입니다.</li>
      <li>{{stomach.created_at}}통증입니다.</li>
      <li>0~10 중 {{stomach.pain_score}}에 해당하는 통증입니다.</li>
      <br />
      <li>소화기와 관련하여 {{stomach.associated_symptom_digestive}}와 같은 동반증상이 있습니다.</li>
      <li>(순환기/호흡기)와 관련하여 {{stomach.associated_symptom_circulatory}}와 같은 동반증상이 있습니다.</li>
      <li>부인과와 관련하여 {{stomach.associated_symptom_gynecology}}</li>
      <li>전신과 관련하여 {{stomach.associated_symptom_body}}와 같은 동반증상이 있습니다.</li>
      <li>비뇨기와 관련하여 {{stomach.associated_symptom_urinary}}와 같은 동반증상이 있습니다.</li>
      <li>그 외 {{stomach.associated_symptom_others}}와 같은 동반증상이 있습니다.</li>
      <li>통증이 {{stomach.factor}}와 같은 상황에 심해지거나 완화됩니다.</li>
      <li>그 외 {{stomach.other_factor}}와 같은 상황에도 통증이 심해지거나 완화됩니다.</li>
      <li>복부에 관한 과거이력 : {{stomach.abdomen_relevant}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
