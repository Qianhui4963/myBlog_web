<template>
  <div class="layout-contatiner">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">
html,body{
  width: 100%;
  height: 100%;
}
.layout-contatiner {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right{
      flex: 0 0 auto;
      overflow: hidden;
  }
  .main{
      flex:1 1 auto;
      overflow: hidden;
  }
}
</style>