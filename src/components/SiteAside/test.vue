<template>
<div class="test-contatiner">
    <SiteAside />
</div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.test-contatiner{
    width: 250px;
    height: 600px;
    border: 2px solid #000;
    margin: 0 auto;
}
</style>