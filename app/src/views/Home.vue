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
      maxTransY: 1200,
      scrollTop: 0
    }
  },
  computed: {
    headerStyle() {
      let blurCount = 0, bgColor = 'transparent', shadow = 'none'
      let ratio = Math.min(this.scrollTop / this.maxTransY * 100, 100) / 100
      if (this.scrollTop > 0) {
        blurCount = Math.min(this.scrollTop / 50, 20)
        bgColor = `rgba(100, 100, 100, ${Math.min(ratio, .3)})`
        shadow = `0 1px 20px rgba(51, 51, 51, ${Math.min(ratio, .7)})`
      }
      return {
        backgroundColor: bgColor,
        boxShadow: shadow,
        backdropFilter: `blur(${blurCount}px)`
      }
    }
  },
  methods:{
    onScroll(vertical) {
      this.scrollTop = vertical.scrollTop
    }
  }
}
</script>

<template>
  <div class="home" :style="{ backgroundImage: `url(${defaultBgc})` }">
    <VueScroll @handle-scroll="onScroll">
      <BlogHeader :headerStyle="headerStyle" />
      <BlogBanner />
      <BlogFooter style="height: 10000px;" />
    </VueScroll>
  </div>
</template>

<style lang="scss" scoped>
:deep(.__vuescroll .__rail-is-vertical){
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
