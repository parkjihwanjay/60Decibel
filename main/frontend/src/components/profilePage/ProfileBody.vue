<template>
  <div class="prof-body1">
    <ul>
      <li>성별 : {{ profile.gender }}</li>
      <li>신장 : {{ profile.height }}</li>
      <li>체중 : {{ profile.weight }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
  }
};
</script>

<style>
</style>
