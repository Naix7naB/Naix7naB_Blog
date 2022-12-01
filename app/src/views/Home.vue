<template>
  <div class="home">
    <BlogHeader />
    <BlogFooter />
  </div>
</template>

<script>
import { BlogHeader, BlogFooter } from '@/components'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogFooter
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 10000px;

  &:before {
    content: '';
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @include bg-image('@/assets/images/bg');
  }
}
</style>
