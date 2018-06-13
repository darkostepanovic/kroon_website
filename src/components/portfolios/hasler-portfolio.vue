<template>
  <div id="hasler-portfolio" class="portfolio-wrapper">
    <div v-show="showContent">
      <section class="portfolio-top-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-10 offset-lg-1 text-center foo">
              <h1 class="portfolio-main-title">hasler transport</h1>
              <p class="portfolio-main-subtitle">
                With more than 300 trucks in their portfolio, Hasler Transports makes the last mile deliveries of appliance goods.
                They were facing a rather interesting problem of accumulated delay time on deliveries due to often failure of the
                buyers to be present at the agreed address at the agreed delivery time. We have come up with a web and mobile platform
                solutions to tackle this problem by enabling real-time tracking of drivers position and automated arrival notification
                system for the buyers.
              </p>
              <p class="portfolio-main-location-text">Vancouver, Canada</p>
            </div>
          </div>
        </div>
      </section>
      <section id="hasler-first-section" class="hasler-grey-bcg">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Transforming .vip file to a nice and readble view.</h3>
              <p class="portfolio-section-text text-grey-9c">
                We developed a solution that enables Halser's EPR system to export a .vip file (delivery list file), push it to the server,
                where we performed cron jobs to fetch and read the file and then feeding it into a delivery system web based admin application we developed.
              </p>
            </div>
            <div class="col-12">
              <img class="foo full-width-lg" src="./../../assets/portfolios/hasler/hasler-1.svg" alt="">
            </div>
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Admin web app.</h3>
              <p class="portfolio-section-text text-grey-9c">
                Web app gives the ability to easily manage delivery lists, manage orders, assigned lists from one driver to another as well as track status of all orders in real-time.
                The dashboard, made of days column holding delivery lists, allow for a clear overview of all tasks in the active week. All delivery lists are assembled automatically by
                reading the .vip file from the server, but also possess the ability of manual information editing by the admin.
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
              <h3 class="portfolio-section-title">Admin web app.</h3>
              <p class="portfolio-section-text text-grey-9c">
                Web app gives the ability to easily manage delivery lists, manage orders, assigned lists from one driver to another as well as track status of all orders in real-time.
                The dashboard, made of days column holding delivery lists, allow for a clear overview of all tasks in the active week. All delivery lists are assembled automatically by
                reading the .vip file from the server, but also possess the ability of manual information editing by the admin.
              </p>
            </div>
            <div class="col-12">
              <img class="foo3 full-width-lg" src="./../../assets/portfolios/hasler/hasler-3.svg" alt="">
            </div>
          </div>
          <div class="row align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title lg-margin-top-0">Automation at the heart of the system</h3>
              <p class="portfolio-section-text text-grey-9c">
                From initial delivery list assembly inside the ERP software to driver mobile app, complete process is automated.
                The data import and data assembly process are made of numerous checks and loops making sure that each delivery list
                (.vip file) contains the right information. Beside delivery lists, all LSP and driver data import is also automated.
                The complete system is built to function autonomously.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="foo4" src="./../../assets/portfolios/hasler/hasler-4.jpg" alt="">
            </div>
          </div>
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
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'hasler-portfolio',
  components: {
    SharedFooter
  },
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
      sr.reveal('.foo10', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo11', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo12', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo13', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
    }
  }
}
</script>
