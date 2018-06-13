<template>
  <div class="home-slide" id="home-slide-1">
    <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Building digital products for people and businesses</h2>
    <h1 class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}">We are Kroon</h1>
    <div class="scroll-for-more">scroll down</div>
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
  }
}
</script>
