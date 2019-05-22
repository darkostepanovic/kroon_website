<template>
  <div class="home-slide" id="home-slide-3">
    <div class="left-cont">
      <img class="animated" :class="{'fadeInDown': allowFadeIn}" src="../../../assets/images/title-ourwork.svg" alt="our-work">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Connect everything using Nymea</h2>
      <p class="animated animation-delay-1 d-none d-sm-block" :class="{'fadeInDown': allowFadeIn}">User-facing OS for an IoT device.</p>
      <a @click="goToGuh" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}">
        View casestudy
      </a>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3 home-slide-img" :class="{'fadeInDown': allowFadeIn}" :src="images.image2" width="567" height="567" alt="phone image">
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
    goToGuh () {
      this.$router.push('/nymea')
    }
  }
}
</script>
