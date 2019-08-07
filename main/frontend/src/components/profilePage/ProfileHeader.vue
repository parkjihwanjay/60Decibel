<template>
  <div class="prof-header">
    <ul>
      <img v-if="`${profile.avatar}===null`" src="../../assets/60db.png" class="profile-img" />
      <img v-else v-bind:src="`${profile.avatar}`" />
      <li>이름 : {{ profile.name }}</li>
      <li v-if="`${ profile.job }`">직업 : {{ profile.job }}</li>
      <li>생년월일 : {{ profile.birth_date }}</li>
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
<style scoped>
.profile-img {
  width: 100px;
  height: 50px;
}
</style>
