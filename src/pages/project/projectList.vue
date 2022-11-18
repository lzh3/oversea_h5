<template>
  <div class="list-wrap bg1">
    <c-common-top title="投资推荐" :isBack="true"></c-common-top>
    <van-tabs v-model="active" @click="changeTab">
      <van-tab title="投资">
        <div class="main p-30 c_homelist">
          <c-home-list :cards="projects" />
        </div>
      </van-tab>
      <van-tab title="预告">
        <div class="main p-30 c_homelist">
          <c-home-list :cards="projects1" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from "@/api/api"
import CHomeList from "@/components/home/c-home-list";

export default {
  components: {
    CHomeList
  },
  data() {
    return {
      active: 0,
      projects: [
        // {
        //   id: 0,
        //   title: "项目abc",
        //   status: 0,
        //   process: "60%",
        //   time: "2022-02-28",
        //   tags: ["酒店", "利润"]
        // },
        // {
        //   id: 1,
        //   title: "项目c",
        //   status: 0,
        //   process: "60%",
        //   time: "2022-02-28"
        // }
      ],
      projects1:[],
    };
  },
  created() {
    this.getProjectList1()
  },
  methods: {
       // 获取项目列表 -- 投资2
    getProjectList1() {
      this.$axios.post(api.home.projectList, {
        page:1,
        page_size:100,
        show_status:2
      }).then(res => {
        console.log('项目列表', res)
        this.projects = res.data.list;
      })
    },
       // 获取项目列表 -- 预告0
    getProjectList2() {
      this.$axios.post(api.home.projectList, {
        page:1,
        page_size:100,
        show_status:0
      }).then(res => {
        console.log('项目列表', res)
        this.projects1 = res.data.list;
      })
    },

    // 切换Tab
    changeTab(v){
      // console.log(v,8898);
      if(v==0){
        this.getProjectList1()
      }else{
        this.getProjectList2()
      }
    },
  }
};
</script>
<style lang="less" scoped>
/deep/.van-tabs__wrap {
  height: 30px;
}
/deep/.van-tabs__nav {
  background-color: transparent;
  padding-bottom: 15px;
  .van-tabs__line {
    background-color: #0a35d8;
  }
}
.c_homelist {
  margin-top: 0.16rem;
}
</style>
