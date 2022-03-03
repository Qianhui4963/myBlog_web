<template>
  <div v-if="toc" class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import debounce from "@/utils/debounce.js";
export default {
  data() {
    return {
      activeAnchor: "article-md-title-1",
      // 监控主区域的滚动条，从而跟改选择效果
      setSelectDebounce: Function,
    };
  },
  components: {
    RightList,
  },
  props: {
    toc: {
      required: true,
    },
  },
  computed: {
    toWithSelect() {
      let getTOC = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            active: this.activeAnchor === item.anchor,
            // 利用递归每一项插入active属性
            children: getTOC(item.children),
          };
        });
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const addDoms = (toc) => {
        for (const i of toc) {
          doms.push(document.getElementById(i.anchor));
          if (i.children && i.children) {
            addDoms(i.children);
          }
        }
      };
      addDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor正确的值
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      const range = 200;
      for (const dom of this.doms) {
        // 判断当前的dom元素是不是被选中。
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
};
</script>

<style>
.blog-toc-container {
  width: 100%;
}
</style>