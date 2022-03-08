<template>
  <div class="carousel-item-contatiner">
    <div class="carousel-item">
      <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" />
      <!-- <ImageLoader
        :src="$S_URL + carousel.bigImg"
        :placeholder="$S_URL + carousel.midImg"
      /> -->
    </div>
    <div class="title">{{ carousel.title }}</div>
    <div class="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
.carousel-item-contatiner {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  .carousel-item {
    width: 100%;
    height: 100%;
  }
  .title,
  .desc {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
  }
  .title {
    font-size: 2em;
    top: calc(50% - 1em);
  }
  .desc {
    top: calc(50% + 1em);
  }
}
</style>