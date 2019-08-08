<template>
  <div class="about">
    <Navbar />
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
  </div>
</template>
<script>
import Navbar from "../components/homePage/Navbar.vue";
import Container1 from "../components/aboutPage/Container1.vue";
import Container2 from "../components/aboutPage/Container2.vue";
import Container3 from "../components/aboutPage/Container3.vue";
import Container4 from "../components/aboutPage/Container4.vue";

export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    Navbar,
    Container1,
    Container2,
    Container3,
    Container4
  }
};
</script>