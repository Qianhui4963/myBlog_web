<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList.vue";
export default {
  data() {
    return {
      list: [
        { name: "a", active: false },
        { name: "b", active: false },
        {
          name: "c",
          active: true,
          child: [
            { name: "c-1", active: false },
            {
              name: "c-2",
              active: true,
              child: [
                { name: "c-2-1", active: true },
                { name: "c-2-2", active: false },
                { name: "c-2-3", active: false },
                { name: "c-2-4", active: false },
                { name: "c-2-5", active: false },
              ],
            },
            { name: "c-3", active: false },
            { name: "c-4", active: false },
          ],
        },
        { name: "d", active: false },
      ],
    };
  },
  components: {
    RightList,
  },
  methods:{
      handleSelect(item){
          console.log(item)
      }
  }
};
</script>

<style scoped>
</style>