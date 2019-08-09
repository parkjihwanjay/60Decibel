<template></template>


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
