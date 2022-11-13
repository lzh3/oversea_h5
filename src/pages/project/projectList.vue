<template>
  <div class="list-wrap bg1">
    <c-common-top title='投资推荐' :isBack="true"></c-common-top>
    <div class="main p-30">
      <c-home-list :cards='projects' />
    </div>
  </div>
</template>

<script>
import CHomeList from "@/components/home/c-home-list"

export default {
  components: {
    CHomeList,
  },
  data() {
    return {

      projects: [
        {
          id: 0,
          title: '项目abc',
          status: 0,
          process: '60%',
          time: '2022-02-28',
          tags: ['酒店', '利润']
        },
        {
          id: 1,
          title: '项目c',
          status: 0,
          process: '60%',
          time: '2022-02-28',
        },
      ]
    };
  },
  created() { },
  methods: {},
};
</script>
<style lang="less" scoped>
</style>