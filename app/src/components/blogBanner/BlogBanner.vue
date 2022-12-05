<script>
import InfoCard from './components/infoCard/InfoCard'
import PullDownBtn from './components/pullDownBtn/PullDownBtn'

export default {
  components: {
    InfoCard,
    PullDownBtn
  },
  data() {
    return {}
  }
}
</script>

<template>
  <section class="blog-banner">
    <InfoCard />
    <PullDownBtn />
  </section>
</template>

<style lang="scss" scoped>
.blog-banner {
  position: relative;
  height: 100vh;
}
</style>
