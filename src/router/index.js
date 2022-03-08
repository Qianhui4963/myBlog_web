import Vue from 'vue'
import VueRouter from "vue-router"
import titleControl from "@/utils/titleControl"

Vue.use(VueRouter)    // 使用一个Vue插件
const router = new VueRouter({
  // 配置
  routes: [
    {
      name: "home", path: "/", component: () => import('@/views/home'), meta: {
        title: "主页"
      }
    },
    {
      name: "article", path: "/article", component: () => import('@/views/article'), meta: {
        title: "文章"
      }
    },
    {
      name: "CategoryBlog", path: "/article/cate/:categoryId", component: () => import('@/views/article'), meta: {
        title: "文章"
      }
    },
    {
      name: "ArticleDetail", path: "/article/:id", component: () => import('@/views/article/Detail.vue'), meta: {
        title: "文章详情"
      }
    },
    {
      name: "about", path: "/about", component: () => import('@/views/about'), meta: {
        title: "关于我"
      }
    },
    {
      name: "project", path: "/project", component: () => import('@/views/project'), meta: {
        title: "项目&效果"
      }
    },
    {
      name: "news", path: "/news", component: () => import('@/views/news'), meta: {
        title: "留言板"
      }
    },
    {
      name: "404", path: "*", component: () => import('@/components/404')
    }
  ],
  // 路由模式
  mode: "history"
})

// 路由守卫。
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleControl.setRouteTitle(to.meta.title)
  }
})

// 导出配置项
export default router;