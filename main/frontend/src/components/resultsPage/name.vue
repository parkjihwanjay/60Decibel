<template>
  <div class="info">
    <p class="head">{{ profile.name }}님의 설문 결과</p>
    <p class="date">작성일 : {{stomach.created_at}}</p>
    <br />
    <div class="result-table">
      <div class="row a">
        <div class="col1">
          <p>성명</p>
        </div>
        <div class="col2">
          <p>{{ profile.name }}</p>
        </div>
        <div class="col1">
          <p>생년월일</p>
        </div>
        <div class="col2">
          <p>{{ profile.birth_date }}</p>
        </div>
      </div>
      <div class="row b">
        <div class="col1">
          <p>성별</p>
        </div>
        <div class="col2">
          <p>{{ profile.gender }}</p>
        </div>
        <div class="col1">
          <p>신장/체중</p>
        </div>
        <div class="col3">
          <p>{{ profile.height }} / {{ profile.weight }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { store } from "../../store.js";
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
  align-items: center;
  border-bottom: 1px solid rgb(102, 102, 102);
}
.row {
  border-top: 1px solid rgb(102, 102, 102);
  width: 100%;
  display: flex;
  height: 40px;
}
.row div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(102, 102, 102);
}
.a .col1 {
  width: 20%;
  background-color: rgb(231, 231, 231);
  font-weight: 700;
}
.a .col2 {
  width: 30%;
}
.b .col1 {
  width: 20%;
  background-color: rgb(231, 231, 231);
  font-weight: 700;
}
.b .col2 {
  width: 20%;
}
.b .col3 {
  width: 40%;
}
</style>
