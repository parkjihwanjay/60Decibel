<template>
  <div class="profile">
    <navbar class="nav" />
    <prof-header class="header" />
    <porf-body1 class="body1" />
    <porf-body2 class="body2" />
    <porf-body3 class="body3" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "../components/homePage/Navbar.vue";
import ProfHeader from "../components/profilePage/ProfileHeader.vue";
import PorfBody1 from "../components/profilePage/ProfileBody.vue";
import PorfBody2 from "../components/profilePage/ProfileBody2.vue";
import PorfBody3 from "../components/profilePage/ProfileBody3.vue";

export default {
  computed: {
    ...mapState(["profile"])
  },
  created() {
    const userId = this.$route.params.user;
    this.$store.dispatch("getProfileInfo", userId);
  },
  components: {
    Navbar,
    ProfHeader,
    PorfBody1,
    PorfBody2,
    PorfBody3
  }
};
</script>
<style scoped>
/* nav */

.nav /deep/ .navhead {
  border-bottom: none;
}
.nav /deep/ .navhead-icon:hover {
  background-color: transparent;
}
.nav /deep/ .fa-bars {
  color: rgb(255, 255, 255);
}
.nav /deep/ .navhead-brand-logo {
  content: url("../assets/home.png");
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 0.6rem;
}

/* layout */

.header {
  height: 28rem;
  background-color: darkcyan;
}
.body1 {
  background-color: darkgoldenrod;
}
.body2 {
  background-color: darkolivegreen;
}
.body3 {
  background-color: darkgrey;
}
</style>

