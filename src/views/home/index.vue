<template>
  <div
    v-loading="loading"
    class="home-contatiner"
    ref="contatiner"
    @wheel="handleWheel"
  >
    <ul
      @transitionend="switching = false"
      class="carousel-contatiner"
      :style="{ marginTop: -current * contatinerHeight + 'px' }"
    >
      <li v-for="(i, n) in data" :key="n">
        <Carousel :carousel="i" />
      </li>
    </ul>
    <div v-show="current >= 1" class="arrow-item arrow-up" @click="moveTo(-1)">
      <Icon :type="'prev'" />
    </div>
    <div
      v-show="current < data.length - 1"
      class="arrow-item arrow-down"
      @click="moveTo(1)"
    >
      <Icon :type="'next'" />
    </div>
    <ul class="indicator">
      <li
        v-for="(i, n) in data"
        :key="n"
        :class="{ active: n == current }"
        @click="switchTo(n)"
      ></li>
    </ul>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
import {mapState} from "vuex"
import Carousel from "./Carousel.vue";
import Icon from "@/components/Icon";
// import Loading from "@/components/Loading";
export default {
  data() {
    return {
      current: 0,
      contatinerHeight: 0,
      switching: false,
    };
  },
  components: {
    Carousel,
    Icon,
    // Loading,
  },
  methods: {
    moveTo(i) {
      this.current += i;
      if (this.current < 0) {
        this.current = 0;
        return;
      }
      if (this.current > this.data.length - 1) {
        this.current = this.data.length - 1;
        return;
      }
    },
    switchTo(i) {
      this.current = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < 0 && this.current > 0) {
        this.current--;
        this.switching = true;
      } else if (e.deltaY > 0 && this.current < this.data.length - 1) {
        this.current++;
        this.switching = true;
      }
    },
    handleResize() {
      this.contatinerHeight = this.$refs.contatiner.clientHeight;
    },
  },
  computed: {
    // 因为注入时已经请求所需数据了，所以可以直接映射。利用仓库数据。banner 命名空间
    ...mapState("banner",["loading","data"])
  },
  mounted() {
    this.contatinerHeight = this.$refs.contatiner.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  created() {
    // 组价注入后，请求banner组件所需数据，把数据保存在Vuex中，并映射到computed中。banner/xxx 命名空间
    this.$store.dispatch("banner/fetchBanner");
  },
};
</script>

<style scoped lang="less">
@import url("~@/styles/var.less");
.home-contatiner {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: @dark;
  color: #fff;
  overflow-y: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .carousel-contatiner {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
      background-color: @dark;
    }
  }
  .arrow-item {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    cursor: pointer;
  }
  @interval: 30px;
  .arrow-up {
    top: @interval;
    animation: jump-up 2s infinite;
  }
  .arrow-down {
    bottom: @interval;
    animation: jump-down 2s infinite;
  }
  @jump: 10px;
  @keyframes jump-up {
    0% {
      transform: translateY(-@jump);
    }
    50% {
      transform: translateY(@jump);
    }
    100% {
      transform: translateY(-@jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(@jump);
    }
    50% {
      transform: translateY(-@jump);
    }
    100% {
      transform: translateY(@jump);
    }
  }
  .indicator {
    position: fixed;
    right: @interval;
    top: 50%;
    transform: translateY(-50%);
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 1px solid #fff;
      background: #000;
      margin: 10px;
      cursor: pointer;
      transition: 500ms;
    }
    .active {
      background: #fff;
      border-color: #fff;
    }
  }
}
</style>