<template>
  <div class="prof-record">
    <div class="content3">
      <div class="txt-head">과거력</div>
      <!-- 건강검진 이력 -->
      <div class="profileinfo">
        <div class="profiletitle">최근 건강 검진</div>
        <div
          v-if="`${profile.had_checkup}==='True'`"
          class="profiledetail"
        >{{ profile.had_checkup_true }} 전</div>
      </div>
      <div class="profileinfo">
        <div class="profiletitle">최근 진단 병명</div>
        <div v-if="profile.had_checkup_true" class="profiledetail">{{ profile.diagnosed_disease }}</div>
      </div>
      <!-- 복용약 -->
      <div class="profileinfo">
        <div class="profiletitle">복용약</div>
        <div
          v-if="`${profile.taking_medicine}=='True'`"
          class="profiledetail"
        >{{ profile.what_medicine }}</div>
      </div>
      <!-- 가족력 -->
      <div class="profileinfo">
        <div class="profiletitle">가족력</div>
        <div v-if="profile.family_history" class="profiledetail">{{ profile.family_history }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  updated() {
    this.$emit("body2");
  }
};
</script>

<style scoped>
.content3 {
  padding: 2rem;
  max-width: 700px;
  height: 230px;
  margin: 0 auto;
}
.profileinfo {
  font-size: 1.05rem;
  display: flex;
  line-height: 150%;
  padding-left: 2rem;
}
.profiletitle {
  color: rgb(80, 80, 80);
  font-weight: 800;
  width: 40%;
  border-right: 2px solid rgba(197, 197, 197, 0.507);
}
.profiledetail {
  padding-left: 3rem;
}
.txt-head {
  color: #397979;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: 800;
}
.button {
  color: white;
}
.profileplus {
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
}
</style>
