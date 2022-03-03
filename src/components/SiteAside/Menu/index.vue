<template>
  <nav>
    <router-link
      v-for="i in items"
      :key="i.link"
      :to="{name:i.name}"
      :title="i.title"
      :exact="i.exact"
      active-class="selected"
      exact-active-class=""
    >
      <Icon :type="i.icon" /> {{ i.title }}
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon/";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "home",
          link: "/",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "article",
          link: "/article",
          title: "文章",
          icon: "article",
          exact: false,
        },
        {
          name: "about",
          link: "/about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "project",
          link: "/project",
          title: "项目&效果",
          icon: "project",
          exact: true,
        },
        {
          name: "news",
          link: "/news",
          title: "留言板",
          icon: "news",
          exact: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less">
@import url("~@/styles/global.less");
nav {
  font-size: 1rem;
  color: @gray;
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 30px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.selected {
      background: #666;
    }
    i {
      display: inline-block;
      width: 30px;
    }
  }
}
</style>