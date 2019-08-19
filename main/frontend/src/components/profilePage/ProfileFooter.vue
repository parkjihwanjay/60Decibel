<template>
  <router-link :to="{ name: 'survey-history' }">설문 이력 확인하기</router-link>
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
<style>
</style>
