<template>
  <ul class="contact-contatiner">
    <li>
      <a :href="data.github || ''" target="_blank">
        <div class="icon"><Icon type="github" /></div>
        <span>{{ data.githubName }}</span></a
      >
    </li>
    <li>
      <a href="#">
        <div class="icon"><Icon type="email" /></div>
        <span>{{ data.mail }}</span></a
      >
    </li>
    <li>
      <a href="#">
        <div class="icon"><Icon type="qq" /></div>
        <span>{{ data.qq }}</span></a
      >
      <div class="pop">
        <img :src="$S_URL + data.qqQrCode" />
      </div>
    </li>
    <li>
      <a href="#">
        <div class="icon"><Icon type="weixin" /></div>
        <span>{{ data.weixin }}</span></a
      >
      <div class="pop">
        <img :src="$S_URL + data.weixinQrCode" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: ["data"],
  data() {
    return {};
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import url("//at.alicdn.com/t/font_2318456_nqb0y1dc4s.css");
.contact-contatiner {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    color: @gray;
    position: relative;
    margin: 10px 0;
    &:hover .pop {
      transform: translateX(-25%) scaleY(1);
    }
    a {
      padding: 0 30px;
      display: flex;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .icon {
        display: flex;
        .icon-container {
          width: 30px;
          font-size: 1.5em;
          margin-right: 10px;
        }
      }
    }
    .pop {
      width: 50%;
      padding: 5%;
      position: absolute;
      left: 25%;
      bottom: @itemHeight;
      background-color: #fff;
      border-radius: 5px;
      transform: translateX(-25%) scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: #fff;
        transform: translateX(-50%);
        bottom: calc(-5% - 2.5px);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>