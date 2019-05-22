<template>
  <div class="home-slide" id="home-slide-4">
    <div class="left-cont">
      <img class="animated" :class="{'fadeInDown': allowFadeIn}" src="../../../assets/images/title-ourwork.svg" alt="our-work">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Control festival lighting with Lyt</h2>
      <p class="animated animation-delay-1 d-none d-sm-block" :class="{'fadeInDown': allowFadeIn}">Mobile and desktop app that brings a twist to festival lights control.</p>
      <a @click="goToLyt" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}">
        View casestudy
      </a>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3 home-slide-img" :class="{'fadeInDown': allowFadeIn}" :src="images.image3" width="599" height="490" alt="phone image">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      allowFadeIn: false
    }
  },
  props: ['images'],
  created () {
    this.allowFadeIn = true
  },
  methods: {
    goToLyt () {
      this.$router.push('/lyt')
    }
  }
}
</script>
