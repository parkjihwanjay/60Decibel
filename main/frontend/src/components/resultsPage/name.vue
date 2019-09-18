<template>
  <div class="info">
    <p class="head">{{ profile.name }}님의 설문 결과</p>
    <p class="date">작성일 : {{stomach.created_at}}</p>
    <br />
    <div class="result-table">
      <div class="row1">
        <div>
          <p class="name">성명: {{ profile.name }}</p>
        </div>
        <div>
          <p class="birth">생년월일: {{ profile.birth_date }}</p>
        </div>
      </div>
      <div class="row2">
        <div>
          <p class="gender-head">성별: {{ profile.gender }}</p>
        </div>
        <div>
          <p class="height-head">신장: {{ profile.height }}</p>
        </div>
        <div>
          <p class="weight-head">체중: {{ profile.weight }}</p>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
export default {
  computed: {
    ...mapState(["profile", "stomach"])
  },
  method: {
    ...mapActions(["getProfileInfo"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
    const stomachId = this.$route.params.id;
    this.$store.dispatch("getStomachInfo", stomachId);
  }
};
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
}
.head {
  color: rgb(44, 44, 44);
  font-size: 1.5rem;
  font-weight: 700;
}
.date {
  margin-top: 1rem;
  color: rgb(163, 163, 163);
  font-size: 0.9rem;
}
.result-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(102, 102, 102);
}
.row1 {
  display: flex;
}
.row1 p,
.row2 p {
  margin-right: 10px;
}
.row2 {
  display: flex;
}
</style>
