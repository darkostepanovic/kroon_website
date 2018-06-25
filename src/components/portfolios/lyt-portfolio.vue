<template>
  <div id="lyt-portfolio" class="portfolio-wrapper">
    <div v-show="showContent">
      <shared-header class="foo" :portfolio-info="portfolioInfo" />
      <section id="lyt-flow" class="lyt-dark-bcg">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title text-white">Intuitive flow to start using your LYT device.</h3>
              <p class="portfolio-section-text text-grey-9c">
                The physical light to mobile device connection is established via Bluetooth.
                It was important, that the user flow of connecting and setting up LYTs be as easy,
                intuitive and least time-consuming possible.
              </p>
            </div>
            <div class="col-12">
              <img class="foo2 full-width-lg" src="./../../assets/portfolios/lyt/lyt-flow-graphic.svg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="lyt-curved-section">
        <div class="container">
          <div class="row">
            <div class="col-12 img-wrapper text-center">
              <img class="foo3" src="./../../assets/portfolios/lyt/lyt-iphone.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="lyt-features">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h3 class="portfolio-section-title">Mobile app features</h3>
              <p class="portfolio-section-text text-grey-9c">
                Besides the primary ability to control light features of your LYT,
                mobile app offers the possibility to send light patterns to your LYT,
                to flash and visually find your LYT as well as understand when the LYT
                is under the festival control and the time when it will become available again.
              </p>
            </div>
            <div class="col-12 text-center">
              <img class="foo4 full-width-lg" src="./../../assets/portfolios/lyt/lyt-phones.svg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section class="lyt-dark-bcg" id="lyt-disco">
        <div class="container">
          <div class="row align-items-lg-center">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title text-white lg-margin-top-0">Desktop app to control all LYTs on the fesitval site</h3>
              <p class="portfolio-section-text text-grey-9c">
                Festival lightning operator can scan for antennas (devices that are sending the signal to LYTs),
                make a visual reference to their position in the physical world.
                <br><br>
                This allows the operators to easily group and control sets of antennas, hence control number of
                LYTs based on their location. Doing so gives incredible possibilities to make amazing lighting effects and experiences.
              </p>
            </div>
            <div class="col-12 col-lg-8 full-img-wrapper">
              <img class="foo5" src="./../../assets/portfolios/lyt/lyt-laptop-big.svg" alt="">
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <img class="foo6 full-width-lg" src="./../../assets/portfolios/lyt/lyt-control.svg" alt="">
            </div>
          </div>
          <div class="row align-items-lg-center section-item-lg-margin-top">
            <div class="col-12 col-lg-4">
              <h3 class="portfolio-section-title text-white margin-lg-0">Create, assign & save lightning patterns</h3>
              <p class="portfolio-section-text text-grey-9c">
                Similar to the mobile app, the desktop app offers the ability to control light features
                (color, intensity, and saturation), but also allows for the creation of light patterns and
                ability to save and load them for later use. One can also save tower and antennas layout
                and position, in case the festival is re-occurring.
              </p>
            </div>
            <div class="col-12 col-lg-7 offset-lg-1">
              <img class="foo7" src="./../../assets/portfolios/lyt/lyt-color-picker.svg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section id="lyt-tents">
        <!-- <img id="tent-left" src="src/assets/portfolios/lyt/lyt-left-tent.gif" alt="">
        <img id="tent-middle" src="src/assets/portfolios/lyt/lyt-middle-tent.gif" alt="">
        <img id="tent-right" src="src/assets/portfolios/lyt/lyt-right-tent.gif" alt=""> -->
      </section>
      <section>
        <div class="container">
          <shared-bottom-nav :project-info="{text: 'Reduce delivery delays with Hasler', link: '/hasler'}" />
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
import SharedFooter from './../shared-footer/shared-footer.component'
import SharedHeader from './../shared-header/shared-header.component'
import SharedBottomNav from './../shared-bottom-navigation/shared-bottom-navigation.component'
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'lyt-portfolio',
  components: {
    SharedFooter,
    SharedBottomNav,
    SharedHeader
  },
  data () {
    return {
      showContent: false,
      portfolioInfo: {
        title: 'lyt',
        subtitle: 'LYT CO. makes light effects products for music festivals. LYT is a physical light made for festival camp residents, whose features (color, intensity, saturation) are controlled using LYT mobile app. The beauty and possibilities when each tent in the campsite becomes a light offer amazing visual experiences. Also, antennas, placed across festival grounds, allow for “highjacking” of LYTS by festival management and control over using the desktop app.',
        location: 'Los Angeles, CA, USA'
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
      sr.reveal('.foo10', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo11', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo12', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.3', reset: false}, 350)
      sr.reveal('.foo13', { duration: 1200, scale: 1, distance:'30px', easing: 'ease', viewFactor:'0.7', reset: false}, 350)
    }
  }
}
</script>
