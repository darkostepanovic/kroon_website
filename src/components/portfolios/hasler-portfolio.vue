<template>
  <div id="hasler-portfolio" class="portfolio-wrapper">
    <div v-show="showContent">
      <shared-header class="foo" :portfolio-info="portfolioInfo" />
      <section id="hasler-first-section" class="hasler-grey-bcg">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Transforming .vip file to a nice and readble view</h3>
              <p class="portfolio-section-text">
                We developed a solution that enables Halser's EPR system to export a .vip file (delivery list file), push it to the server, where we performe cron jobs to fetch and read the file, and then feed it into a delivery system web-based admin app.
              </p>
            </div>
            <div class="col-12">
              <img class="foo full-width-lg" src="./../../assets/portfolios/hasler/hasler-1.svg" alt="">
            </div>
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Admin web app</h3>
              <p class="portfolio-section-text">
                Web app gives the ability to easily manage delivery lists, manage orders, assigned lists from one driver to another, as well as to track status of all orders in real-time. The dashboard, showing one column per day is displaying delivery lists, and allows for a clear overview of all tasks in the active week. All delivery lists are assembled automatically by reading the .vip file from the server, and admin can also edit the information manually.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="negative-img-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <img class="foo2 full-width-lg" src="./../../assets/portfolios/hasler/hasler-2.svg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="hasler-second-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Companies (LSPs)</h3>
              <p class="portfolio-section-text">
                This section of the web app holds all information about subcontracting companies and drivers. Admins are able to easily manage both and also view their delivery statistics.
              </p>
            </div>
            <div class="col-12">
              <img class="foo3 full-width-lg" src="./../../assets/portfolios/hasler/hasler-3.svg" alt="">
            </div>
          </div>
          <div class="row align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title lg-margin-top-0">Automation at the heart of the system</h3>
              <p class="portfolio-section-text">
                From initial delivery list assembly inside the ERP software to drivers’ mobile app, entire process is automated. The data import and data assembly process are made of numerous checks and loops, making sure that each delivery list (.vip file) contains the right information. Beside delivery lists, all LSP and driver data imports are also automated. The whole system is built to function self-reliantly.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="foo4" src="./../../assets/portfolios/hasler/hasler-4.jpg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="hasler-third-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <img class="foo5 full-width-lg" src="./../../assets/portfolios/hasler/hasler-5.svg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="hasler-fourth-section">
        <div class="container">
          <div class="row align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title lg-margin-top-0">Order details and order statuses</h3>
              <p class="portfolio-section-text">
                Each delivery list is made of multiple orders that contain order details, and laid out in such a way that it is clear to the driver which deliveries are to be executed for the day. Each order has its status (pending, completed, failed, in progress), and driver can quickly overview all order statuses.
              </p>
              <img class="foo6" src="./../../assets/portfolios/hasler/hasler-6.svg" alt="">
            </div>
            <div class="col-12 col-lg-8">
              <img class="foo7 mt-30-xs-sm-md" src="./../../assets/portfolios/hasler/hasler-7.png" alt="">
            </div>
          </div>
          <div class="row section-item-lg-margin-top">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title lg-margin-top-0">Smart arrival times</h3>
              <p class="portfolio-section-text">
                We have implemented complex mathematical formulas in combination with Google maps estimates that allow for communicating accurate arrival times. Apart from solving simple problems, such as tracking drivers from point A to B, we also needed to cover cases of drivers’ pauses, notifications to buyers prior to arrival based on GPS location, passing by a delivery location and many other.
              </p>
            </div>
            <div class="col-12">
              <img class="foo8 full-width-lg" src="./../../assets/portfolios/hasler/hasler-8.jpg" alt="">
            </div>
          </div>
          <div class="row section-item-lg-margin-top">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title lg-margin-top-0">Buyers view</h3>
              <p class="portfolio-section-text">
                Upon delivery start, buyer receives an SMS containing unique URL, which allows the buyer to track the real-time location of the driver. SMS is triggered each time delivery status is changed to completed, failed, or if delivery is active and driver is 3 minutes away from buyers’ location.
              </p>
            </div>
            <div class="col-10 offset-1">
              <img class="foo9 full-width-lg" src="./../../assets/portfolios/hasler/hasler-9.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <shared-bottom-nav :project-info="{text: 'Get in shape with Trainerize', link: '/trainerize'}" />
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
  </div>
</template>

<script>
import SharedFooter from './../shared-footer/shared-footer.component'
import SharedHeader from './../shared-header/shared-header.component'
import SharedBottomNav from './../shared-bottom-navigation/shared-bottom-navigation.component'
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'hasler-portfolio',
  components: {
    SharedFooter,
    SharedBottomNav,
    SharedHeader
  },
  data () {
    return {
      showContent: false,
      portfolioInfo: {
        title: 'hasler',
        subtitle: 'With more than 300 trucks in their portfolio, Hasler Transports makes the last mile deliveries of appliance goods. They were facing a rather interesting problem of accumulated delay time on deliveries due to frequent failure of the buyers to be present at the agreed address at the agreed delivery time. We have come up with a web and mobile platform solutions to tackle this problem by enabling real-time tracking of drivers’ position and automated arrival notification system for the buyers.',
        location: 'Zurich, Switzerland'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.showContent = true
      this.attachScrollReveal()
    }, 2500)
  },
  // created () {
  //   EventBus.$on('morphEnded', () => {
  //     this.showContent = true
  //     this.attachScrollReveal()
  //   })
  // },
  // beforeDestroy () {
  //   EventBus.$off('morphEnded')
  // },
  methods: {
    attachScrollReveal () {
      window.sr = ScrollReveal({ reset: true })
      sr.reveal('.foo', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.2', reset: false}, 350)
      sr.reveal('.foo2', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.2', reset: false}, 350)
      sr.reveal('.foo3', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo4', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo6', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo5', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo7', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo8', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo9', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo10', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo11', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo12', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      // sr.reveal('.foo13', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
    }
  }
}
</script>
