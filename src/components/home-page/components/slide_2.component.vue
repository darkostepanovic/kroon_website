<template>
  <div class="home-slide" id="home-slide-2">
    <div class="left-cont">
      <img class="animated" :class="{'fadeInDown': allowFadeIn}" src="../../../assets/images/title-ourwork.svg" alt="our-work">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Making fittness accesisble with Trainerize</h2>
      <p class="animated animation-delay-1 d-none d-sm-block" :class="{'fadeInDown': allowFadeIn}">Mobile, Web, UX, UI, Marketing</p>
      <a @click="goToTrainerize" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}">
        View casestudy
      </a>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3 home-slide-img" :class="{'fadeInDown': allowFadeIn}" :src="images.image1" width="384" height="575" alt="phone image">
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
    goToTrainerize () {
      this.$router.push('/trainerize')
    }
  }
}
</script>
