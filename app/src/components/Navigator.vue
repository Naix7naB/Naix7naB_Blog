<template>
  <div class="navigator">
    <router-link v-for="route in routes" :to="{ name: route.name }" :key="route.name">
      {{ route.title }}
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Navigator',
  data() {
    return {
      routes: [
        {
          name: 'Home',
          title: '主页'
        },
        {
          name: 'Tips',
          title: '心得'
        },
        {
          name: 'Article',
          title: '文章'
        },
        {
          name: 'Album',
          title: '相册'
        },
        {
          name: 'Personal',
          title: '个人中心'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navigator {
  display: flex;
  align-items: center;
  @include bg-image('@/assets/img/logo');
}

a {
  padding: 2px 10px;
  color: #42b983;
  text-decoration: underline;
}
</style>
