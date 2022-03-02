import Vue from 'vue'
export default function (comp, props) {
    const vm = new Vue({ render: (h) => h(comp, { props }), });
    vm.$mount();
    // $el是渲染的dom元素
    return vm.$el;
}