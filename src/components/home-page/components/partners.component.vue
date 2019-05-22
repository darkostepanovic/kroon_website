<template>
  <section id="partners" class="partners">
    <div class="partners__container">
      <div
        class="animated partners__image"
        :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
      ></div>
      <h2
        class="animated partners__title"
        :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
      >
        76% of our clients became profitable companies.
      </h2>
      <p
        class="animated animation-delay-1 partners__text"
        :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
      >
        Over the years we have had the opportunity to partner with both startups
        and large enterprise companies, creating some amazing and ground
        brekaing digital solutions.
      </p>
      <div class="partners__testimonials">
        <div
          class="animated animation-delay-2 partners__testimonials--image"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        ></div>
        <div
          class="animated animation-delay-3 partners__testimonials--text"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        >
          <h4>Sharad Mohan</h4>
          <h6>CEO | TRAINERIZE</h6>
          <p>
            “Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus
            quis mattis tincidunt. Nulla velit lacus, feugiat a lectus vitae,
            facilisis pharetra ligula. <br />
            <br />
            “Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus
            quis mattis tincidunt. Nulla velit lacus, feugiat a lectus vitae,
            facilisis pharetra ligula.
          </p>
        </div>
      </div>
      <div class="partners__clients">
        <div
          v-for="image in images"
          class="partners__clients--image"
          :class="image"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "lynton",
        "trainerize",
        "hasler",
        "lykke",
        "crowdhouse",
        "asmith",
        "abbot",
        "classtag"
      ],
      itemsVisible: false
    };
  },
  mounted() {
    document.querySelector("#app").addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      const item = document.querySelector("#partners").offsetTop;
      this.itemsVisible = document.querySelector("#app").scrollTop > item - (window.innerHeight / 2);
    }
  },
  beforeDestroy() {
    document.querySelector("#app").removeEventListener("scroll", this.checkScroll);
  }
};
</script>
