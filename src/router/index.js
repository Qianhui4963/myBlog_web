import Vue from 'vue'
import VueRouter from "vue-router"
import titleControl from "@/utils/titleControl"

Vue.use(VueRouter)    // 使用一个Vue插件
import Home from "../views/home"
import Article from "../views/article"
import About from "../views/about"
import Project from "../views/project"
import News from "../views/news"
import Detail from "../views/article/Detail.vue"
// 404页面
import nothingness from "@/components/404"

const router = new VueRouter({
  // 配置
  routes: [
    {
      name: "home", path: "/", component: Home, meta: {
        title: "主页"
      }
    },
    {
      name: "article", path: "/article", component: Article, meta: {
        title: "文章"
      }
    },
    {
      name: "CategoryBlog", path: "/article/cate/:categoryId", component: Article, meta: {
        title: "文章"
      }
    },
    {
      name: "ArticleDetail", path: "/article/:id", component: Detail, meta: {
        title: "文章详情"
      }
    },
    {
      name: "about", path: "/about", component: About, meta: {
        title: "关于我"
      }
    },
    {
      name: "project", path: "/project", component: Project, meta: {
        title: "项目&效果"
      }
    },
    {
      name: "news", path: "/news", component: News, meta: {
        title: "留言板"
      }
    },
    {
      name: "404", path: "*", component: nothingness
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