<script>
import { mapState } from 'vuex'

export default {
  name: 'AsideBar',
  computed: {
    ...mapState(['defaultAvatar'])
  }
}
</script>

<template>
  <el-card class="blog-main--aside">
    <el-image fit="cover" :src="defaultAvatar" />
  </el-card>
</template>

<style lang="scss" scoped>
.blog-main--aside {
  height: 500PX;
  border: none;
  border-radius: 10px;
}
</style>
