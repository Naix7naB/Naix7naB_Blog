<script>
export default {
  data() {
    return {
      inputVal: '',
      placeholder: '搜索',
      isExtend: false
    }
  },
  methods: {
    extendInput() {
      if (this.isExtend) return false
      this.isExtend = true
      this.onFocus()
    },
    hideInput(e) {
      if (e.relatedTarget === this.$refs.clearBtnRef) {
        this.onFocus()
      } else {
        this.isExtend = false
      }
    },
    onFocus() {
      this.$refs.inputRef.focus()
    },
    clearInput() {
      this.inputVal = ''
    }
  }
}
</script>

<template>
  <div :class="['blog-nav--search', 'g-relative', { open: isExtend }]">
    <button class="blog-search--btn" @click="extendInput">
      <font-awesome-icon class="blog-icon--search" icon="fa-solid fa-search" size="xl" />
    </button>
    <input
      type="text"
      ref="inputRef"
      v-model.trim="inputVal"
      :class="['blog-search--input', { active: isExtend }]"
      :placeholder="placeholder"
      @blur="hideInput"
    />
    <button class="blog-search--btn clear" ref="clearBtnRef" v-if="inputVal" @click="clearInput">
      <font-awesome-icon class="blog-icon--clear" icon="fa-solid fa-xmark" size="lg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.blog-nav--search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  border-radius: 8PX;
  background-color: transparent;
  transition: 0.5s ease-in;

  &.open {
    background-color: $bg-theme-ll;
  }

  .blog-search--input {
    box-sizing: border-box;
    width: 0;
    height: 44PX;
    padding: 0;
    color: $cl-theme;
    font-size: $fz-small;
    background-color: transparent;
    transition: 0.5s cubic-bezier(0.4, 0, 0, 1);

    &.active {
      width: 200px;
      padding: 10PX 10PX 10PX 0;
    }
  }

  :where(.blog-search--btn) {
    padding: 0;
    background-color: transparent;

    &.clear {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 10PX;
    }
  }

  .blog-icon--search {
    padding: 12PX;
  }

  .blog-icon--clear {
    padding: 4PX;
  }
}
</style>
