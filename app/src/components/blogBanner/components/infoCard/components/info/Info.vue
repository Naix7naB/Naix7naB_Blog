<script>
export default {}
</script>

<template>
  <div class="blog-banner--info">
    <p class="blog-info--item">
      <font-awesome-icon class="blog-icon--left" icon="fa-solid fa-quote-left" size="lg" />引用<span
        class="animate__animated animate__infinite  animate__flash animate__slow"
        >|</span
      ><font-awesome-icon class="blog-icon--right" icon="fa-solid fa-quote-right" size="lg" />
    </p>
    <p class="blog-info--item">介绍</p>
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--info {
  width: 63%;
  margin: 32PX auto 40PX;
  padding: 18PX;
  border-radius: 15PX;
  backdrop-filter: blur(10PX);
  background-color: rgba($color: #333, $alpha: .5);

  .blog-info--item {
    line-height: $lh-large;
    text-align: center;
    font-weight: 300;
    font-size: $fz-medium;

    .blog-icon--left {
      padding-right: 4PX;
    }

    .blog-icon--right {
      padding-left: 4PX;
    }
  }
}
</style>
