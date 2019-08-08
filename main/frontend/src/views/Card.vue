<template>
  <div class="about">
    <Navbar />
    <Container1 />
  </div>
</template>
<script>
import Navbar from "../components/homePage/Navbar.vue";
import Container1 from "../components/cardPage/Container1.vue";

export default {
  name: "card",
  data() {
    return {};
  },
  components: {
    Navbar,
    Container1
  }
};
</script>
