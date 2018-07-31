<template>
  <div class="home-slide" id="home-slide-5">
    <div id="open-contact-form-wrapper">
      <h3 class="animated" :class="{'fadeInDown': allowFadeIn}">Ready to get started?</h3>
      <button @click="showContactForm" class="animated animation-delay-1" :class="{'fadeInDown': allowFadeIn}" type="button">drop us a line</button>
    </div>
    <div id="footer" class="animated animation-delay-2 d-none d-md-flex" :class="{'fadeInDown': allowFadeIn}">
      <div id="contact-and-join-wrapper">
        <div id="contact">
          <h4>Contact</h4>
          <div>
            <span class="bold">Mail</span>
            <span>contact@kroonstudio.com</span>
          </div>
        </div>
        <div id="join">
          <h4>Join Kroon</h4>
          <div>
            <span class="bold">We are hiring</span>
            <router-link to="/careers"><span>View open positions</span></router-link>
          </div>
        </div>
      </div>
      <div id="latest">
        <h4>Kroon Magazine</h4>
        <div>
          <span class="bold">Coming soon</span>
          <!-- <span>7 Reasons why prioroties are better then daily standups or your team</span> -->
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
