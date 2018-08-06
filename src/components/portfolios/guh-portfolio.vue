<template>
  <div id="guh-portfolio" class="portfolio-wrapper">
    <div v-show="showContent">
      <shared-header class="foo" :portfolio-info="portfolioInfo" />
      <section id="guh-first-section">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Complex, yet intuitive UX to Connect everything</h3>
              <p class="portfolio-section-text">
                By combining technology and user experince rules and learnings, we were able to bring down the comlexity of an operating system to a level of an averege web portal.
              </p>
            </div>
            <div class="col-12 text-center img-wrapper foo2">
              <img class="d-none d-sm-block" src="./../../assets/portfolios/guh/guh-usage.svg"/>
              <img class="d-block d-sm-none" src="./../../assets/portfolios/guh/guh-usage-mobile.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section id="guh-second-section">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title margin-lg-0">Dashboard as an overview of the system</h3>
              <p class="portfolio-section-text">
                Utilizing the dashboard view, packed with data widgets, we are able to show an overview of users' IoT activity at glance. Dashboard shows user development, devices overview, income and data usage.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="dashboard-above foo3" src="./../../assets/portfolios/guh/guh-dashboard.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section id="guh-third-section">
        <div class="container">
          <div class="row section-item-lg-margin-top">
            <div class="col-12 text-center img-wrapper foo4">
              <img class="d-none d-sm-block" src="./../../assets/portfolios/guh/guh-parts.svg"/>
              <img class="d-block d-sm-none" src="./../../assets/portfolios/guh/guh-parts-mobile.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section id="guh-fourth-section">
        <div class="container">
          <div class="row align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title margin-lg-0">Marketplace - discovering what your devices can do</h3>
              <p class="portfolio-section-text">
                Marketplace of Nymea offers pluging for hundreds of devices and services (made by 3rd party developers or manufacturers) that are extending usage possibilities to an unimaginable level. This allows for Nymea's clients to offer amazing services to their customers, and is opening a whole new spectrum of possibilities.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="marketplace-above foo5" src="./../../assets/portfolios/guh/guh-marketplace-above.svg"/>
            </div>
          </div>
          <div class="row flex-lg-row-reverse align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4 z-index-1">
              <h3 class="portfolio-section-title margin-lg-0">Adding a service - easy as online shopping</h3>
              <p class="portfolio-section-text">
                As it was an imperative to build Nymea in a such way that a complex IoT service can be accessed, understood and used by an average internet user, same rule eas applied to process of installing a new service. All it takas is a simple click of a button - and a credit card number. :)
              </p>
            </div>
            <div class="col-12 col-lg-8 text-center full-img-wrapper lg-justify-flex-end">
              <img class="foo6" src="./../../assets/portfolios/guh/guh-product-above.svg" alt="">
            </div>
          </div>
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title margin-lg-0">Freedom to customize services to your user's needs</h3>
              <p class="portfolio-section-text">
                We built Nymea with flexibility and in such a way that it can be accommodated to various business needs. Nymea OS offers the ability to customize connected services and offer them to end users as bundles, available through monthly subscriptions.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="foo7 vw60" src="./../../assets/portfolios/guh/guh-bundles.svg"/>
            </div>
          </div>
          <div class="row flex-lg-row-reverse align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4 z-index-1">
              <h3 class="portfolio-section-title margin-lg-0">Understand user base</h3>
              <p class="portfolio-section-text">
                Under the "Users" tab, one is able to browse and have a closer look at each of the users utilizing available services and products. Additionally, this view allows us to see if the connected devices and services are operating as expected, and also understand each users' subscription model.
              </p>
            </div>
            <div class="col-12 col-lg-8 text-center full-img-wrapper lg-justify-flex-end">
              <img class="foo8 vw60" src="./../../assets/portfolios/guh/guh-users-below.svg" alt="">
            </div>
          </div>
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title margin-lg-0">Telemetry - devices now speak your languages</h3>
              <p class="portfolio-section-text">
                Nymea makes it possible not only to use plugins found in the marketplace, but also to program your own devices, solely by using simple and visual IF statements. Sorry, that is about as much as we can disclose about this functionality. :)
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="foo7" src="./../../assets/portfolios/guh/guh-tele-below.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <shared-bottom-nav :project-info="{text: 'Control festival lightning with Lyt', link: '/lyt'}" />
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

<script type="text/babel">
import SharedBottomNav from './../shared-bottom-navigation/shared-bottom-navigation.component'
import SharedFooter from './../shared-footer/shared-footer.component'
import SharedHeader from './../shared-header/shared-header.component'
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'guh-portfolio',
  components: {
    SharedFooter,
    SharedBottomNav,
    SharedHeader
  },
  data () {
    return {
      showContent: false,
      portfolioInfo: {
        title: 'nymea',
        subtitle: 'Nymea is IoT operating system that allows any device with internet connection to become an IoT device. With the vision that it’s time to connect everything, Nymea is disrupting the IoT space while allowing other business to make their services and products IoT with incredible easiness and few simple steps.',
        location: 'Vienna, Austria'
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
      sr.reveal('.foo3', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo4', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo6', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo5', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo7', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo8', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
      sr.reveal('.foo9', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo10', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo11', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo12', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo13', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
    }
  }
}
</script>
