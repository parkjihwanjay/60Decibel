<template>
  <div class="survey-history">
    <Navbar />헬로
    <ul>
      <router-link :to="`/stomach/${item.id}`" v-for="item in survey_history">
        번호 : {{ item.id }}
        <br />
        증상 : {{ item.symptom }}
        <br />
        <small>작성일 : {{ item.created_at}}</small>
        <br />
        <br />
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "../components/homePage/Navbar.vue";

export default {
  computed: {
    ...mapState(["survey_history"])
  },
  created() {
    this.$store.dispatch("getSurveyHistory");
  },
  components: {
    Navbar
  }
};
</script>

<style>
</style>
