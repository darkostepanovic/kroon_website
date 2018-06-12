<template>
  <div class="main-menu-component">
    <div class="container">
      <!-- <img src="./../../../assets/main-menu/blob.png" class="d-none d-md-block col-2" id="c7-menu-blob">
      <img src="./../../../assets/main-menu/blob2.png" class="d-md-none" id="c7-menu-blob2"> -->
      <div class="row flex-md-row-reverse">
        <div class="col-12 col-md-7 offset-md-1 main-links-wrapper">
          <ul>
            <li @click="homePage">Home</li>
            <li @click="aboutPage">People</li>
            <li @click="ourWorkPage">Our work</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="col-9 offset-md-1 col-md-3 location-social-wrapper">
          <div class="locations-wrapper">
            <div class="location-item">
              <div class="country">Switzerland</div>
              <div class="address">Brauerstrasse 11,</div>
              <div class="address">88088 Zurich</div>
            </div>
            <div class="location-item">
              <div class="country">Switzerland</div>
              <div class="address">Brauerstrasse 11,</div>
              <div class="address">88088 Zurich</div>
            </div>
          </div>
          <ul class="social-links">
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">Dribble</a></li>
            <li><a href="#" target="_blank">Behance</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      aboutPage () {
        this.$router.push('/about')
        this.$emit('close-menu')
      },
      homePage () {
        this.$router.push('/')
        this.$emit('close-menu')
      },
      ourWorkPage () {
        this.$router.push('/our-work')
        this.$emit('close-menu')
      }
    }
  }
</script>
