<template>
  <div class="home">
    <Navbar />
    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Container1 from "../components/homePage/Container1.vue";
import Container2 from "../components/homePage/Container2.vue";
import Container3 from "../components/homePage/Container3.vue";
import Container4 from "../components/homePage/Container4.vue";
import Navbar from "../components/homePage/Navbar.vue";
import Footer from "../components/homePage/Footer.vue";
import { store } from "../store.js";
import { mapState, mapActions } from "vuex";
export default {
  name: "home",

  components: {
    Container1,
    Container2,
    Container3,
    Container4,
    Navbar,
    Footer
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["getMemberInfo", "logout"])
  }
};
</script>
<style scoped>
/* .survey-btn {
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
} */
</style>

