<script>
import VueScroll from 'vuescroll'

export default {
  components: { VueScroll },
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          detectResize: false
        },
        scrollPanel: {
          scrollingX: false,
          scrollingY: true
        },
        rail: {
          opacity: 0,
          background: '#49b1f5'
        },
        bar: {
          keepShow: false,
          onlyShowBarOnScroll: true,
          background:
            '#49b1f5 linear-gradient(45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent)'
        }
      }
    }
  },
  methods: {
    onScroll(vertical) {
      this.$store.dispatch('scroll/setScrollY', vertical.scrollTop)
    },
    scrollTo({ offset, duration = 1000 }) {
      this.$refs.scrollRef.scrollTo({ y: offset }, duration, 'easeOutCubic')
    }
  },
  mounted() {
    this.$refs.scrollRef.refresh()
    this.$bus.$on('scrollTo', this.scrollTo)
  },
  beforeDestroy() {
    this.$refs.scrollRef.stop()
  }
}
</script>

<template>
  <VueScroll ref="scrollRef" :ops="ops" @handle-scroll="onScroll">
    <slot></slot>
  </VueScroll>
</template>

<style lang="scss" scoped>
:deep(.__rail-is-vertical) {
  z-index: 1000 !important;
}
</style>
