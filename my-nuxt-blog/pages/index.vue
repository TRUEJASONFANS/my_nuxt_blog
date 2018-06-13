<template>
  <section class="container">
    <div>
      <navbar/>
      <div class="banner"></div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
 .banner {
    height: 800px;
    background: url(~assets/images/banner.jpg) no-repeat center top;
    background-clip: border-box;
    background-attachment: scroll;
    background-size: cover;
    z-index: 2;
  }
</style>
