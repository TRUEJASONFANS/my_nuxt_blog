<template>
  <div>
    <navbar></navbar>
    <div :class="{'App--hidden': visible}">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible() { return this.$store.state.visibleHeader }
  },
  methods: {
    setStore() {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
    }
  },
  head() { // 配置 meta标签
    return {
      htmlAttrs: { lang: this.$store.state.locale }
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.App {
  &--hidden {// & is placeholder for parent selctor
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
</style>
