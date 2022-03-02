<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from "@/api/getBlogs.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      // 给reduce传一个初始值0，并把它作为参数的第一项
      const totalArticleCount = this.data.reduce((a, b) => {
        return a + b.articleCount;
      }, 0);
      const result = [
        { name: "全部", articleCount: totalArticleCount, id: -1 },
        ...this.data,
      ].map((item) => {
        return {
          active: this.categoryId === item.id,
          aside: item.articleCount + "篇",
          ...item,
        };
      });
      return result;
    },
    limit() {
      return this.$route.query.limit || 10;
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleClick(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 如果点击的还是当前分类，不跟该路由
      if(item.id == this.categoryId){return}
      if (item.id === -1) {
        this.$router.push({
          name: "article",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>