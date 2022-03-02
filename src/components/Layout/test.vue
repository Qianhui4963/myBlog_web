<template>
  <div class="test-contatiner">
    <Layout>
      <template #left>
        <SiteAside />
        <!-- <div class="left">左边区域。component .n组成部分,部分，adj.组成的</div> -->
      </template>
      <template #main>
        <div class="main">主区域。template .n模板</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import SiteAside from "@/components/SiteAside"
export default {
  components: {
    Layout,
    SiteAside
  },
};
</script>

<style scoped>
.test-contatiner{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: hidden;
}
.left{
    width: 200px;
    height: 100%;
    background: #fe5000;
}
.main{
    width: 100%;
    height: 100%;
    background: #0099e5;
}
.right{
    width: 150px;
    height: 100%;
    background: #279b37;
}

</style>