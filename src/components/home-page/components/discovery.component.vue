<template>
  <div id="discovery" class="discovery">
    <div class="discovery__container">
      <div>
        <div
          class="animated discovery__image"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        ></div>
      </div>
      <div>
        <div
          class="animated animation-delay-1 discovery__title-image"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        ></div>
        <h2
          class="animated animation-delay-1 discovery__title"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        >
          Being well prepared, makes job half done.
        </h2>
        <p
          class="animated animation-delay-1"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
        >
          If you are wondering about complexity of your project or idea, how
          long will it take, how to test assumptions, what would be the
          assosicated costs, how to execyte etc… then we strogly recommand going
          throught the discovery phase.
        </p>
        <a
          href="#"
          style="display:block;"
          class="animated animation-delay-1"
          :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"
          >Learn more about the Discovery Phase</a
        >
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
      const item = document.querySelector("#discovery").offsetTop;
      this.itemsVisible =
        document.querySelector("#app").scrollTop >
        item - window.innerHeight / 2;
    }
  },
  beforeDestroy() {
    document
      .querySelector("#app")
      .removeEventListener("scroll", this.checkScroll);
  }
};
</script>
