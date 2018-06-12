<template>
  <div class="home-slide" id="home-slide-2">
    <div class="left-cont">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Get in shape with Trainerize</h2>
      <p class="animated animation-delay-1 d-none d-sm-block" :class="{'fadeInDown': allowFadeIn}">All-in-one fitness solution for personal training.</p>
      <button @click="goToTrainerize" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}" type="button">
        Explore project
        <img src="./../../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
      </button>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3 home-slide-img" :class="{'fadeInDown': allowFadeIn}" src="./../../../assets/home-page/slide-2-img.png" width="384" height="575" alt="phone image">
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
