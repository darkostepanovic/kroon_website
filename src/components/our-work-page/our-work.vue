<template lang="html">
  <div id="our-work-page-wrapper">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-5 offset-1">
            <div class="our-work-item" id="our-work-trainerize" @click="goTo('/trainerize')">
              <div class="parent">
                <div class="child"></div>
              </div>
              <div class="info">
                <h3>Get in shape with Trainerize</h3>
                <p>All-in-one fitness solution for personal training.</p>
                <div class="arrow-wrapper">
                  <img src="./../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
                </div>
              </div>
            </div>
            <div class="our-work-item" id="our-work-lyt" @click="goTo('/lyt')">
              <div class="parent">
                <div class="child"></div>
              </div>
              <div class="info">
                <h3>Control festival lighting with Lyt</h3>
                <p>Mobile and desktop app that brings a twist to festival lights control.</p>
                <div class="arrow-wrapper">
                  <img src="./../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="our-work-item" id="our-work-nymea" @click="goTo('/nymea')">
              <div class="parent">
                <div class="child"></div>
              </div>
              <div class="info">
                <h3>Connect everything using Nymea</h3>
                <p>User-facing OS for an IoT device.</p>
                <div class="arrow-wrapper">
                  <img src="./../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
                </div>
              </div>
            </div>
            <div class="our-work-item" id="our-work-hasler" @click="goTo('/hasler')">
              <div class="parent">
                <div class="child"></div>
              </div>
              <div class="info">
                <h3>Reduce delivery delays with Hasler</h3>
                <p>Delivery management and driver tracking system.</p>
                <div class="arrow-wrapper">
                  <img src="./../../assets/home-page/button-arrow.svg" width="14" height="16" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
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
import SharedFooter from './../../components/shared-footer/shared-footer.component'
export default {
  name: 'our-work',
  components: {
    SharedFooter
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
