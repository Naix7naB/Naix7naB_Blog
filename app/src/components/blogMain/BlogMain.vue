<script>
import AsideBar from './components/asideBar/AsideBar'
import ContentArea from './components/contentArea/ContentArea'

export default {
  name: 'BlogMain',
  components: {
    AsideBar,
    ContentArea
  },
  data() {
    return {}
  }
}
</script>

<template>
  <el-row class="blog-main" tag="section">
    <el-col class="hidden-xs-only" tag="aside" :span="6">
      <AsideBar />
    </el-col>
    <el-col tag="main" :span="17" :offset="1">
      <ContentArea />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.blog-main {
  max-width: 1350PX;
  margin: 0 auto;
  padding: 0 3%;
}
</style>
