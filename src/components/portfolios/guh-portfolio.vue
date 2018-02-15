<template>
  <div id="guh-portfolio">
    <div class="container">
      <div class="row">
        <div class="col-7 overtop-fix">
          <h1 class="g-light gray">Now it's time to connect everthing with nymea</h1>
        </div>
      </div>
      <!-- <div class="row">
        <img class="main-g" src="./../../assets/portfolios/guh/guhsvg.svg"/>
      </div> -->
    </div>

    <div class="container">
      <div class="row">
        <h2 class="g-light col-5">What we did</h2>
        <div class="offset-1 para g-light col-4">
          In collaboration with guh team, we help conceptulize, design and think throught UX of their admin application, a web based app that enables guh customers to offer connected services to their end users. This application features very complex and rich functionality that allows for user tracking, setting up connectivity logic, services management as well as usability stats tracking.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="offset-1 col-10 offset-lg-2 col-lg-8  gray g-light margin-top-fix text-center">
          <div class="l-title-spec">Complex, yet intuitive UX to Connect everything</div>
        </div>
        <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 text-center">
          <div class="para g-book para-fix">Weather you are garage door manufacutrer, produce audio equpment or you are in security bussiness, now you can offer IoT feature to your customers throught your deivces and services.</div>
          <div class="special-title g-bold">Usage examples of guh system</div>
        </div>
      </div>
      <div class="row">
        <div class="col-10 col-lg-8 offset-lg-2 offset-1 text-center">
          <img class="image1" src="./../../assets/portfolios/guh/image1mobile.png"/>
          <img class="image1-1" src="./../../assets/portfolios/guh/image1-1.jpg"/>
        </div>
      </div>
    </div>

    <div class="container container-margin-fix">
      <div class="row">
        <div class="col-10 offset-1 col-lg-4 offset-md-1 col-sm-12">
          <div class="m-title g-light">Dasboard to monitor devices, users and information</div>
          <div class="para g-book para-fix">With customizable widgets one can set up a view to easly monitor all relevant information and have an easy access to more details view of each device, service or users as well as revenue and usage stats.</div>
        </div>
        <div class="col-12 col-md-6">
          <img class="image-abs" src="./../../assets/portfolios/guh/testsvg.svg"/>
          <img class="image-abs-under" src="./../../assets/portfolios/guh/image2under1.png"/>
        </div>
      </div>
    </div>

    <div class="container section2">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 text-center">
          <div class="special-title g-bold">Usage examples of guh system</div>
          <img class="full-img trick-off" src="./../../assets/portfolios/guh/image3.jpg"/>
          <img class="full-img trick-on" src="./../../assets/portfolios/guh/image3mobile.jpg"/>
        </div>
      </div>
    </div>

    <div class="container section3">
      <div class="row">
        <div class="col-10 offset-1 col-lg-4 offset-md-1 col-sm-12">
          <div class="m-title g-light t3">Plugins marketplace offer endless possibilities for connecting prodcuts and services</div>
          <div class="para g-book para-fix">One can browse pottentially large number of plugins, that offer varius connected services. With the idea of open API, nymea is looking to enrisch peoples IoT experince by providing 3rd party plugins and in that manner provide the ability to connect alsmot anything.</div>
        </div>
        <div class="col-12 col-md-6">
          <img class="sm-under foo" src="./../../assets/portfolios/guh/servicesmarketplace-under.jpg"/>
          <img class="sm foo" src="./../../assets/portfolios/guh/servicesmarketplace.png"/>
        </div>
      </div>
    </div>

    <div class="container section4">
      <div class="row">
        <div class="col-12 col-md-6">
          <img class="ds-under" src="./../../assets/portfolios/guh/dsunder.jpg"/>
          <img class="ds" src="./../../assets/portfolios/guh/ds@2x.png"/>
        </div>
        <div class="col-10 offset-1 col-lg-4 offset-md-1 col-sm-12">
          <div class="m-title g-light t4">Intaling new connected service easy as online shopping</div>
          <div class="para g-book para-fix">Adding new abilityes for your nymea device is easy as shopping for a book. All you need to do is find a plugin of your intrest and with a click of a button is being applyed to your system.</div>
        </div>
      </div>
    </div>

    <div class="container section5">
      <div class="row">
        <div class="col-10 offset-1 col-lg-4 offset-md-1 col-sm-12">
          <div class="m-title g-light t5">Plugins marketplace offer endless possibilities for connecting prodcuts and services</div>
          <div class="para g-book para-fix">One can browse pottentially large number of plugins, that offer varius connected services. With the idea of open API, nymea is looking to enrisch peoples IoT experince by providing 3rd party plugins and in that manner provide the ability to connect alsmot anything.</div>
        </div>
        <div class="col-12 col-md-6">
          <img class="bundles foo" src="./../../assets/portfolios/guh/bundles.jpg"/>
        </div>
      </div>
    </div>

    <div class="container section6">
      <div class="row">
        <div class="col-12 col-md-6">
          <img class="users-under" src="./../../assets/portfolios/guh/userunder.jpg"/>
          <img class="users" src="./../../assets/portfolios/guh/users.png"/>
        </div>
        <div class="col-10 offset-1 col-lg-4 offset-md-1 col-sm-12">
          <div class="m-title g-light t6">Intaling new connected service easy as online shopping</div>
          <div class="para g-book para-fix">Adding new abilityes for your nymea device is easy as shopping for a book. All you need to do is find a plugin of your intrest and with a click of a button is being applyed to your system.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import ScrollReveal from 'scrollreveal'
export default {
  name: 'guh-portfolio',
  mounted () {
    window.sr = ScrollReveal({ reset: true })
    sr.reveal('.foo', { duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.5',reset: false,}, 350)
    sr.reveal('.foo2', {duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.5', reset: false, useDelay: 'always',}, 350)
    sr.reveal('.foo3', {duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.4', reset: false,}, 350)
    sr.reveal('.foo4', {duration: 1200, scale: 1, opacity:'1', distance:'270px', easing: 'ease', viewFactor:'0.4', reset: false,}, 350)
    sr.reveal('.foo5', {duration: 1200, scale: 1, distance:'170px', easing: 'ease', viewFactor:'0.4', reset: false,}, 350)
    sr.reveal('.foo6', {duration: 1200, scale: 1, distance:'70px', easing: 'ease', viewFactor:'0.4', reset: false,}, 350)
  }
}
</script>
