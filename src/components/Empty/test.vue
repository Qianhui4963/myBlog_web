<template>
  <div class="test-container">
    <Empty :txt="'sksj'" />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 0 auto;
}
</style>