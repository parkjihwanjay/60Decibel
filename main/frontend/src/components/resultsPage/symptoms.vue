<template>
  <div class="cont">
    <div class="head">주요 증상</div>
    <div class="main">
      <br />
      <p>복통이 발생한 지 {{stomach.symptom_start }}입니다.</p>
      <p>통증은 {{stomach.fast_or_slow}} 발생하였습니다.</p>

      <p>통증 발생 상황 : {{ stomach.symptom_situation }}</p>

      <p>주로 {{ stomach.symptom_location }}가 아픕니다.</p>

      <p>통증 부위의 이동 여부 : {{stomach.location_move}}</p>
      <p v-if="`${stomach.pain_spread}`">통증이 {{stomach.pain_spread_where}} 퍼졌습니다.</p>
      <p>통증이 한 번 발생하면 {{stomach.pain_duration}}만큼 지속됩니다.</p>

      <p v-if="`${stomach.pain_repeated}`">통증의 빈도 : {{stomach.pain_repeated}}</p>
      <!-- 인우 : p태그 안에 들어가는 변수는 stomach.pain_how_often_day나 stomach.pain_how_often_many여야 하는 것 
      같은데, 일단 설문지에서 선택지가 없음-->

      <p v-else>단발성 통증입니다.</p>
      <p>통증의 양상 : {{stomach.pain_character}}</p>
      <p>0~10 중 {{stomach.pain_score}}에 해당하는 통증입니다.</p>
    </div>
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
