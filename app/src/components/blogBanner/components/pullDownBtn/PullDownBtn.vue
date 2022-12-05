<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <div class="blog-banner--pulldown">
    <button><font-awesome-icon icon="fa-solid fa-caret-down" /></button>
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--pulldown {
  position: absolute;
  bottom: 60PX;
  left: 50%;
  width: 100PX;
  height: 80PX;
  border-radius: 16PX;
  background-color: $bg-theme-d;
  transform: translateX(-50%);
}
</style>
