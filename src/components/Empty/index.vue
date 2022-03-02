<template>
  <div class="empty-container">
    <div class="empty">
      <img :src="emptyImg" alt="" />
      <p>{{ txt }}</p>
    </div>
  </div>
</template>

<script>
import emptyImg from "@/assets/empty.svg";
export default {
  data() {
    return {
      emptyImg,
    };
  },
  props: {
    txt: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  width: 100%;
  height: 100%;
  .empty {
    .self-center();
    text-align: center;
    img {
      opacity: 0.4;
      -webkit-user-drag: none;
    }
  }
}
</style>