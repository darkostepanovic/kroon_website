<template>
  <div id="about-page-wrapper">
    <section id="about-header-section">
      <div class="container">
        <div class="row flex-md-row-reverse">
          <div class="col-12 col-md-8 full-img-wrapper">
            <img src="./../../assets/about-page/header-about-page.svg" alt="">
          </div>
          <div class="col-12 col-md-4">
            <h2 class="main-title">We are your full stack design & development agency!</h2>
            <p class="main-text">
              Kroon Studio is a team with more than 7 years of experince bulding web and
              mobile products in wide viraity of tehcnology stacks and with more than 60
              projects in our portfolio. Over the years we had the pleasure to work with
              companies from all over the world, both big and small, creating B2B and B2C
              software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about-clients-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="main-title">They trust us & vice-versa</h2>
            <img src="./../../assets/about-page/about-clients-logos.jpg" alt="">
          </div>
          <div class="col-12 col-md-6 offset-md-3">
            <div v-for="(item, index) in testimonials" :key="item.id" :class="{ 'fadeIn show': index === currentTestimonialIndex }" class="testimonial-wrapper animated">
              <div class="text">{{ item.text }}</div>
              <div class="client-name">{{ item.name }}</div>
            </div>
            <div class="next-testimonial" @click="handleClickNextTestimonial">
              <img src="./../../assets/about-page/next-arrow.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about-images-section">
      <div class="img-row">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
      </div>
      <div class="img-row">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
        <img src="http://eemcnow.net/wp-content/uploads/different-shades-grey-color-palette_2962.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
import { testimonials } from './../../helpers/index'
export default {
  name: 'about',
  data () {
    return {
      testimonials: testimonials,
      currentTestimonialIndex: 0
    }
  },
  methods: {
    nextTestimonial () {
      if (this.currentTestimonialIndex === this.testimonials.length - 1) {
        this.currentTestimonialIndex = 0
      } else {
        this.currentTestimonialIndex++
      }
    },
    handleClickNextTestimonial () {
      this.nextTestimonial()
      clearInterval(this.autoChangeTestimonial)
      this.autoChangeTestimonial = setInterval(this.nextTestimonial, 5000)
    }
  },
  mounted () {
    this.autoChangeTestimonial = setInterval(this.nextTestimonial, 5000)
  }
}
</script>
