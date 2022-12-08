<script>
export default {}
</script>

<template>
  <div class="blog-menu">
    <h1 class="blog-menu--logo hidden-xs-only">
      <span class="blog-site--name"
        ><font-awesome-icon class="blog-icon--blog" icon="fa-solid fa-blog" />&#35;7x&#180;s
        Blog</span
      >
    </h1>
    <span class="hidden-sm-and-up">
      <font-awesome-icon class="blog-icon--bars" icon="fa-solid fa-bars" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.blog-menu {
  display: flex;
  align-items: center;

  .blog-site--name {
    color: $cl-text;
    font-size: 32PX;
    vertical-align: 8PX;
    @include pointer();

    .blog-icon--blog {
      padding-right: 6PX;
    }
  }

  .blog-icon--bars {
    font-size: 32PX;
  }
}
</style>
