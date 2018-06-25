<template>
  <div id="about-page-wrapper" ref="aboutPage">
    <section id="about-header-section">
      <div class="container">
        <div class="row flex-lg-row-reverse">
          <div class="col-12 col-lg-8 full-img-wrapper">
            <img src="./../../assets/about-page/header-about-page.svg" alt="">
          </div>
          <div class="col-12 col-lg-4">
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
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo1.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo2.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo3.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo4.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo5.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo6.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo7.jpg" alt="">
          </div>
          <div class="col-6 col-sm-3">
            <img src="./../../assets/about-page/logos/lo8.jpg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3">
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
        <team-member-thumb v-for="(member, index) in teamMembers" :member="member" :key="index" />
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <shared-footer />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { testimonials } from './../../helpers/index'
import TeamMemberThumb from './components/team-member-thumb.component'
import SharedFooter from './../shared-footer/shared-footer.component'
import Dusan from './../../assets/about-page/team/dusan.jpg'
export default {
  name: 'about',
  components: {
    TeamMemberThumb,
    SharedFooter
  },
  data () {
    return {
      testimonials: testimonials,
      currentTestimonialIndex: 0,
      teamMembers: [
        {
          name: 'Braca',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Dusan',
          position: 'Backend dev',
          imgUrl: Dusan
        },
        {
          name: 'Ognjen',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Milica',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Hristos',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Jelena',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Darko',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Jovana',
          position: 'Fronend dev',
          imgUrl: Dusan
        },
        {
          name: 'Peca',
          position: 'Fronend dev',
          imgUrl: Dusan
        }
      ]
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
    window.scrollTo(0, 0)
  }
}
</script>
