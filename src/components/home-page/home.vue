<template>
  <div>
    <transition name="fadeOut" mode="out-in">
      <component :is="currentslide"></component>
    </transition>
    <soc-nav v-show="showSocialAndPagination" />
    <slide-nav v-show="showSocialAndPagination" :slide="slide" @changeSlide="changeSlide"></slide-nav>
    <div id="pagination" v-show="showSocialAndPagination">
      {{ slide }} / 5
    </div>
    <contact-modal v-if="showContactForm" />
  </div>
</template>

<script type="text/babel">
import Slide_1 from './components/slide_1.component'
import Slide_2 from './components/slide_2.component'
import Slide_3 from './components/slide_3.component'
import Slide_4 from './components/slide_4.component'
import Slide_5 from './components/slide_5.component'
import SocialNav from './components/social-navigation.component'
import SlideNav from './components/slide-navigation.component'
import ContactForm from './components/contact-modal.component'
import { EventBus } from '../../event-bus'
export default {
  components: {
    'slide_1': Slide_1,
    'slide_2': Slide_2,
    'slide_3': Slide_3,
    'slide_4': Slide_4,
    'slide_5': Slide_5,
    'soc-nav': SocialNav,
    'slide-nav': SlideNav,
    'contact-modal': ContactForm
  },
  data () {
    return {
      slide: 0,
      currentslide: '',
      allowSlideChange: false,
      showSocialAndPagination: false,
      showContactForm: false
    }
  },
  methods: {
    handleScroll (event) {
      if (this.allowSlideChange && this.$route.name === 'home') {
        if (event.wheelDelta > 0 || event.detail < 0 || event.keyCode === 38) {
          // scroll up
          if (this.slide > 1) {
            this.allowSlideChange = false
            this.slide--
            EventBus.$emit('slideChanged', {
              currentSlide: this.slide
            })
            setTimeout(() => {
              this.allowSlideChange = true
            }, 2000)
          }
        } else if (event.wheelDelta < 0 || event.detail > 0 || event.keyCode === 40) {
          // scroll down
          if (this.slide < 5) {
            this.allowSlideChange = false
            this.slide++
            EventBus.$emit('slideChanged', {
              currentSlide: this.slide
            })
            setTimeout(() => {
              this.allowSlideChange = true
            }, 2000)
          }
        }
      }
    },
    changeSlide (val) {
      this.allowSlideChange = false
      this.slide = val
      EventBus.$emit('slideChanged', {
        currentSlide: this.slide
      })
      setTimeout(() => {
        this.allowSlideChange = true
      }, 2000)
    }
  },
  watch: {
    slide (val) {
      this.currentslide = 'slide_' + val
    }
  },
  created () {
    setTimeout(() => {
      this.currentSlide = 'slide_1'
      this.slide = 1
      this.allowSlideChange = true
      this.showSocialAndPagination = true
    }, 2000)
    if (window.addEventListener) {
      window.addEventListener('mousewheel', this.handleScroll, false)
      window.addEventListener('DOMMouseScroll', this.handleScroll, false)
      window.addEventListener('keydown', this.handleScroll, false);
    } else {
      window.attachEvent('onmousewheel', this.handleScroll)
    }
    EventBus.$on('showContactForm', () => {
      this.showContactForm = true
      this.allowSlideChange = false
    })
    EventBus.$on('closeContactForm', () => {
      this.showContactForm = false
      this.allowSlideChange = true
    })
  }
}
</script>
