<script>
import Profile from './components/profile/Profile'

export default {
  name: 'AsideBar',
  components: {
    Profile
  }
}
</script>

<template>
  <div class="blog-main--aide">
    <Profile />
  </div>
</template>

<style lang="scss" scoped>
.blog-main--aside {
  height: 500PX;
  border: none;
  border-radius: 10px;
}
</style>
