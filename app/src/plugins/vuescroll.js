import Vue from 'vue'
import vuescroll from 'vuescroll'

Vue.use(vuescroll, {
  name: 'VueScroll',
  ops: {
    vuescroll: {
      // TODO PC端使用 native 模式, 移动端使用 slide 模式
      mode: 'native',
      detectResize: false
    },
    scrollPanel: {
      scrollingX: false,
      scrollingY: true
    },
    rail: {
      background: '#49b1f5',
      opacity: 0
    },
    bar: {
      keepShow: false,
      onlyShowBarOnScroll: true,
      background:
        '#49b1f5 linear-gradient(45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent)'
    }
  }
})
