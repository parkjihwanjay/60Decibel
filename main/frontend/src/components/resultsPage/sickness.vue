<template>
  <div class="sick">
    <span style="font-size: 1.3em;">동반증상</span>
    <br />
    <br />
    <p>소화기와 관련하여 {{stomach.associated_symptom_digestive}}와 같은 동반증상이 있습니다.</p>
    <br />
    <p>(순환기/호흡기)와 관련하여 {{stomach.associated_symptom_circulatory}}와 같은 동반증상이 있습니다.</p>
    <br />
    <p>부인과와 관련하여 {{stomach.associated_symptom_gynecology}}</p>
    <br />
    <p>전신과 관련하여 {{stomach.associated_symptom_body}}와 같은 동반증상이 있습니다.</p>
    <br />
    <p>비뇨기와 관련하여 {{stomach.associated_symptom_urinary}}와 같은 동반증상이 있습니다.</p>
    <br />
    <p>그 외 {{stomach.associated_symptom_others}}와 같은 동반증상이 있습니다.</p>
    <br />
    <p>통증이 {{stomach.factor}}와 같은 상황에 심해지거나 완화됩니다.</p>
    <br />
    <p>그 외 {{stomach.other_factor}}와 같은 상황에도 통증이 심해지거나 완화됩니다.</p>
    <br />
    <p>복부에 관한 과거이력 : {{stomach.abdomen_relevant}}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
export default {
  method: {
    ...mapActions(["getStomachInfo"])
  },
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
.sick {
  margin-top: 20px;
}
p {
  word-break: keep-all;
}
</style>
    