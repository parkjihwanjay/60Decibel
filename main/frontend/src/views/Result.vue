<template>
  <div class="resultresult">
    <navbar class="nav" />
    <div class="box">
      <Navbar />
      <div class="page" id="pt-main">
        <name />
      </div>
      <div class="page" id="pt-page">
        <symptoms />
        <sickness />
        <history />
      </div>
    </div>
  </div>
</template>
<script>
import name from "../components/resultsPage/name.vue";
import history from "../components/resultsPage/history.vue";
import sickness from "../components/resultsPage/sickness.vue";
import symptoms from "../components/resultsPage/symptoms.vue";
import Navbar from "../components/homePage/Navbar.vue";

export default {
  name: "result",
  data() {
    return {};
  },
  components: {
    name,
    symptoms,
    sickness,
    history,
    Navbar
  }
};
</script>
<style scoped>
.nav /deep/ .navhead {
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
}
.resultresult {
  background: linear-gradient(-45deg, #ea5455, #feb692);
}
.box {
  width: 90%;
  margin: 1rem auto;
  border-radius: 10px;
  /* border: 0.5px solid gray; */
  background-color: rgb(255, 255, 255, 0.9);
}
/*
.resultresult {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to top,
    #4fb576 0%,
    #44c489 30%,
    #28a9ae 46%,
    #28a2b7 59%,
    #4c7788 71%,
    #6c4f63 86%,
    #432c39 100%
  );
  padding: 3rem 0;
}
.box {
  width: 80%;
  overflow: auto;
}

p {
  margin-top: 5px;
  margin-bottom: 5px;
  font-family: "NanumSquare";
  word-break: keep-all;
}

/*.page {
  padding: 3rem 0;
  height: 500px;
}

.page:nth-child(3n + 1) {
  background-color: whitesmoke;
}

.page:nth-child(3n + 2) {
  background-color: whitesmoke;
}

.page:nth-child(3n) {
  background-color: whitesmoke;
}

.page {
  height: 600px;
  background-color: whitesmoke;
  margin-bottom: 100px;
  padding: 20px;
}

.page:nth-child(3n + 1) {
  background-color: whitesmoke;
}

.page:nth-child(3n + 2) {
  background-color: whitesmoke;
}

.page:nth-child(3n) {
  background-color: whitesmoke;
}

* {
  font-family: "NanumSquare", sans-serif;
}

.button {
  width: 190px;
  height: 80x;
  z-index: 1;
  display: block;
  margin: 0 auto;
}

.pt-main {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  transform-style: preserve-3d;
}

.pt-page {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.pt-page-current,
.no-js .pt-page {
  visibility: visible;
}

.no-js body {
  overflow: auto;
}

.pt-page-ontop {
  z-index: 999;
}
*/
</style>
