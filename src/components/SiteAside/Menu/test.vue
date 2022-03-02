<template>
  <div class="menu-contatiner">
      <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
    components:{
        Menu
    }
}
</script>

<style>
    .menu-contatiner{
        width: 500px;
        height: 600px;
        background: #eee;
        margin: 0 auto;
    }
</style>