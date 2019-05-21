<template>
    <section class="share-on-kroon">
        <div class="share-on-kroon__logo"></div>
        <h3 class="share-on-kroon__title"></h3>
        <div class="share-on-kroon__blog">
            <div class="share-on-kroon__blog--single">
                <div class="image"></div>
                <h4></h4>
                <p></p>
                <a href="#"></a>
            </div>
        </div>
    </section>
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
