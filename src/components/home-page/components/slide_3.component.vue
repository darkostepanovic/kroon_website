<template>
  <div class="home-slide" id="home-slide-3">
    <div class="left-cont">
      <h2 class="animated" :class="{'fadeInDown': allowFadeIn}">Get in shape with Trainerize</h2>
      <p class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac venenatis nunc. Cras mattis dolor magna, ut dignissim est interdum eu. Praesent eget pulvinar nisl, eget gravida nisi.</p>
      <button @click="goToLyt" class="animated animation-delay-2" :class="{'fadeInDown': allowFadeIn}" type="button">Explore project</button>
    </div>
    <div class="right-cont">
      <img class="animated animation-delay-3" :class="{'fadeInDown': allowFadeIn}" src="./../../../assets/home-page/slide-3-img.png" width="567" height="567" alt="phone image">
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
    goToLyt () {
      this.$router.push('/lyt')
    }
  }
}
</script>
