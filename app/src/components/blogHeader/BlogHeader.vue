<script>
import Navigator from './components/navigator/Navigator'
import Menu from './components/menu/Menu'

import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('scroll')

export default {
  name: 'BlogHeader',
  components: { Navigator, Menu },
  data() {
    return {
      routes: [
        {
          name: 'Home',
          title: '主页',
          icon: 'home'
        },
        {
          name: 'Messages',
          title: '留言板',
          icon: 'comments'
        },
        {
          name: 'Photos',
          title: '相册',
          icon: 'images'
        },
        {
          name: 'About',
          title: '关于',
          icon: 'circle-info'
        },
        {
          name: 'Personal',
          title: '个人中心',
          icon: 'user'
        }
      ]
    }
  },
  computed: {
    ...mapState(['isDown', 'scrollY', 'maxTransY']),
    headerStyle() {
      let blurCount = 0, bgColor = 'transparent', shadow = 'none', transform = 'none'
      let ratio = Math.min(this.scrollY / this.maxTransY * 100, 100) / 100
      if (this.scrollY > 0) {
        blurCount = Math.min(this.scrollY / 50, 20)
        bgColor = `rgba(57, 57, 57, ${Math.min(ratio, .7)})`
        shadow = `0 2px 20px rgba(57, 57, 57, ${Math.min(ratio, .7)})`
      }
      if (this.scrollY > this.maxTransY && this.isDown) {
        const headerHeight = this.$refs.headerRef.clientHeight
        transform = `translate3d(0, ${-headerHeight}px, 1px)`
      }
      return {
        backgroundColor: bgColor,
        boxShadow: shadow,
        backdropFilter: `blur(${blurCount}px)`,
        transform: transform
      }
    }
  }
}
</script>

<template>
  <header class="blog-header" ref="headerRef" :style="headerStyle">
    <Menu />
    <Navigator :list="routes" />
  </header>
</template>

<style lang="scss" scoped>
.blog-header {
  z-index: 999;
  position: fixed;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 80PX;
  padding: 1% 5%;
  transition: transform .5s;
}
</style>
