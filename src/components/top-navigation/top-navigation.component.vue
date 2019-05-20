<template>
  <div>
    <div class="top-navigation-component">
      <router-link id="top-nav-home-btn" to="/">
        <div class="logo-wrapper">
          <!-- <div class="logo-part left"></div>
          <div class="logo-part middle"></div>
          <div class="logo-part right"></div> -->
          <img
            v-if="!whiteLogo"
            src="../../assets/images/LogoBlack.svg"
            alt="logo"
          />
          <img v-else src="../../assets/images/logoWhite.svg" alt="logo" />
        </div>
      </router-link>
      <!-- <svg @click="toggleMenu" width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs></defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1825, -10)" fill="#000000">
                  <path id="menu-btn-path" d="M1864,36 C1862.34315,36 1861,34.6568542 1861,33 C1861,31.3431458 1862.34315,30 1864,30 C1865.65685,30 1867,31.3431458 1867,33 C1867,34.6568542 1865.65685,36 1864,36 Z M1874,36 C1872.34315,36 1871,34.6568542 1871,33 C1871,31.3431458 1872.34315,30 1874,30 C1875.65685,30 1877,31.3431458 1877,33 C1877,34.6568542 1875.65685,36 1874,36 Z M1884,36 C1882.34315,36 1881,34.6568542 1881,33 C1881,31.3431458 1882.34315,30 1884,30 C1885.65685,30 1887,31.3431458 1887,33 C1887,34.6568542 1885.65685,36 1884,36 Z M1864,46 C1862.34315,46 1861,44.6568542 1861,43 C1861,41.3431458 1862.34315,40 1864,40 C1865.65685,40 1867,41.3431458 1867,43 C1867,44.6568542 1865.65685,46 1864,46 Z M1874,46 C1872.34315,46 1871,44.6568542 1871,43 C1871,41.3431458 1872.34315,40 1874,40 C1875.65685,40 1877,41.3431458 1877,43 C1877,44.6568542 1875.65685,46 1874,46 Z M1884,46 C1882.34315,46 1881,44.6568542 1881,43 C1881,41.3431458 1882.34315,40 1884,40 C1885.65685,40 1887,41.3431458 1887,43 C1887,44.6568542 1885.65685,46 1884,46 Z M1864,56 C1862.34315,56 1861,54.6568542 1861,53 C1861,51.3431458 1862.34315,50 1864,50 C1865.65685,50 1867,51.3431458 1867,53 C1867,54.6568542 1865.65685,56 1864,56 Z M1874,56 C1872.34315,56 1871,54.6568542 1871,53 C1871,51.3431458 1872.34315,50 1874,50 C1875.65685,50 1877,51.3431458 1877,53 C1877,54.6568542 1875.65685,56 1874,56 Z M1884,56 C1882.34315,56 1881,54.6568542 1881,53 C1881,51.3431458 1882.34315,50 1884,50 C1885.65685,50 1887,51.3431458 1887,53 C1887,54.6568542 1885.65685,56 1884,56 Z"></path>
              </g>
          </g>
      </svg> -->
      <div
        @click="toggleMenu"
        class="toggle-menu-btn"
        :class="{ 'menu-opened': menuOpened, white: whiteLogo }"
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
        <!--<div class="dot"></div>-->
      </div>
    </div>
    <transition name="fade">
      <main-menu @close-menu="closeMenu" v-show="menuOpened" />
    </transition>
  </div>
</template>

<script>
// import Snap from 'snapsvg'
import MainMenu from "./components/main-menu.component";
import { EventBus } from "../../event-bus";
export default {
  name: "top-navigation",
  components: {
    "main-menu": MainMenu
  },
  data() {
    return {
      menuOpened: false,
      whiteLogo: false
    };
  },
  mounted() {
    EventBus.$on("slideChanged", data => {
      this.whiteLogo =
        data.currentSlide === 5 &&
        document.querySelector("#app").offsetTop < window.innerHeight &&
        !this.menuOpened;
    });
    document
      .querySelector("#app")
      .addEventListener("scroll", this.handlePageScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
      this.whiteLogo = !this.menuOpened;
      EventBus.$emit("menuOpened", this.menuOpened);
    },
    closeMenu() {
      this.menuOpened = false;
      EventBus.$emit("menuOpened", this.menuOpened);
    },
    handlePageScroll() {
      if (!document.querySelector("#app")) {
        return;
      }
      this.whiteLogo =
        document.querySelector("#app").scrollTop < window.innerHeight - 100 &&
        !this.menuOpened;
    }
  }
};
</script>
