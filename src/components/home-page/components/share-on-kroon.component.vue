<template>
  <section id="sharon" class="share-on-kroon">
    <div class="animated share-on-kroon__logo" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"></div>
    <h3 class="animated animation-delay-1" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'">
      We’re not just coder, designer projet. We are writers too.
    </h3>
    <p class="animated animation-delay-1" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'">
      Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus quis
      mattis tincidunt. Nulla velit lacus.
    </p>
    <div class="animated animation-delay-2 share-on-kroon__blog" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'">
      <div class="share-on-kroon__blog--single">
        <div class="image"></div>
        <h4>Some ttile of the artivls sdad as dasd asd ads d</h4>
        <p>
          Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus
          quis mattis tincidunt. Nulla velit lacus, feugiat a lectus vitae,
          facilisis pharetra ligula. Maecenas quis enim condimentum, blandit
          ante nec, lobortis justo.
        </p>
        <a href="#">Continue reading</a>
      </div>

      <div class="share-on-kroon__blog--single">
        <div class="image"></div>
        <h4>Some ttile of the artivls sdad as dasd asd ads d</h4>
        <p>
          Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus
          quis mattis tincidunt. Nulla velit lacus, feugiat a lectus vitae,
          facilisis pharetra ligula. Maecenas quis enim condimentum, blandit
          ante nec, lobortis justo.
        </p>
        <a href="#">Continue reading</a>
      </div>

      <div class="share-on-kroon__blog--single">
        <div class="image"></div>
        <h4>Some ttile of the artivls sdad as dasd asd ads d</h4>
        <p>
          Donec quis vulputate risus, ac cursus magna. Aliquam interdum risus
          quis mattis tincidunt. Nulla velit lacus, feugiat a lectus vitae,
          facilisis pharetra ligula. Maecenas quis enim condimentum, blandit
          ante nec, lobortis justo.
        </p>
        <a href="#">Continue reading</a>
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
      const item = document.querySelector("#sharon").offsetTop;
      this.itemsVisible = document.querySelector("#app").scrollTop > item - (window.innerHeight / 2);
    }
  },
  beforeDestroy() {
    document.querySelector("#app").removeEventListener("scroll", this.checkScroll);
  }
};
</script>
