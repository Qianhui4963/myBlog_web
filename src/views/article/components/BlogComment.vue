<template>
  <div class="blog-comment-container">
    <MessageArea
      :title="'评论列表'"
      :total="data.total"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/getBlogs.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if (!this.hasMore) {
        return;
      }
      this.page++;
      this.isLoading = true;
      const result = await this.fetchData();
      this.data.total = result.total;
      this.data.rows = this.data.rows.concat(result.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, fn) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      fn("评论成功"); // 告诉子组件，我已经处理完了
    },
    // 监控滚动条是否将要到达底部
    handleScroll(dom) {
      if (this.isLoading && this.hasMore || !dom) {
        return;
      }
      const range = 150;
      // 元素的全高(包括溢出部分) - 当前元素(相对于视口)到顶部的距离 - 当前元素的高(相对于视口)
      let dif = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight);
      if (dif <= range) {
        this.fetchMore();
      }
    },
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
  position: relative;
}
</style>