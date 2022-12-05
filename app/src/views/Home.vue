<script>
import { BlogHeader, BlogBanner, BlogFooter } from '@/components'

// TODO 背景图片从后端请求
import bgImage from '@/assets/images/bg.png'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogBanner,
    BlogFooter
  },
  data(){
    return {
      defaultBgc: bgImage,
      scrollY: 0
    }
  },
  methods:{
    onScroll(vertical) {
      this.scrollY = vertical.scrollTop
    }
  }
}
</script>

<template>
  <div class="home" :style="{ backgroundImage: `url(${defaultBgc})` }">
    <VueScroll @handle-scroll="onScroll">
      <BlogHeader :scrollY="scrollY" />
      <BlogBanner />
      <BlogFooter style="height: 10000px;" />
    </VueScroll>
  </div>
</template>

<style lang="scss" scoped>
:deep(.__vuescroll .__rail-is-vertical) {
  z-index: 1000 !important;
}

.home {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    @include full-fixed();
    content: '';
    background-color: rgba($color: #000, $alpha: .3);
  }
}
</style>
