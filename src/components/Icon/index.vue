<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const totalIcon = {
  prev: "icon-xiangshangzhanhang",
  next: "icon-xiangxiazhanhang",
  home: "icon-home",
  weixin: "icon-weixin",
  qq: "icon-QQ",
  weibo: "icon-weibo",
  github: "icon-github-fill",
  email: "icon-email",
  info: "icon-info",
  error: "icon-error",
  success: "icon-success",
  warn: "icon-warning",
  article: "icon-wodewenzhang",
  project: "icon-gongcheng",
  news: "icon-liuyanxiaoxi",
  about: "icon-guanyuwomen",
  totop: "icon-huojian",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return totalIcon[this.type];
    },
  },
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_2836629_vtkxlht17fc.css");
.icon-container {
  font-size: inherit;
}
</style>