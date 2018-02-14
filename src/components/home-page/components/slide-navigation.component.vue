<template>
  <div class="slide-navigation-component">
    <div class="slide-nav-btn" :class="{ 'current': slide === 1 }" @click="goToSlide(1)"></div>
    <div class="slide-nav-btn" :class="{ 'current': slide === 2 }" @click="goToSlide(2)"></div>
    <div class="slide-nav-btn" :class="{ 'current': slide === 3 }" @click="goToSlide(3)"></div>
    <div class="slide-nav-btn" :class="{ 'current': slide === 4 }" @click="goToSlide(4)"></div>
    <div class="slide-nav-btn" :class="{ 'current': slide === 5 }" @click="goToSlide(5)"></div>
  </div>
</template>

<script>
export default {
  name: 'slide-navigation',
  props: [
    'slide'
  ],
  methods: {
    goToSlide (slideNum) {
      this.$emit('changeSlide', slideNum)
    }
  }
}
</script>
