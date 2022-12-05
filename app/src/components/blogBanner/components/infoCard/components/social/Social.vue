<script>
import wechatPic from '@/assets/images/wechat.png'
import qqPic from '@/assets/images/qq.png'
import ncmPic from '@/assets/images/ncm.png'
import mailPic from '@/assets/images/mail.png'

export default {
  data() {
    return {
      socialList: [
        {
          title: 'Wechat',
          imageUrl: wechatPic
        },
        {
          title: 'QQ',
          imageUrl: qqPic
        },
        {
          title: 'NeteaseCloudMusic',
          imageUrl: ncmPic
        },
        {
          title: 'E-mail',
          imageUrl: mailPic
        }
      ]
    }
  }
}
</script>

<template>
  <ul class="blog-banner--social">
    <li class="blog-social--item" v-for="item in socialList" :key="item.title">
      <el-image
        class="blog-social--pic"
        fit="cover"
        :title="item.title"
        :src="item.imageUrl"
        :alt="item.title"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.blog-banner--social {
  display: flex;
  justify-content: center;
  align-items: center;

  .blog-social--item {
    margin: 0 10px;
    @include pointer();

    .blog-social--pic {
      width: 50PX;
      height: 50PX;
      padding: 10PX;
      border-radius: 15PX;
      background-color: rgba($color: #aaa, $alpha: .8);
    }
  }
}
</style>
