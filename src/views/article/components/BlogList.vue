<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div v-if="item.thumb" class="thumb">
          <router-link
            :to="{
              name: 'ArticleDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img
              v-lazy="$S_URL + item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </router-link>
        </div>
        <div class="main">
          <router-link
            :to="{
              name: 'ArticleDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <router-link
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              class=""
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Page
      v-if="data.total"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Page from "@/components/page";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlogs } from "@/api/getBlogs.js";
import formatDate from "@/utils/formatDate.js";
export default {
  // 监控当前页的路由信息$route
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  mixins: [fetchData({}), mainScroll("container")],
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newpage) {
      const query = {
        page: newpage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        // 当前没有分类
        this.$router.push({
          name: "article",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  computed: {
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  components: {
    Page,
  },
};
</script>



<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    position: relative;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
