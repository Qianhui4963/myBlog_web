import Vue from "vue"
const app = new Vue({})
// 监控事件总线
// 用于添加、监控、移除事件
// 事件名：mainScroll。绑定的主区域滚动条发生变化后触发
// 滚动的dom元素，如果是undefined，则表示dom元素已经不存在
// 事件名：setMainScroll
// 含义：当需要设置主区域滚动条位置时触发
// 参数：滚动高度
Vue.prototype.$bus = app
export default app