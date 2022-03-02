<template>
  <div class="image-loader-container">
    <img class="placeholder" :src="placeholder" v-if="!everythingDone" alt="" />
    <img
      class="origin"
      :src="src"
      :duration="duration"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="handleLoad"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everythingDone: false, // 一切是否完成
    };
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      // console.log("原图加载完成————");
      // console.log("正在删除遮罩图");
      setTimeout(() => {
        this.everythingDone = true;
        // console.log("遮罩图以删除");
        this.$emit("load");
      }, this.duration);
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  // 不能被当做文本选择，禁用文本选择
  user-select: none;
  //   .origin {
  //     opacity: 0;
  //   }
  //   .placeholder {
  //     font-size: 20px;
  //   }
  img {
    .self-fill();
    object-fit: cover;
  }
}
</style>