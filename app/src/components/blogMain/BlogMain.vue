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
  <section class="blog-main">
    <el-row :gutter="20">
      <el-col class="hidden-xs-only" tag="aside" :span="8">
        <AsideBar />
      </el-col>
      <el-col tag="main" :xs="24" :sm="16">
        <ContentArea />
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
.blog-main {
  max-width: 1350PX;
  margin: 0 auto;
  padding: 0 30PX;
}
</style>
