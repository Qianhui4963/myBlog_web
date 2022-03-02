<template>
    <div class="test-contatiner">
        <Contact />
    </div>
</template>

<script>
import Contact from "./"
export default {
    components:{
        Contact,
    }
}
</script>

<style>
html,body{
    background: #888;
}
    .test-contatiner{
        width: 400px;
        height: 500px;
        background: #000;
        border: 1px solid #fff;
        box-sizing: border-box;
        margin: 0 auto;
        padding-top: 200px;
    }
</style>