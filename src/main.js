// 入口文件
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
// 引入路由配置
import router from "./router"
// 引入Vuex仓库配置
import store from "./store"
// 拦截ajax请求
import "@/mock"
// 监控事件总线
import "./eventBus"

// 也可以把showMessage放入实例中。简化调用
// import showMessage from './utils/showMessage';
// Vue.prototype.showMessage = showMessage;

// 注册自定义指令。v-loading
import vLoading from "@/directives/vLoading"
Vue.directive("loading", vLoading)
import vLazy from "@/directives/lazy"
Vue.directive("lazy", vLazy)

// 初始化，获取全局数据
store.dispatch("setting/fetchSetting")


new Vue({
  // 配置路由。router:router,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
