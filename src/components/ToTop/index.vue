<template>
  <div v-show="isShow" @click="handleClick" class="to-top-container">
    <Icon :type="'totop'" />
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.isShow = false;
        return;
      }
      this.isShow = dom.scrollTop >= dom.clientHeight;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll",0)
    },
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style scoped lang="less">
.to-top-container {
  position: fixed;
  right: 6%;
  bottom: 6%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
  cursor: pointer;
  z-index: 999;
}
</style>