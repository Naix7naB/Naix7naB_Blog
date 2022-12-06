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
  data() {
    return {
      defaultBgc: bgImage
    }
  },
  methods: {
    onScroll(vertical) {
      this.$store.dispatch('scroll/setScrollY', vertical.scrollTop)
    },
    scrollTo({ target, duration = 1000 }) {
      if (!this.$refs[target]) return false
      const offsetY = this.$refs[target].$el.offsetTop
      this.$refs.scrollRef.scrollTo({ y: offsetY }, duration, 'easeOutCubic')
    }
  },
  mounted() {
    this.$bus.$on('scrollTo', this.scrollTo)
  },
  beforeDestroy() {
    this.$refs.scrollRef.stop()
  }
}
</script>

<template>
  <div class="home" :style="{ backgroundImage: `url(${defaultBgc})` }">
    <VueScroll ref="scrollRef" @handle-scroll="onScroll">
      <BlogHeader />
      <BlogBanner />
      <BlogFooter ref="footer" style="height: 10000px;" />
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
    background-color: $bg-theme-d;
  }
}
</style>
