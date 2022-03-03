<template>
  <div v-if="blog">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期：{{ formatDate(blog.createDate || new Date()) }}</span>
      <span>浏览：{{ blog.scanNumber || 0 }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber || 0 }}</a>
      <router-link
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        v-if="blog.category"
        >{{ blog.category.name }}</router-link
      >
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formatDate from "@/utils/formatDate.js";
import "@/styles/markdown.css";
export default {
  methods: {
    formatDate,
  },
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  // 当页面加载完成，滚动到相应的区域
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 500);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  margin-bottom: 2em;
  span,
  a {
    margin-left: 15px;
  }
}
</style>