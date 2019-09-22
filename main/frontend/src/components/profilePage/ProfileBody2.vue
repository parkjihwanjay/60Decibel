<template>
  <div class="prof-record">
    <div class="content3">
      <div class="txt-head">과거력</div>
      <!-- 건강검진 이력 -->
      <div class="profileinfo">
        <div class="profiletitle">최근 건강검진 이력</div>
        <div
          v-if="`${profile.had_checkup}==='True'`"
          class="profiledetail"
        >{{ profile.had_checkup_true }}</div>
      </div>
      <div class="profileinfo">
        <div class="profiletitle">최근 진단받은 병</div>
        <div v-if="profile.had_checkup_true" class="profiledetail">{{ diagnosed_disease }}</div>
      </div>
      <!-- 복용약 -->
      <div class="profileinfo">
        <div class="profiletitle">복용약</div>
        <div
          v-if="`${profile.taking_medicine}=='True'`"
          class="profiledetail"
        >{{profile.what_medicine}}</div>
      </div>
      <!-- 가족력 -->
      <div class="profileinfo">
        <div class="profiletitle">가족력</div>
        <div v-if="profile.family_history" class="profiledetail">{{family_history}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"]),
    diagnosed_disease: function() {
      return this.$store.state.profile.diagnosed_disease.slice(1, -1);
    },
    family_history: function() {
      return this.$store.state.profile.family_history.slice(1, -1);
    }
  },
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>

<style scoped>
.content3 {
  padding-top: 20px;
  padding-left: 20px;
}
.profileinfo {
  font-size: 1.05rem;
  display: flex;
  line-height: 140%;
}
.profiletitle {
  color: rgb(48, 48, 48);
  font-weight: bolder;
  font-weight: 800;
  width: 45%;
}
.profiledetail {
}
.txt-head {
  color: #397979;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
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
