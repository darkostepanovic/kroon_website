<template>
  <div>
    <transition name="fadeOut" mode="out-in">
      <component :is="currentslide"></component>
    </transition>
  </div>
</template>

<script type="text/babel">
import Slide_1 from './components/slide_1.component'
import Slide_2 from './components/slide_2.component'
import Slide_3 from './components/slide_3.component'
import Slide_4 from './components/slide_4.component'
import Slide_5 from './components/slide_5.component'
import { EventBus } from '../../event-bus'
export default {
  components: {
    'slide_1': Slide_1,
    'slide_2': Slide_2,
    'slide_3': Slide_3,
    'slide_4': Slide_4,
    'slide_5': Slide_5
  },
  data () {
    return {
      slide: 0,
      currentslide: '',
      allowSlideChange: false,
    }
  },
  methods: {
    handleScroll (event) {
      if (this.allowSlideChange) {
        if (event.wheelDelta > 0 || event.detail < 0) {
          // scroll up
          if (this.slide > 1) {
            this.allowSlideChange = false
            this.slide--
            EventBus.$emit('slideChanged', {
              currentSlide: this.slide
            })
            this.allowSlideChange = true
          }
        } else {
          // scroll down
          if (this.slide < 5) {
            this.allowSlideChange = false
            this.slide++
            EventBus.$emit('slideChanged', {
              currentSlide: this.slide
            })
            this.allowSlideChange = true
          }
        }
      }
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
    }, 1500)
    if (window.addEventListener) {
      window.addEventListener('mousewheel', this.handleScroll, false)
      window.addEventListener('DOMMouseScroll', this.handleScroll, false)
    } else {
      window.attachEvent('onmousewheel', this.handleScroll)
    }
  }
}
</script>
