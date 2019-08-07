<template>
  <div class="home">
    <Navbar />
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
    <div class="survey-btn" v-if="visible===true" @scroll="handleScroll">
      <div class="show-on-scroll">선택지입니다</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Container1 from "../components/homePage/Container1.vue";
import Container2 from "../components/homePage/Container2.vue";
import Container3 from "../components/homePage/Container3.vue";
import Container4 from "../components/homePage/Container4.vue";
import Navbar from "../components/homePage/Navbar.vue";

import debounce from "lodash/debounce";

export default {
  name: "home",
  data() {
    return {
      visible: true
    };
  },
  components: {
    Container1,
    Container2,
    Container3,
    Container4,
    Navbar
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      this.isUserScrolling = window.scrollY > 0;
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
      }, 3000);
      console.log("calling handleScroll");
    }
  },

  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 50);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeDestroy() {
    // I switched the example from `destroyed` to `beforeDestroy`
    // to exercise your mind a bit. This lifecycle method works too.
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  }
};
</script>
<style scoped>
.survey-btn {
  display: flex;
  justify-content: center;
}
.show-on-scroll {
  text-align: center;
  width: 90%;
  height: 50px;
  background-color: rgb(181, 141, 218);
  border-radius: 10px;
  position: fixed;
  bottom: 0;
}
</style>

