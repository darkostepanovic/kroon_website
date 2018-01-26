<template>
  <div class="home-slide" id="home-slide-1">
    <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">We build digital prodcuts alagning design, technology & bussines.</h2>
    <h1 class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}">We are Concept7.</h1>
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
