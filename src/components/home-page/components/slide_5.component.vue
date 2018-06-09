<template>
  <div class="home-slide" id="home-slide-5">
    <div id="open-contact-form-wrapper">
      <h3 class="animated" :class="{'fadeInDown': allowFadeIn}">Ready to get started in a project?</h3>
      <button @click="showContactForm" class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}" type="button">get in touch now</button>
    </div>
    <div id="footer" class="animated animation-delay-2 d-none d-md-flex" :class="{'fadeInDown': allowFadeIn}">
      <div id="contact-and-join-wrapper">
        <div id="contact">
          <h4>Contact</h4>
          <div>
            <span class="bold">Mail</span>
            <span>contact@concept7.io</span>
          </div>
          <div>
            <span class="bold">Phone</span>
            <span>+381 60 1 563 563</span>
            <span>+42 34 3334 445</span>
          </div>
        </div>
        <div id="join">
          <h4>Join concept7</h4>
          <div>
            <span class="bold">We are hiring</span>
            <span>View open positions</span>
          </div>
        </div>
      </div>
      <div id="latest">
        <h4>Latest in magazine</h4>
        <div>
          <span class="bold">Management</span>
          <span>7 Reasons why prioroties are better then daily standups or your team</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../../event-bus'
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
    showContactForm () {
      EventBus.$emit('showContactForm')
    }
  }
}
</script>
