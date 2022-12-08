<script>
import { BlogHeader, BlogBanner, BlogMain, BlogFooter, Scroll } from '@/components'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogBanner,
    BlogMain,
    BlogFooter,
    Scroll
  },
  computed: {
    ...mapGetters(['bgStyle'])
  }
}
</script>

<template>
  <div class="home" :style="bgStyle">
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
