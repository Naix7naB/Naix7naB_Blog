<script>
export default {
  name: 'Info',
  data() {
    return {
      timer: null,
      quotesPhrase: '秦时明月汉时关，万里长征人未还。',
      introPhrase: 'Naix7naB'
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
    <p class="blog-info--item">
      <font-awesome-icon class="blog-icon--left" icon="fa-solid fa-quote-left" size="lg" />
      <span>{{ quotesPhrase }}</span>
      <font-awesome-icon icon="fa-solid fa-window-minimize" fade />
      <font-awesome-icon class="blog-icon--right" icon="fa-solid fa-quote-right" size="lg" />
    </p>
    <p class="blog-info--item">
      <span class="blog-intro--txt">{{ introPhrase }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--info {
  width: 63%;
  margin: 32PX auto 40PX;
  padding: 20PX;
  border-radius: 12PX;
  backdrop-filter: blur(10PX);
  background-color: $bg-theme-ll;

  .blog-info--item {
    line-height: $lh-large;
    text-align: center;
    font-weight: 300;
    font-size: $fz-medium;

    .blog-icon--left {
      padding-right: 4PX;
    }

    .blog-icon--right {
      padding-left: 4PX;
    }

    .blog-intro--txt {
      transition: .3s ease-out;

      &:hover {
        color: $cl-hover;
      }
    }
  }
}
</style>
