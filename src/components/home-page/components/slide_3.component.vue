<template>
  <div class="home-slide" id="home-slide-3">
    <div class="left-cont">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Connect everything using Nymea</h2>
      <p class="animated animation-delay-1 d-none d-sm-block" :class="{'fadeInDown': allowFadeIn}">User-facing OS for an IoT device.</p>
      <button @click="goToGuh" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}" type="button">
        Explore project
        <img src="./../../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
      </button>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3 home-slide-img" :class="{'fadeInDown': allowFadeIn}" src="./../../../assets/home-page/slide-3-img.png" width="567" height="567" alt="phone image">
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
  created () {
    this.allowFadeIn = true
  },
  methods: {
    goToGuh () {
      this.$router.push('/guh')
    }
  }
}
</script>
