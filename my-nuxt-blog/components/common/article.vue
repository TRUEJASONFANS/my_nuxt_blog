<template>
  <transition-group tag="div" name="slide-down" class="article-box">
    <div class="article-item" v-for="item in articleList" :key="item._id" >
      <div class="content">
        <p class="title"><nuxt-link :to="`/article/${item._id}`"></nuxt-link></p>
        <p class="abstrack">{{ item.descript | text(200)}}</p>
        <div class="meta">
          <span class="time">
            {{
              item.create_at | dateFormat('yyyy.MM.dd')
            }}
          </span>
          <span class="hr"></span>
          <span class="read"> {{ item.meta.views }} 次阅读</span>
          <span class="hr"></span>
          <span class="comments"> {{ item.meta.comments }} 条评论</span>
          <span class="hr"></span>
          <span class="like"> {{ item.meta.likes }} 人喜欢</span>
        </div>
      </div>
      <span class="article-line"></span>
    </div>
  <!-- <div class="end-article" v-if="!havaMoreArt" key="-1">
    <i>end</i>
  </div> -->
   <!-- <div class="loading-more end-article " v-if="haveMoreArt" key="-2">
        <a href="javascript:;" @click="$emit('loadMore')" v-if="!fetch" class="allow"><i>more</i></a>
        <a href="javascript:;" v-if="fetch" class="not-allow"><i>loading...</i></a>
  </div> -->
  </transition-group>
</template>

<script>
export default {
  name: "article-box",
  props: ["articleList"],
  computed: {
    fetch() {
      return this.$store.state.article.fetch;
    }
  }
};
</script>

<style scoped lang="scss">
.article-box {
  width: $container-left;
  margin: 0 auto;

  > .article-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $lg-pad 0 $normal-pad;
    margin-bottom: $xlg-pad;
    color: $black;
    .title {
      margin-bottom: $sm-pad;
      font-size: $font-size-large;
      font-weight: 700;
    }

    > .content {
      > .title {
        @include content-overflow(1);
      }

      > .abstract {
        margin: 2rem 0;
        min-height: 4rem;
        line-height: 1.8rem;
        color: $descript;
        @include content-overflow(3);
      }
      > .meta {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        margin-top: $sm-pad;
        height: 1rem;
        line-height: 1rem;
        font-size: $font-size-small;
        color: #969696;
      }
    }
    > a {
      display: block;
      width: 10rem;

      > .pc-thumb {
        width: 100%;
        height: 6rem;
        line-height: 6rem;
        overflow: hidden;
      }
    }

    > .article-line {
      position: absolute;
      left: -$mlg-pad;
      bottom: -$mlg-pad;
      width: $xlg-pad * 2;
      height: 1px;
      background: $border-color;
    }
  }

   .end-article {
    padding: $md-pad 0;
    color: $black;
  }
}
</style>