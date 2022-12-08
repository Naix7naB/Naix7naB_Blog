<script>
import { BlogHeader, BlogBanner, BlogMain, BlogFooter, Scroll } from '@/components'

// TODO 背景图片从后端请求
import bgImage from '@/assets/images/bg.png'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogBanner,
    BlogMain,
    BlogFooter,
    Scroll
  },
  data() {
    return {
      defaultBgc: bgImage
    }
  }
}
</script>

<template>
  <div class="home" :style="{ backgroundImage: `url(${defaultBgc})` }">
    <Scroll>
      <BlogHeader />
      <BlogBanner />
      <BlogMain />
      <BlogFooter />
    </Scroll>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before {
    @include full-fixed();
    content: '';
    background-color: $bg-theme-d;
  }
}
</style>
