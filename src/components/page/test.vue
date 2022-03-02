<template>
  <div>
    <h1>App组件</h1>
    <Page :total="total" :current="current" @pageChange="handlePageChange($event)" />
  </div>
</template>

<script>
import Page from "./"
export default {
  data(){
    return {
      total:203,
      current:7
    }
  },
  components: {
    Page
  },
  methods:{
    // 处理子组件抛出的事件
    handlePageChange(e){
      this.current = e
      console.log("加载当前页数据")
    }
  }
};
</script>
