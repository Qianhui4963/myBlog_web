<template>
  <div class="test-container">
    <ImageLoader
      :placeholder="'https://img1.baidu.com/it/u=1412308616,663639534&fm=26&fmt=auto'"
      :src="'https://cdn.pixabay.com/photo/2021/08/20/14/53/monastery-6560623_1280.jpg'"
      @load="handleLoaded"
      :duration="1000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("ImageLoader组件load事件触发，组件加载完毕");
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>