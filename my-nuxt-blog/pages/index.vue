<template>
  <section class="container">
    <div> 
      <div class="navbar">
        <h4 class="menu">
          <nuxt-link to="/code">文章</nuxt-link>
          <span >/</span>
          <nuxt-link to="/think">照片</nuxt-link>
          <span >/</span>
          <nuxt-link to="/fuck">杂想</nuxt-link>
        </h4>
      </div>
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
export default {
  scrollToTop: true,
  transition: "fade"
};
</script>
<style lang="scss" scoped>
.banner {
  height: 800px;
  background: url(~assets/images/banner.jpg) no-repeat center top;
  background-clip: border-box;
  background-attachment: scroll;
  background-size: cover;
  z-index: 2;
}
.navbar {
  position: absolute;
  left: 50%;
  top: 20%;
  width: 300px;
  margin-left: -150px;
  text-align: center;
  color: #eee;
  .menu {
    span {
      padding: .35rem;
    }
  }
  line-height: 38px;
}
h4 a {
  color: black;
  font-size: 20px;
}
</style>
