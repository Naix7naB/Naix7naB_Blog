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
  height: 1000px;
}
</style>
