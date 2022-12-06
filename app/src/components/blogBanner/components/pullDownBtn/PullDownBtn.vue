<script>
export default {
  name: 'PullDownBtn',
  methods: {
    pullDown() {
      this.$bus.$emit('scrollTo', { target: 'footer' })
    }
  }
}
</script>

<template>
  <button class="blog-banner--pulldown" @click="pullDown">
    <font-awesome-icon
      bounce
      size="3x"
      icon="fa-solid fa-caret-down"
      :style="{'--fa-animation-duration': '2s'}"
    />
  </button>
</template>

<style lang="scss" scoped>
.blog-banner--pulldown {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 60PX;
  height: 60PX;
  padding: 10PX;
  color: $cl-theme;
  background-color: transparent;
  transform: translateX(-50%);
  @include pointer();
}
</style>
