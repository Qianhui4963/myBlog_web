<template>
  <div class="test-contatiner">
    <Layout>
      <template #left>
        <SiteAside />
        <!-- <div class="left">左边区域。component .n组成部分,部分，adj.组成的</div> -->
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.test-contatiner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: hidden;
  .self-fill(fixed);
}
.left {
  width: 200px;
  height: 100%;
  background: #fe5000;
  position: relative;
}
.main {
  width: 100%;
  height: 100%;
  background: #0099e5;
  position: relative;
}
.right {
  width: 150px;
  height: 100%;
  background: #279b37;
  position: relative;
}
</style>