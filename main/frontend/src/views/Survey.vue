<template>
  <div class="whole-survey">
    <NavBar class="nav" />
    <main>
      <transition :name="sectionSlider" v-on:before-enter="debug" v-on:before-leave="debug">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/homePage/Navbar.vue";
export default {
  name: "wholeSurvey",
  data() {
    return {
      sectionSlider: ""
    };
  },
  watch: {
    $route(to, from) {
      this.sectionSlider = to.meta.page > from.meta.page ? "next" : "prev";
    }
  },
  methods: {
    debug() {
      //debugger
    }
  },
  components: {
    NavBar: NavBar
  }
};

// components: {
//   scroll
// }
</script>
<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}
.whole-survey {
  height: 80vh;
}
.nav /deep/ .start-btn {
  visibility: hidden;
}

main {
  min-height: 100%;
  display: grid;
  grid-template: "main";
  flex: 1;
  background-color: white;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
}

main > * {
  grid-area: main; /* Transition: make sections overlap on same cell */
  background-color: rgb(255, 255, 255);
  position: relative;
}

main > :first-child {
  z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
}

/* Transitions */

.next-leave-to {
  animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

.next-enter-to {
  animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-leave-to {
  animation: leaveToRight 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-enter-to {
  animation: enterFromLeft 700ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
    filter: brightness(0.9);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-25%);
    filter: brightness(0.9);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
