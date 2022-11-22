<template>
  <div class="page-wrap">
    <!-- :toText="$t('common.add')" -->
    <c-common-top :isBack="true" :title="$t('subscribe.idcard')" :isTo="true" @to="toUpload"></c-common-top>
    <div class="id-list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <span>{{item.name}}</span>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import localStore from '@/utils/localStorage'
import api from "@/api/api"

export default {
  data() {
    return {
      list: [
        {
          id: '3948395894543556',
          name: '张三',
        },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let frontId = localStore.get('front_card_id');
      this.$axios.post(api.common.getImg, {
        image_id: frontId
      }).then(res => {
        console.log('init', res)
      })
    },
    // 去上传
    toUpload() {
      this.$router.push({
        path: '/project/uploadCard'
      })
    }
  },
};
</script>
<style lang="less" scoped>
.id-list {
  padding: 0 0.3rem;
  li {
    display: flex;
    padding: 0 0.3rem;
    justify-content: space-between;
    height: 0.88rem;
    background: #fff;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin-bottom: 0.3rem;
  }
}
</style>
