<template>
  <div id="trainerize-portfolio" class="portfolio-wrapper">
    <div v-show="showContent">
      <section class="portfolio-top-section">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="portfolio-main-title">trainerize</h1>
              <p class="portfolio-main-subtitle">
                Serving more than 17k personal trainers and total of 250k users,
                Trainerize is-in-one fitness solutions featuring an amazing set of
                functionalities to cover all of the needs for personal training.
                Development of this incredible software was a collaboration between
                our and the founding team based in Vancouver, Canada.
              </p>
              <p class="portfolio-main-location-text">Vancouver, Canada</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h2 class="col-12 portfolio-section-main-title text-center">Dashboard overview</h2>
          <div class="col-12">
            <h3 class="portfolio-section-title">Widget system</h3>
            <p class="portfolio-section-text">
              The dashboard widgets offer trainers an overview of all major components of their business needs.
              It is an easy way to understand who are clients that need attention, scheduled activities,
              clients' notifications, business growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script type="text/babel">
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'trainerize-portfolio',
  data () {
    return {
      showContent: false
    }
  },
  created () {
    EventBus.$on('morphEnded', () => {
      this.showContent = true
      this.attachScrollReveal()
    })
  },
  beforeDestroy () {
    EventBus.$off('morphEnded')
  },
  methods: {
    attachScrollReveal () {
      // window.sr = ScrollReveal({ reset: true })
      // sr.reveal('.foo', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.2', reset: false}, 350)
      // sr.reveal('.foo2', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.2', reset: false}, 350)
      // sr.reveal('.foo3', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      // sr.reveal('.foo4', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo6', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      // sr.reveal('.foo5', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo7', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      // sr.reveal('.foo8', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      // sr.reveal('.foo9', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo10', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo11', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo12', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo13', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
    }
  }
}
</script>
