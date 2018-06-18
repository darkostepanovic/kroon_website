<template>
  <div id="app">
    <top-nav v-show="showContent" />
    <router-view v-show="showContent"></router-view>
    <svg width="100%" height="100%" id="app-svg" v-show="showCurve" :class="{'portfolio-state': portfolioState}">
        <defs>
          <linearGradient x1="133.66887%" y1="-48.1971154%" x2="-34.5552885%" y2="144.906851%" id="linearGradient-1">
              <stop stop-color="#4973FF" offset="0%"></stop>
              <stop stop-color="#FF2E2E" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <path id="home-svg-path" d="M0,2578 C1507.41389,2578 4057.96296,2578 4583.11111,2578 C4582.99456,2578 4582.99456,1718.66667 4583.11111,0 C2601.07469,2.89466338e-12 1073.37099,3.74138423e-12 2.47258387e-12,2.54016252e-12 C3.9175746e-12,960.782407 2.60519705e-11,1466.83426 0,2578 Z" fill="url(#linearGradient-1)"></path>
        </g>
    </svg>
    <div class="animated" :class="{'fadeOutUp': !showLoadingText, 'fadeInDown': showLoadingText}" id="svg-loading-text">loading...</div>
    <contact-modal v-if="showContactForm" />
  </div>
</template>


<script>
import TopNav from './components/top-navigation/top-navigation.component.vue'
import ContactForm from './components/contact-form/contact-modal.component'
import { EventBus } from './event-bus'
import Snap from 'snapsvg'

export default {
  name: 'app',
  components: {
    'top-nav': TopNav,
    'contact-modal': ContactForm
  },
  data () {
    return {
      homeSlide: 0,
      showContent: false,
      portfolioState: false,
      showCurve: true,
      showContactForm: false,
      showLoadingText: false
    }
  },
  created () {
    EventBus.$on('slideChanged', data => {
      this.homeSlide = data.currentSlide
      this.morphSvg(data.currentSlide)
      this.resizeAndPositionSvg()
      this.loaderHomeClass = 'home-svg-' + data.currentSlide
    })
    EventBus.$on('showContactForm', () => {
      this.showContactForm = true
    })
    EventBus.$on('closeContactForm', () => {
      this.showContactForm = false
    })
    window.addEventListener('resize', this.onWindowResize)
  },
  mounted () {
    this.handleRouteChange(this.$route.name)
  },
  watch: {
    '$route' (to, from) {
      this.handleRouteChange(to.name)
    }
  },
  methods: {
    handleRouteChange (routeName) {
      this.showContent = false
      this.portfolioState = false
      this.homeSlide = 0
      this.showCurve = true
      this.showLoadingText = true
      this.morphSvg('full')
      this.resizeAndPositionSvg()
      const route = routeName
      if (route === 'about' || route === 'our-work') {
        this.showContent = true
        this.showCurve = false
        this.showLoadingText = false
      } else {
        setTimeout(() => {
          this.showContent = true
          this.showLoadingText = false
          switch (route) {
            case 'home':
              this.homeSlide = 1
              this.morphSvg(1)
              this.resizeAndPositionSvg()
              break
            case 'guh-portfolio':
              this.portfolioState = true
              this.homeSlide = 6
              this.morphSvg('portfolio')
              this.resizeAndPositionSvg()
              break
            case 'lyt-portfolio':
              this.portfolioState = true
              this.homeSlide = 6
              this.morphSvg('portfolio')
              this.resizeAndPositionSvg()
              break
            case 'trainerize-portfolio':
              this.portfolioState = true
              this.homeSlide = 6
              this.morphSvg('portfolio')
              this.resizeAndPositionSvg()
              break
            case 'hasler-portfolio':
              this.portfolioState = true
              this.homeSlide = 6
              this.morphSvg('portfolio')
              this.resizeAndPositionSvg()
              break
          }
        }, 2000)
      }
    },
    onWindowResize () {
      this.resizeAndPositionSvg()
    },
    resizeAndPositionSvg () {
      const svg = Snap.select('#home-svg-path')
      const scaleMatrix = new Snap.Matrix()
      switch (this.homeSlide) {
        case 0:
          scaleMatrix.translate(0, 0)
          break;
        case 1:
          scaleMatrix.scale(window.outerWidth / 1920, window.innerHeight / 960)
          scaleMatrix.translate(0, 0)
          break;
        case 2:
          if (window.outerWidth > 992) {
            scaleMatrix.translate(window.outerWidth - (window.outerWidth / 2.7), window.innerHeight - 500 - (window.innerHeight / 1.8))
          } else {
            scaleMatrix.translate(window.outerWidth - (window.outerWidth / 1.4), - 600 -(960 / window.innerHeight) * 100)
          }
          break;
        case 3:
          if (window.outerWidth > 992) {
            scaleMatrix.translate(window.outerWidth + 200 - (window.outerWidth / 2), window.innerHeight - 300 - (window.innerHeight / 2))
          } else {
            scaleMatrix.translate(window.outerWidth - (window.outerWidth / 1.2), -100 -(960 / window.innerHeight) * 100)
          }
          break;
        case 4:
          if (window.outerWidth > 992) {
            scaleMatrix.translate(window.outerWidth + 0 - (window.outerWidth / 2), window.innerHeight - 550 - (window.innerHeight / 2))
          } else {
            scaleMatrix.translate(window.outerWidth - (window.outerWidth * 1.05), -800 -(960 / window.innerHeight) * 100)
          }
          break;
        case 5:
          if (window.outerWidth < 961) {
            scaleMatrix.scale(window.outerWidth / 1500, window.innerHeight / 700)
            scaleMatrix.translate(-200, -100)
          } else if (window.outerWidth < 993) {
            scaleMatrix.scale(window.outerWidth / 1920, window.innerHeight / 960)
            scaleMatrix.translate(-100, -100)
          } else {
            scaleMatrix.scale(window.outerWidth / 1920, window.innerHeight / 960)
            scaleMatrix.translate(-100, -100)
          }
          break;
          case 6:
            scaleMatrix.translate(window.outerWidth / 2 - 100, window.innerHeight - 225)
            break;
      }
      if (this.homeSlide === 6) {
        svg.animate({ transform: scaleMatrix }, 300, mina.easeinout)
      } else {
        svg.animate({ transform: scaleMatrix }, 1000, mina.backout)
      }
    },
    morphSvg (value) {
      const fromPath = Snap.select('#home-svg-path')
      const toPathPoints_full = 'M0,2578 C1507.41389,2578 4057.96296,2578 4583.11111,2578 C4582.99456,2578 4582.99456,1718.66667 4583.11111,0 C2601.07469,2.89466338e-12 1073.37099,3.74138423e-12 2.47258387e-12,2.54016252e-12 C3.9175746e-12,960.782407 2.60519705e-11,1466.83426 0,2578 Z'
      const toPathPoints_1 = 'M451.181145,1954.7312 C-1240.31298,2436.87675 2407.83369,5301.286 1874.61538,3512.48951 C1343.33359,1730.18946 2971.2612,1674.05402 3173.74973,1247.02375 C3591.72874,365.543261 2464.97996,-144.28208 1513.74473,36.1022277 C44.1992429,314.774565 2153.28772,1469.56065 451.181145,1954.7312 Z'
      const toPathPoints_2 = 'M269.005749,1058.38134 C334.28391,1096.02641 739.934616,1210.92768 954.49879,876.870505 C1117.77291,622.667352 1098.63873,395.009712 739.934616,336.199937 C398.380492,280.201914 269.005749,-217.987395 104.873613,112.207845 C-61.7665322,447.448606 -45.7417599,876.870505 269.005749,1058.38134 Z'
      const toPathPoints_3 = 'M189.730864,534.630565 C489.000271,262.925445 799.618306,838.710782 844.554592,904.576297 C988.97191,1116.25648 1216.53795,395.316653 969.804896,154.793236 C630.896095,-175.586107 772.953485,436.881425 373.71457,81.5954177 C-57.5590641,-302.19855 -110.973689,807.638645 189.730864,534.630565 Z'
      const toPathPoints_4 = 'M38.7798308,1126.79112 C270.411144,1250.73419 638.136117,1316.8977 884.030938,1004.8799 C1125.82152,698.070003 466.563936,350.219791 792.597525,188.074744 C1172.55415,-0.887643 -331.017529,-151.244811 235.869632,273.412596 C820.677432,711.494424 -207.219759,995.159758 38.7798308,1126.79112 Z'
      const toPathPoints_5 = 'M11.1921328,546.807289 C11.1921328,904.74158 339.377986,455.195648 1444.49918,669.258494 C2441.37758,862.354624 2263.98032,336.442399 2075.59385,64.8519065 C1501.47758,-54.2772205 1058.04648,27.1746127 453.900334,27.1746127 C-111.259072,27.1746127 11.1921328,170.034352 11.1921328,546.807289 Z'
      const toPathPoints_6 = 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      let toPathPoints
      switch (value) {
        case 'full':
          toPathPoints = toPathPoints_full
          break;
        case 1:
          toPathPoints = toPathPoints_1
          break;
        case 2:
          toPathPoints = toPathPoints_2
          break;
        case 3:
          toPathPoints = toPathPoints_3
          break;
        case 4:
          toPathPoints = toPathPoints_4
          break;
        case 5:
          toPathPoints = toPathPoints_5
          break;
        case 'portfolio':
          toPathPoints = toPathPoints_6
          break;
      }
      if (value === 'portfolio') {
        fromPath.animate({ d: toPathPoints }, 300, mina.easeinout, this.morphCallback)
      } else {
        fromPath.animate({ d: toPathPoints }, 1000, mina.backout, this.morphCallback)
      }

    },
    morphCallback () {
      if (this.portfolioState) {
        EventBus.$emit('morphEnded')
      }
    }
  }
}
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>
