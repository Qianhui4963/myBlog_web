<template>
  <div class="about-container" v-loading="loading">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
    ></iframe>
    <!-- @load="..." -->
    <Empty v-if="!src && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Empty from "@/components/Empty";
export default {
  data() {
    return {
      srcIsLoading: true,
    };
  },
  components: {
    Empty,
  },
  computed: mapState("about", {
    // 改名字
    src: "data",
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>