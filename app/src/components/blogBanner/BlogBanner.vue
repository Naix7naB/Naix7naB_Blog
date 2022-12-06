<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('scroll')

import InfoCard from './components/infoCard/InfoCard'
import PullDownBtn from './components/pullDownBtn/PullDownBtn'

export default {
  components: {
    InfoCard,
    PullDownBtn
  },
  computed: {
    ...mapState(['scrollY'])
  }
}
</script>

<template>
  <section class="blog-banner g-relative">
    <InfoCard />
    <transition name="fade">
      <PullDownBtn v-if="scrollY < 400" />
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.blog-banner {
  height: 100vh;
}
</style>
