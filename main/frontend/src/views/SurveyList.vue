<template>
  <div class="survey-history">
    <ul>
      <li v-for="item in survey_history">
        증상 : {{ item.symptom }}
        <small>작성일 : {{ item.created_at}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["survey_history"])
  },
  created() {
    const authorId = this.$route.params.author;
    this.$store.dispatch("getSurveyHistory", authorId);
  }
};
</script>

<style>
</style>
