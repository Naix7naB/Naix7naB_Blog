<script>
import Navigator from './components/navigator/Navigator'

export default {
  name: 'BlogHeader',
  components: { Navigator },
  data() {
    return {
      routes: [
        {
          name: 'Home',
          title: '主页',
          icon: 'home'
        },
        {
          name: 'Messages',
          title: '留言板',
          icon: 'comments'
        },
        {
          name: 'Photos',
          title: '相册',
          icon: 'images'
        },
        {
          name: 'About',
          title: '关于',
          icon: 'circle-info'
        },
        {
          name: 'Personal',
          title: '个人中心',
          icon: 'user'
        }
      ]
    }
  }
}
</script>

<template>
  <header class="blog-header">
    <el-row class="blog-header--wrap">
      <el-col class="blog-logo" tag="h1" :span="8">
        <a href="javascript:;">
          <font-awesome-icon icon="fa-solid fa-blog" />
          <span class="blog-logo--title">&#35;7x Blog</span>
        </a>
      </el-col>
      <el-col :span="16">
        <Navigator :list="routes" />
      </el-col>
    </el-row>
  </header>
</template>

<style lang="scss" scoped>
.blog-header {
  padding: 1% 5%;
  box-shadow: 0 0 10px #333;

  .blog-header--wrap {
    display: flex;
    align-items: center;

    .blog-logo {
      font-size: 32px;

      .blog-logo--title {
        margin-left: 10px;
        font-family: kanit;
      }
    }
  }
}
</style>
