<template>
  <div class="home">
    <Navigator />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'

export default {
  name: 'Home',
  components: {
    Navigator
  }
}
</script>
