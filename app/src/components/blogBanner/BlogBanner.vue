<script>
import InfoCard from './components/infoCard/InfoCard'

export default {
  components: {
    InfoCard
  },
  data() {
    return {}
  }
}
</script>

<template>
  <section class="blog-banner">
    <InfoCard />
  </section>
</template>

<style lang="scss" scoped>
.blog-banner {
  height: 100vh;
}
</style>
