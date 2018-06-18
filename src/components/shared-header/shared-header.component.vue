<template>
  <section class="portfolio-top-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-10 offset-lg-1 text-center">
          <h1 class="portfolio-main-title">{{ portfolioInfo.title }}</h1>
          <p class="portfolio-main-subtitle">{{ portfolioInfo.subtitle }}</p>
          <p class="portfolio-main-location-text">{{ portfolioInfo.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'shared-header',
  props: ['portfolio-info']
}
</script>
