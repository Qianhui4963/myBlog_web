<template>
  <div class="message-area-container">
    <!-- v-on="{submit:handleSubmit}" -->
    <!-- 利用$listeners把子组件的事件处理函数原封不动的传给父组件 -->
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span v-if="total">({{ total }})</span>
    </h3>
    <DataList :list="list" />
    <div v-loading="isListLoading" class="loading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.loading {
  height: 100px;
  position: relative;
}
</style>