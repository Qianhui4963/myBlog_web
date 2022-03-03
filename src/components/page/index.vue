<template>
  <div class="page-container" v-if="pageNumber > 1">
    <a href="#" @click="handClick(1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      href="#"
      @click="handClick(current - 1)"
      :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      href="#"
      @click="handClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      href="#"
      @click="handClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      href="#"
      @click="handClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
  </div>
</template>

<script>
// 组件事件：
// 1.抛出事件。子组件在某个时候发生了一件事，但自身无法处理，于是通知父组件处理
// 2.事件参数。子组件抛出事件时，传递给父组件的数据
// 3.注册事件。父组件申明，当子组件发生某件事的时候，自身将做出一些处理


export default {
  props: {
    // 当前的页数
    current: {
      type: Number,
      default: 1,
    },
    // 总数据
    total: {
      type: Number,
      default: 100,
    },
    // 限制。限制每一页有多少条数据
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码的数量
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 显示的页码的数字
    numbers() {
      let nums = [];
      for (let i = this.visibleMinPage; i <= this.visibleMaxPage; i++) {
        nums.push(i);
      }
      return nums;
    },
    // 显示最小的页码数
    visibleMinPage() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 显示最大的页码数
    visibleMaxPage() {
      let max = this.current + Math.floor(this.visibleNumber / 2) - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
  },
  methods: {
    // 处理点击事件
    handClick(newpage) {
      if (newpage < 1) {
        newpage = 1;
      }
      if (newpage > this.pageNumber) {
        newpage = this.pageNumber;
      }
      if (newpage == this.current) {
        return;
      }
      // 向父组件抛出一个事件
      this.$emit("pageChange", newpage);
    },
  },
};
</script>


<style lang="less" scoped>
// ~@ 表示src目录
@import "~@/styles/var.less";
.page-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>