<script>
import avatarPic from '@/assets/images/avatar-default.png'

export default {
  data() {
    return {
      defaultAvatar: avatarPic
    }
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
    @include pointer();
    width: 130PX;
    height: 130PX;
    border: 6PX solid #515151;
    border-radius: 50%;
    box-shadow: 0 0 20PX #333;
  }
}
</style>
