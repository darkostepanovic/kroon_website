<template>
  <transition name="modal">
    <div @click="closeModalBackdrop" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div id="close-modal" @click="closeModal"></div>
          <div class="modal-body">
            <svg width="490px" height="581px" viewBox="0 0 490 581" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="133.66887%" y1="-48.1971154%" x2="-34.5552885%" y2="144.906851%" id="linearGradient-contact">
                        <stop stop-color="#4973FF" offset="0%"></stop>
                        <stop stop-color="#FF2E2E" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-710.000000, -84.000000)" fill="url(#linearGradient-contact)">
                        <g transform="translate(714.000000, 86.000000)">
                            <path id="contact-path" d="M-0.5,143.5 C17.1666667,107.5 62.5,94.1666667 135.5,103.5 C208.5,112.833333 277.833333,96 343.5,53 C382.833333,33 421.833333,31.6666667 460.5,49 C499.166667,66.3333333 521.166667,45.5 526.5,-13.5 C385.5,-28.8333333 312.5,-36.8333333 307.5,-37.5 C302.5,-38.1666667 193.833333,-37.8333333 -18.5,-36.5 L-65,122 L-0.5,143.5 Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
            <div v-if="showForm" class="modal-form-content">
              <h2>Hey there,</h2>
              <p>Write us a message below, and we'll get back to you in the next 24h</p>
              <form action="/mail.php" method="POST">
                <input type="text" v-model="name" placeholder="Your name*" name="name" :class="{ 'error-border': errorName }">
                <input type="email" v-model="email" placeholder="Your email*" name="email" :class="{ 'error-border': errorEmail }">
                <textarea rows="2" type="message" v-model="message" placeholder="Your message*" name="message" :class="{ 'error-border': errorMessage }"></textarea>
                <span id="adding-numbers">{{ number1 }} + {{ number2 }} =</span>
                <input type="number" v-model="addingValue" id="adding-value" name="result" :class="{ 'error-border': errorAddingValue }">
                <input type="submit" @click.prevent="submitForm" id="submit-message-btn" value="Send message">
              </form>
              <div class="error-text">
                <span v-if="mandatoryFieldsError">Mandatory fields are not populated.</span>
                <span v-if="invalidEmailError">Invalid email entered.</span>
                <span v-if="wrongAnswerError">Wrong answer entered.</span>
              </div>
            </div>
            <div v-else class="modal-thank-you">
              <h2>Thank you!</h2>
              <p>We got your message and we are looking forward to doing something great together. We'll get back to you in no time. <br><br>Talk to you soon! <br><span>Kroon Studio</span></p>
              <button type="button" class="close-modal-btn">ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '../../event-bus'
import Snap from 'snapsvg'
export default {
  name: 'contact-form',
  data () {
    return {
      showForm: true,
      name: '',
      errorName: false,
      email: '',
      errorEmail: false,
      message: '',
      errorMessage: false,
      number1: Math.floor(Math.random() * 9) + 1,
      number2: Math.floor(Math.random() * 9) + 1,
      addingValue: null,
      errorAddingValue: false,
      mandatoryFieldsError: false,
      invalidEmailError: false,
      wrongAnswerError: false,
      curvePath: null,
      curveThankYouPath: 'M-0.5,681.333333 C17.1666667,645.333333 62.5,632 135.5,641.333333 C208.5,650.666667 277.833333,633.833333 343.5,590.833333 C408.5,588.277778 460.333333,595.666667 499,613 C537.666667,630.333333 547.833333,421.666667 529.5,-13 C391.833333,-12.3333333 320.5,-12.3333333 315.5,-13 C310.5,-13.6666667 191.666667,-13.6666667 -41,-13 L-65,659.833333 L-0.5,681.333333 Z'
    }
  },
  mounted () {
    this.curvePath = Snap.select('#contact-path')
  },
  methods: {
    closeModalBackdrop (e) {
      if (e.target.className === 'modal-wrapper' || e.target.className === 'close-modal-btn')
       this.closeModal()
    },
    closeModal () {
      EventBus.$emit('closeContactForm')
    },
    validate () {
      this.errorName = false
      this.errorEmail = false
      this.errorMessage = false
      this.errorAddingValue = false
      this.mandatoryFieldsError = false
      this.invalidEmailError = false
      this.wrongAnswerError = false
      if (!this.name.length || !this.email.length || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) || !this.message.length || this.addingValue === null || !this.addingValue.length || (this.number1 + this.number2 != this.addingValue)) {
        if (!this.name.length) {
          this.errorName = true
          this.mandatoryFieldsError = true
        }
        if (!this.email.length) {
          this.errorEmail = true
          this.mandatoryFieldsError = true
        } else {
          if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            this.errorEmail = true
            this.invalidEmailError = true
          }
        }
        if (!this.message.length) {
          this.errorMessage = true
          this.mandatoryFieldsError = true
        }
        if (this.addingValue === null || !this.addingValue.length) {
          this.errorAddingValue = true
          this.mandatoryFieldsError = true
        } else {
          if (this.number1 + this.number2 != this.addingValue) {
            this.errorAddingValue = true
            this.wrongAnswerError = true
          }
        }
        return false
      } else {
        return true
      }
    },
    submitForm () {
      if (this.validate()) {
        console.log('submit')
        this.showForm = false
        this.curvePath.animate({ d: this.curveThankYouPath }, 1000, mina.backout)
        const fields = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        fetch('https://mail.kroonstudio.net/', {
          method: 'post',
          body: JSON.stringify(fields)
          // headers: {
          //   'Content-Type': 'text/html'
          // }
        }).then(function(response) {
          console.log(response)
        })
      } else {
        console.log('missing data')
      }
    }
  }
}
</script>
