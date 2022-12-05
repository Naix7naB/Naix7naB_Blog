<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <button class="blog-banner--pulldown">
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
  bottom: 60PX;
  left: 50%;
  padding: 10PX;
  color: $cl-emb;
  background-color: transparent;
  transform: translateX(-50%);
  @include pointer();
}
</style>
