<template>
  <div class="discovery">
    <div class="discovery__container">
      <div>
        <div class="discovery__image"></div>
      </div>
      <div>
        <div class="discovery__title-image"></div>
        <h2 class="discovery__title">
          Being well prepared, makes job half done.
        </h2>
        <p>
          If you are wondering about complexity of your project or idea, how
          long will it take, how to test assumptions, what would be the
          assosicated costs, how to execyte etc… then we strogly recommand going
          throught the discovery phase.
        </p>
        <a href="#">Learn more about the Discovery Phase</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemsVisible: false
    };
  },
  mounted() {
    document.querySelector("#app").addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.itemsVisible =
        document.querySelector("#app").scrollTop > window.innerHeight / 2;
    }
  },
  beforeDestroy() {
    document
      .querySelector("#app")
      .removeEventListener("scroll", this.checkScroll);
  }
};
</script>
