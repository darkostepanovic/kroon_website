<template>
  <div class="home-slide" id="home-slide-1">
    <img src="../../../assets/images/title-kroon.svg" alt="title-kroon">
    <h1 class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}">Value-centric software development</h1>
    <p>Our work is carefully crafted combinnation of value centric thinking, stratigic planning and top quality execution.</p>
    <a href="#">Contact us</a>
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
