<script>
export default {
  name: 'ContentArea'
}
</script>

<template>
  <ul class="blog-main--content">
    <li class="blog-content--item" v-for="item in 8" :key="item">
      <el-card class="blog-content--card">{{ item }}</el-card>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.blog-main--content {
  .blog-content--item ~ .blog-content--item {
    margin-top: 20PX;
  }

  .blog-content--item {
    height: 300PX;

    .blog-content--card {
      height: 100%;
    }
  }
}
</style>
