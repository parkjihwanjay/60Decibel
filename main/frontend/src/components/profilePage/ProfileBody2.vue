<template>
  <div class="prof-record">
    <div class="content3">
      <div class="txt-head">과거력</div>
      <!-- 건강검진 이력 -->
      <div class="profileinfo">
        <div class="profiletitle">최근 건강검진 이력</div>
        <div
          v-if="`${profile.had_checkup}=='True'&&${profile.had_checkup_true}`"
          class="profiledetail"
        >{{ profile.had_checkup_true }}</div>
        <div v-else class="profiledetail">YES</div>
      </div>
      <div class="profileinfo">
        <div class="profiletitle">최근 진단받은 병</div>
        <div v-if="profile.had_checkup_true" class="profiledetail">{{ profile.diagnosed_disease }}</div>
        <div class="profiledetail" v-else>입력해주세요</div>
      </div>
      <!-- 복용약 -->
      <div class="profileinfo">
        <div class="profiletitle">복용약</div>
        <div v-if="`${profile.taking_medicine}=='True'`" class="profiledetail">{{profile.what_medicine}}</div>
        <div class="profiledetail" v-else>입력해주세요</div>
      </div>
      <!-- 가족력 -->
      <div class="profileinfo">
        <div class="profiletitle">가족력</div>
        <div v-if="`${profile.family_history}==='True'`" class="profiledetail">{{profile.family_history}}</div>
        <div class="profiledetail" v-else>입력해주세요</div>
      </div>
    </div>
    <!-- 프로필 추가 버튼 -->
    <div class="profileplus">
      <v-btn class="button" color="#669999" to="/profileupdate">프로필 작성하기</v-btn>
      <!-- 작성하지 않은 버튼 -->
      <div class="pluslist"></div>
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
