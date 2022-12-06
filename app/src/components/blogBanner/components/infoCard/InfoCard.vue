<script>
import Avatar from './components/avatar/Avatar'
import Info from './components/info/Info'
import Social from './components/social/Social'

export default {
  components: {
    Avatar,
    Info,
    Social
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="blog-banner--infocard">
    <Avatar />
    <Info />
    <Social />
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--infocard {
  position: relative;
  top: 50%;
  max-width: 800PX;
  margin: auto;
  transform: translateY(-50%);
}
</style>
