<script>
import { mapState } from 'vuex'
import { formatDate } from '@/utils/util'

import PROFILE_BG_IMAGE from '@/assets/images/profile-bg.png'
import INSET_IMAGE from '@/assets/images/inset.png'

export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        author: '#7x',
        intro: '让我为自己辩解，我所有初衷都是善意的。',
        bgImage: PROFILE_BG_IMAGE,
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
          date: formatDate(1669824000000)
        },
        {
          aid: '00002',
          title: '推荐文章标题2',
          inset: INSET_IMAGE,
          date: formatDate(1669996800000)
        },
        {
          aid: '00003',
          title: '推荐文章标题3',
          inset: INSET_IMAGE,
          date: formatDate(1670169600000)
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
  <el-card class="blog-aside--profile" :style="{ backgroundImage: `url(${profile.bgImage})` }">
    <template #header>
      <el-image class="blog-profile--avatar" fit="cover" :src="defaultAvatar" />
      <span class="blog-profile--author">{{ profile.author }}</span>
      <span class="blog-profile--intro">{{ profile.intro }}</span>
      <ul class="blog-profile--info">
        <li class="blog-info--item" v-for="info in profile.infos" :key="info.title">
          <a href="javascript:;">
            <span>{{ info.count }}</span>
            <span>{{ info.title }}</span>
          </a>
        </li>
      </ul>
    </template>
    <template #default>
      <ul class="blog-profile--recommend">
        <li class="blog-recommend--item" v-for="item in recommends" :key="item.aid">
          <el-image class="blog-recommend--inset" :src="item.inset" />
          <div class="blog-recommend--content">
            <p class="blog-recommend--title">
              {{ item.title }}{{ item.title }}{{ item.title }}{{ item.title }}
            </p>
            <span class="blog-recommend--date">
              <font-awesome-icon
                class="blog-date--icon"
                icon="fa-solid fa-clock"
              />{{ item.date }}</span
            >
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
  padding: 20PX;
  align-items: center;
  border-bottom: 1px solid $bg-gray-l;
}

.blog-aside--profile {
  line-height: $lh-medium;
  font-size: $fz-medium-x;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 120PX;

  .blog-profile--avatar {
    width: 80PX;
    height: 80PX;
    border-radius: 50%;
    margin-bottom: 20PX;
  }

  .blog-profile--intro {
    padding: 16PX 0;
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
    }
  }

  .blog-recommend--item ~ .blog-recommend--item {
    margin-top: 16PX;
  }

  .blog-recommend--item {
    display: flex;
    font-size: $fz-small;

    .blog-recommend--inset {
      flex-shrink: 0;
      width: 64PX;
      margin-right: 16PX;
    }

    .blog-recommend--content {
      flex: 1;
      overflow: hidden;

      .blog-recommend--title {
        @include  no-wrap();
      }

      .blog-date--icon {
        padding-right: 4PX;
      }
    }
  }
}
</style>
