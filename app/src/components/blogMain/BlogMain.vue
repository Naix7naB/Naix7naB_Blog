<script>
import AsideBar from './components/asideBar/AsideBar'
import ContentArea from './components/contentArea/ContentArea'

export default {
  name: 'BlogMain',
  components: {
    AsideBar,
    ContentArea
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
:deep(.el-card) {
  color: $cl-theme;
  border: none;
  border-radius: 10PX;
  background-color: $bg-sub-theme;
  box-shadow: 1PX 4PX 16PX rgba($color: #435672, $alpha: .5);
}

.blog-main {
  max-width: 1350PX;
  margin: 0 auto;
  padding: 30PX;
}
</style>
