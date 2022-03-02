<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.active }"
        >{{ item.name }} </span
      ><span
        @click="handleClick(item)"
        v-if="item.aside"
        :class="{aside:true, active: item.active }"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleClick(item)" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  data() {
    return {};
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.right-list-container {
  list-style: none;
  padding: 0;
  overflow-y: auto;
  .right-list-container {
    margin-left: 1rem;
  }
  li {
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1em;
    color: @gray;
  }
}
</style> 