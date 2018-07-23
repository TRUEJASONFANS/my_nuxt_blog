<template>
  <section  class="clearfix main">
    <div class="article">

      <articleView
        :articleList = "list"
        @loadMore="loadMore"></articleView>

    </div>
  </section>
</template>
<script>

import articleView from '~/components/common/article'

export default {

  scrollToTop: true,

  transition: 'fade',

  fetch ({ store }) {
    return store.dispatch('getArtList')
  },

  data () {
    return {}
  },

  computed: {
    list () {
      return this.$store.state.article.art.list
    }
  },

  components: {
    articleView
  },

  methods: {
    loadMore () {
      this.$store.dispatch('getArtList')
    }
  }
}
</script>


<style lang="scss">

.main {
  >.title {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0rem;
    line-height: 1.5rem;
    color: black;
    font-size: 1rem;
    font-weight: normal;

    > .title-name {
      position: relative;
      padding-right: 1px;
      background: white;
      z-index: 99;      
    }

    > .line {
      top: 50%;
    }
  }
}

</style>
