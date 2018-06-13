<template>
  <footer id="shared-footer-wrapper">
    <div class="open-contact-form-wrapper">
      <h3>Ready to get started?</h3>
      <button @click="showContactForm" class="animated animation-delay-1" type="button">drop us a line</button>
    </div>
    <div class="footer-bottom">
      <div class="row">
        <div class="contact col-12 col-lg-3 offset-lg-2">
          <h4>Contact</h4>
          <div>
            <span class="bold">Mail</span>
            <span>hello@kroonstudio.com</span>
          </div>
        </div>
        <div class="join col-12 col-lg-3">
          <h4>Join Kroon</h4>
          <div>
            <span class="bold">We are hiring</span>
            <span>View open positions</span>
          </div>
        </div>
        <div class="latest col-12 col-lg-4">
          <h4>Latest in magazine</h4>
          <div>
            <span class="bold">Management</span>
            <span>7 Reasons why prioroties are better then daily standups or your team</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { EventBus } from './../../event-bus'
export default {
  name: 'shared-footer',
  methods: {
    showContactForm () {
      EventBus.$emit('showContactForm')
    }
  }
}
</script>
