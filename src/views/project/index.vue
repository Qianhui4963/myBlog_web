<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="item.url ? item.url : `javascript:alert('该项目无法访问')`"
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="project-thumb" v-lazy="item.thumb"
      /></a>
      <div class="project-item-info">
        <h2>
          <a
            :href="item.url ? item.url : `javascript:alert('该项目无法访问')`"
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a class="github" target="_blank" v-if="item.github"> github </a>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </div>
    <Empty v-if="!data.length && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [mainScroll("projectContainer")],
  computed: mapState("project", ["data", "loading"]),
  components: {
    Empty,
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .project-thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .project-item-info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>