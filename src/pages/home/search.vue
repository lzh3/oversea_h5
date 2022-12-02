<template>
  <div class="sear-page bg1">
    <div class="top-search">
      <p class="back" @click="back"><i class="iconfont icon-fanhuijiantou "></i></p>
      <van-search class='search-inp' v-model="keyword" shape="round" background="transparent" left-icon="search" :placeholder="$t('placehold.projectname')" />
      <p class="sear-btn" @click="handleSearch">搜索</p>
    </div>
    <div class="list p-30">
      <c-home-list :cards='list'></c-home-list>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"
import cHomeList from "@/components/home/c-home-list"

export default {
  components: {
    cHomeList,
  },
  data() {
    return {
      keyword: '',
      list: [],
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    handleSearch() {
      this.$axios.post(api.home.projectList, {
        name: this.keyword,
      }).then(res => {
        this.projects = [];
        console.log('项目列表', res);
        let resData = res.data.list;
        this.list = resData;
      })
    },
  }
}
</script>

<style lang='less' scoped>
.top-search {
  display: flex;
  align-items: center;
  .back {
    flex: 1;
    text-align: right;
    .iconfont {
      font-size: 0.16rem;
      font-weight: bold;
    }
  }
  .sear-btn {
    flex: 2;
    font-size: 0.28rem;
    font-weight: 400;
    color: #0a35d8;
    text-align: center;
  }
  .search-inp {
    flex: 9;
    /deep/.van-field__control {
      font-size: 0.12rem;
    }
  }
}
</style>

