<template>
  <div class="main-menu-component">
    <div class="container">
      <!-- <img src="./../../../assets/main-menu/blob.png" class="d-none d-md-block col-2" id="c7-menu-blob">
      <img src="./../../../assets/main-menu/blob2.png" class="d-md-none" id="c7-menu-blob2"> -->
      <div class="row flex-md-row-reverse">
        <div class="col-12 col-md-7 offset-md-1 main-links-wrapper">
          <ul>
            <li @click="goTo('/')">Home</li>
            <li @click="goTo('/about')">People</li>
            <li @click="goTo('/our-work')">Our work</li>
            <li>Careers</li>
            <li @click="showContactForm">Contact Us</li>
          </ul>
        </div>
        <div class="col-9 offset-md-1 col-md-3 location-social-wrapper">
          <!-- <div class="locations-wrapper">
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
          </div> -->
          <ul class="social-links">
            <!-- <li><a href="#" target="_blank">Facebook</a></li> -->
            <li><a href="https://www.linkedin.com/company/kroon-studio/" target="_blank">LinkedIn</a></li>
            <li><a href="https://dribbble.com/kroonstudio" target="_blank">Dribble</a></li>
            <li><a href="https://www.behance.net/kroonstudio" target="_blank">Behance</a></li>
            <li><a href="https://www.instagram.com/kroonstudio/" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { EventBus } from '../../../event-bus'
export default {
  methods: {
    goTo (route) {
      this.$router.push(route)
      this.$emit('close-menu')
    },
    showContactForm () {
      EventBus.$emit('showContactForm')
    }
  }
}
</script>
