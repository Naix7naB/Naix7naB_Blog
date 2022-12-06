<script>
export default {
  name: 'Info',
  data() {
    return {
      timer: null,
      quotesPhrase: '秦时明月汉时关，万里长征人未还。'
    }
  },
  methods: {
    fillLetters(income) {
      clearInterval(this.timer)
      const letterArr = income.split('')
      this.quotesPhrase = ''
      this.timer = setInterval(() => {
        this.quotesPhrase += letterArr.shift()
        if (!letterArr[0]) {
          clearInterval(this.timer)
        }
      }, 200)
    }
  },
  mounted() {
    this.fillLetters(this.quotesPhrase)
  }
}
</script>

<template>
  <div class="blog-banner--info">
    <span class="blog-site--name" :style="{ fontSize: '30px' }">&#35;7x&#180;s Blog</span>
    <p class="blog-info--item">
      <font-awesome-icon icon="fa-solid fa-quote-left" size="lg" :style="{ paddingRight: '4px' }" />
      <span>{{ quotesPhrase }}</span>
      <font-awesome-icon icon="fa-solid fa-window-minimize" fade />
      <font-awesome-icon icon="fa-solid fa-quote-right" size="lg" :style="{ paddingLeft: '4px' }" />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--info {
  width: 63%;
  margin: 32PX auto 40PX;
  padding: 20PX;
  text-align: center;
  border-radius: 12PX;
  backdrop-filter: blur(10PX);
  background-color: $bg-theme-ll;

  .blog-info--item {
    padding-top: 20PX;
    font-size: $fz-medium;
  }
}
</style>
