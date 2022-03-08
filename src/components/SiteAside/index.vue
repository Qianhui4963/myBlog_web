<template>
  <div class="site-aside-contatiner">
      <Avatar :url="data.avatar" v-if="data"/>
      <Menu />
      <Contact :data="data" />
      <p class="other" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from "@/components/SiteAside/Avatar"
import Contact from "@/components/SiteAside/Contact"
import Menu from "@/components/SiteAside/Menu"
import {mapState} from "vuex"
export default {
    computed:mapState("setting",["data"]),
    components:{
        Avatar,
        Contact,
        Menu
    }
}
</script>

<style scoped>
.site-aside-contatiner{
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    background: #202020;
}
.other{
    font-size: 12px;
    text-align: center;
    color: aliceblue;
}

.contact-contatiner{
    margin: 50px 0;
}
</style>