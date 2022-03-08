// 入口文件
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
// 引入路由配置
import router from "./router"
// 引入Vuex仓库配置
import store from "./store"
// 监控事件总线
import "./eventBus"

Vue.prototype.$S_URL = 'http://127.0.0.1:7001'


// 注册自定义指令。v-loading
import vLoading from "@/directives/vLoading"
Vue.directive("loading", vLoading)
import vLazy from "@/directives/lazy"
Vue.directive("lazy", vLazy)

// 初始化，获取全局数据
store.dispatch("setting/fetchSetting")


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
