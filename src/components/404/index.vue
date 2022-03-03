<template>
  <div class="nothingness">
    <img :src="nothingness" alt="" />
  </div>
</template>

<script>
import nothingness from "@/assets/404.svg";
export default {
  data() {
    return {
      nothingness,
    };
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.nothingness {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-center();
  }
}
</style>