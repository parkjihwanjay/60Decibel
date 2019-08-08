<template>
  <div class="prof-body1">
    <div class="contents">
      <div class="gender">
        <p class="gender-head">성별</p>
        <p class="gender-body">{{ profile.gender }}</p>
      </div>
      <div class="height">
        <p class="height-head">신장</p>
        <p class="height-body">{{ profile.height }}</p>
      </div>
      <div class="weight">
        <p class="weight-head">체중</p>
        <p class="weight-body">{{profile.weight }}</p>
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
  created() {
    this.$store.dispatch("getProfileInfo");
  }
};
</script>

<style>
</style>
