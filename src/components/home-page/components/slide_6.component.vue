<template>
  <div class="home-slide" id="home-slide-5">
    <div class="button-wrapper">
      <button>+</button>
      <p>See More Work</p>
    </div>
    <div :class="show ? 'show' : ''" class="content-wrapper">
      <div class="content-wrapper-text">
        <h3 class="animated animation-delay-3 fadeInDown">Or you’re ready to get started?</h3>
        <a style="display: block" class="animated animation-delay-3 fadeInDown" href="#">Contact us</a>
      </div>
      <div class="content-wrapper-image">
        <div class="animated fadeInDown content-wrapper__image-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../../../event-bus";
export default {
  data() {
    return {
      allowFadeIn: false,
      show: false
    };
  },
  created() {
    this.allowFadeIn = true;
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 200);
  },
  methods: {}
};
</script>
