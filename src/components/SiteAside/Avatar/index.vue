<template>
  <div
    class="avatar"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <img class="avatar_img" :src="url" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 150, // 默认值
    },
    height: {
      type: Number,
      default: 150, // 默认值
    },
  },
};
</script>

<style scoped>
.avatar {
  margin: 0 auto 30px;
}
/* scoped保证类名不冲突 */
/* 带有作用域的样式 */
.avatar_img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
</style>