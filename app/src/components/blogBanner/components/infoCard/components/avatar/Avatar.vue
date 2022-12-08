<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['defaultAvatar'])
  },
  methods: {
    goHome() {
      console.log('go home')
    }
  }
}
</script>

<template>
  <div class="blog-banner--avatar">
    <el-image
      class="blog-avatar--pic"
      alt="avatar"
      fit="cover"
      :src="defaultAvatar"
      @click="goHome"
    />
  </div>
</template>

<style lang="scss" scoped>
.blog-banner--avatar {
  text-align: center;

  .blog-avatar--pic {
    width: 130PX;
    height: 130PX;
    border: 6PX solid $bg-gray-ll;
    border-radius: 50%;
    box-shadow: 0 0 20PX $bg-theme;
    transition: transform .8s ease;

    &:hover {
      @include pointer();
      transform: rotate(360deg);
    }
  }
}
</style>
