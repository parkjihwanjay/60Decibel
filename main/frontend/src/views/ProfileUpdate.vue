<template>

  <div class="profile">
    <navbar class="nav" />
    <ProfUpload class="body" />
  </div>
</template>
<script>
import Navbar from "../components/homePage/Navbar.vue";
import ProfUpload from "../components/profileUploadPage/Container.vue";

export default {
  components: {
    Navbar,
    ProfUpload
  }
};
</script>
<style scoped>
/* nav */

/* .nav /deep/ .navhead {
  padding: 0 1rem;
  padding-top: 1rem;
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
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.6rem;
}
.nav /deep/ .navhead-start {
  display: none;
} */

/* layout */
/* .profile {
  background: linear-gradient(-45deg, #ea5455, #feb692);
} */
.body1 {
  background-color: white;
  border-bottom: 1px solid rgb(158, 158, 158);
  width: 100%;
  height: 10rem;
}
.body2 {
  background-color: #ebebeb;
  width: 100%;
  height: 14rem;
}
.body3 {
  background: white;
  width: 100%;
  height: 14rem;
}
</style>

