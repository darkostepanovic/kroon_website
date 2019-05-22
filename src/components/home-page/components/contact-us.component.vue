<template>
  <section id="contactus" class="contact-us">
    <div class="contact-us__background"></div>
    <div class="contact-us__container">
      <div>
        <div class="animated animation-delay-2 contact-us__image" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'"></div>
      </div>
      <div>
        <h2 class="animated contact-us__title" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'">
          Say hello to Davor, <br />
          our relations manager
        </h2>
        <div class="animated animation-delay-1 contact-us__form" :class="itemsVisible ? 'fadeInDown' : 'fadeOutDown'">
          <form autocomplete="off">
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="Add here" />
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Add here" />
            <label for="message">Your Message</label>
            <textarea id="message" placeholder="Add here"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
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
            const item = document.querySelector("#contactus").offsetTop;
            this.itemsVisible = document.querySelector("#app").scrollTop > item - (window.innerHeight / 2);
        }
    },
    beforeDestroy() {
        document.querySelector("#app").removeEventListener("scroll", this.checkScroll);
    }
};
</script>
