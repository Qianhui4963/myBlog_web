<template>
      <img class="Loading_img" :src="LoadingUrl" alt="">
</template>

<script>
// 动态的url路径。webpack会检测到该静态资源，并进行处理。
import LoadingUrl from "@/assets/loading.svg"
export default {
    data(){
        return{
            LoadingUrl
        }
    }
}
</script>

<style scoped lang="less">
@import url("~@/styles/mixin.less");
.Loading_img{
    .self-center()
}
</style>