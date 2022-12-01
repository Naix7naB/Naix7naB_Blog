<script>
import SearchBar from './components/searchBar/SearchBar'

export default {
  name: 'Navigator',
  components: { SearchBar },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <nav class="blog-navigator">
    <SearchBar />
    <ul class="blog-nav--list hidden-xs-only">
      <li class="blog-nav--item" v-for="item in list" :key="item.name">
        <a href="javascript:;">
          <font-awesome-icon :icon="['fa-solid', `fa-${item.icon}`]" />
          <span class="blog-nav--title">{{item.title}}</span>
        </a>
      </li>
    </ul>
    <div class="hidden-sm-and-up">
      <font-awesome-icon icon="fa-solid fa-minus" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.blog-navigator {
  display: flex;
  align-items: center;

  .blog-nav--list {
    display: flex;
    align-items: center;
    font-size: $fz-medium;

    .blog-nav--item {
      margin: 0 10px;
      padding: 8px 10px;
      border-radius: 6px;
      transition: 0.2s ease-in;

      &:hover {
        background-color: rgba($color: #7f7f7f, $alpha: 0.3);
      }

      .blog-nav--title {
        margin-left: 4px;
      }
    }
  }
}
</style>
