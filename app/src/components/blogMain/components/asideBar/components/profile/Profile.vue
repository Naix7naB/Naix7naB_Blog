<script>
import { mapState } from 'vuex'

import INSET_IMAGE from '@/assets/images/inset.png'

export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        author: '#7x',
        intro: '一个社恐的coder',
        infos: [
          {
            title: '文章',
            count: 35
          },
          {
            title: '标签',
            count: 7
          },
          {
            title: '分类',
            count: 23
          }
        ]
      },
      recommends: [
        {
          aid: '00001',
          title: '推荐文章标题1',
          inset: INSET_IMAGE,
          date: 1669824000000
        },
        {
          aid: '00002',
          title: '推荐文章标题2',
          inset: INSET_IMAGE,
          date: 1669996800000
        },
        {
          aid: '00003',
          title: '推荐文章标题3',
          inset: INSET_IMAGE,
          date: 1670169600000
        },
        {
          aid: '00004',
          title: '推荐文章标题4',
          inset: INSET_IMAGE,
          date: 1670342400000
        },
        {
          aid: '00005',
          title: '推荐文章标题5',
          inset: INSET_IMAGE,
          date: 1670169600000
        }
      ]
    }
  },
  computed: {
    ...mapState(['defaultAvatar'])
  }
}
</script>

<template>
  <el-card class="blog-aside--profile">
    <template #header>
      <el-image class="blog-profile--avatar" fit="cover" :src="defaultAvatar" />
      <span class="blog-profile--author">{{ profile.author }}</span>
      <span class="blog-profile--intro">{{ profile.intro }}</span>
      <ul class="blog-profile--info">
        <li class="blog-info--item" v-for="info in profile.infos" :key="info.title">
          <a href="javascript:;">
            <span>{{ info.title }}</span>
            <span>{{ info.count }}</span>
          </a>
        </li>
      </ul>
    </template>
    <template #default>
      <ul class="blog-profile--recommend">
        <li class="blog-recommend--item" v-for="item in recommends" :key="item.aid">
          <el-image class="blog-recommend--inset" :src="item.inset" />
          <div class="blog-recommend--content">
            <p>{{ item.title }}</p>
            <p>{{ item.date }}</p>
          </div>
        </li>
      </ul>
    </template>
  </el-card>
</template>

<style lang="scss" scoped>
:deep(.el-card__header) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-aside--profile {
  font-size: $fz-small;

  .blog-profile--avatar {
    width: 100PX;
    height: 100PX;
    border-radius: 50%;
  }

  .blog-profile--author {
    padding-top: 20PX;
    font-size: $fz-large-x;
    font-weight: 700;
  }

  .blog-profile--intro {
    font-size: $fz-medium;
    padding: 10PX 0 16PX;
  }

  .blog-info--item ~ .blog-info--item {
    border-left: 1px solid $bg-gray-l;
  }

  .blog-info--item {
    display: inline-block;
    padding: 0 12PX;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: $lh-small-s;
    }
  }

  .blog-recommend--item ~ .blog-recommend--item {
    margin-top: 10PX;
  }

  .blog-recommend--item {
    display: flex;

    .blog-recommend--inset {
      width: 64PX;
      margin-right: 16PX;
    }

    .blog-recommend--content {
      flex: 1;
      line-height: $lh-medium;
    }
  }
}
</style>
