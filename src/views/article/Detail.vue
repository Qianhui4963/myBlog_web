<template>
  <Layout>
    <template #main>
      <div ref="mainContainer" class="main-container" v-loading="isLoading">
        <BlogDetail :blog="data" />
        <BlogComment v-if="!isLoading" />
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlog } from "@/api/getBlogs.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";
export default {
  mixins: [fetchData({}), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const result = await getBlog(this.$route.params.id);
      if (!result) {
        this.$router.push("/404");
        return;
      }
      return result;
    },
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  width: 250px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}
</style>