<template>
  <div id="lyt-portfolio">
    <div class="cont" v-show="showContent">

      <div class="head-wrap">
        <div class="section font-dark" id="guh-header">
          <div class="row">
            <div class="col-left">
              <div class="inner-col-wrap foo">
                <h1 class="s-fix">Lyt</h1>
                <div class="foo">
                  <p>
                    With Lyt device and software, visiting a festival,
                    and staying at its camping site becomes a complete new experence.
                  </p>
                  <span class="font-dark g-bold">Impact of Concept7</span>
                  <p>
                    Concept7 was in charge of development of UX / UI of Nymea OS consumer interface -
                    that allowed for management of plugins, users, upgrades, logic rules and many other functionalities.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-right pull-left">
              <!-- <img class="header-above foo" src="./../../assets/portfolios/lyt/header-above.svg"/>
              <img class="header-below" src="./../../assets/portfolios/lyt/header.svg"/> -->
            </div>
          </div>
        </div>
      </div>

      <div class="full-width bg-dark-purple pull-left" id="lyt-low">
        <div class="section font-dark" id="guh-header">
          <div class="row">
            <div class="col-6">
              <h2 class="font-white">As usual, start low...</h2>
              <p class="font-white">
                In collaboration with guh team, we help conceptulize,
                design and think throught UX of their admin application,
                a web based app that enables guh customers to offer connected services to their end users.
                This application features very complex and rich functionality that allows for user tracking,
                setting up connectivity logic, services management as well as usability stats tracking.
              </p>
            </div>
            <div class="pull-left" style="">
              <img class="lyt-low" src="./../../assets/portfolios/lyt/lyt-low.svg" />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="center-holder">
              <img class="phone" src="./../../assets/portfolios/lyt/phone.svg" />
              <img class="bow" src="./../../assets/portfolios/lyt/bow.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="curve"></div>

      <div class="section" id="lyt-responsive">
        <div class="row">
          <div class="col-6">
            <h2 class="font-dark">As usual, start low...</h2>
            <p class="font-dark">
              In collaboration with guh team, we help conceptulize, design and think throught UX of their admin application,
              a web based app that enables guh customers to offer connected services to their end users.
              This application features very complex and rich functionality that allows for user tracking,
              setting up connectivity logic, services management as well as usability stats tracking.
            </p>
          </div>
          <img class="iphones" src="./../../assets/portfolios/lyt/iphones.jpg"/>
        </div>
      </div>

      <div class="section">
        <div class="row">
          <img class="tents" src="./../../assets/portfolios/lyt/tents.jpg"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/babel">
import ScrollReveal from 'scrollreveal'
import { EventBus } from './../../event-bus'
export default {
  name: 'lyt-portfolio',
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
