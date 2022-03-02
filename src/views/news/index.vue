<template>
  <div class="news-container" ref="newsContainer">
    <MessageArea
      :title="'留言板'"
      :total="data.total"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import * as MesApi from "@/api/getMessage";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [fetchData(), mainScroll("newsContainer")],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    MessageArea,
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return MesApi.getMessages(this.page, this.limit);
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
    async handleSubmit(data, fn) {
      const result = await MesApi.postMessage(data);
      this.data.rows.unshift(result);
      this.data.total++;
      fn("提交完成");
    },
    // 监控滚动条是否将要到达底部。因为与mixins的handleScroll重名
    handleScroll_(dom) {
      if ((this.isLoading && this.hasMore) || !dom) {
        return;
      }
      const range = 150;
      // 元素的全高(包括溢出部分) - 当前元素(相对于视口)到顶部的距离 - 当前元素的高(相对于视口)
      let dif = Math.abs(dom.scrollHeight - dom.scrollTop - dom.clientHeight);
      console.log(dom);
      if (dif <= range) {
        this.fetchMore();
      }
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll_);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll_);
  },
};
</script>

<style scoped lang="less">
.news-container {
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>