<template>
  <div class="prof-social">
    <ul>
      <li v-if="`${profile.drinking}`">매주 {{ profile.drinking_per_week }}병의 술을 마십니다.</li>
      <li
        v-if="`${profile.smoking}`"
      >담배를 {{ profile.how_long_smoking }}년 동안 {{ profile.how_long_smoking }}갑씩 피우고 있습니다.</li>

      <li v-if="`${profile.relevant_data}`">기타 특이사항 : {{ profile.relevant_data }}</li>
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
