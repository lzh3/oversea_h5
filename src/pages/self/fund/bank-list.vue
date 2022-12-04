<template>
  <div class="bg1">
    <c-common-top
      :title="$t('fund.bankcardlist')"
      @to="toAdd"
      :isBack="true"
      :isTo="true"
      :toText="$t('fund.add')"
    ></c-common-top>
    <div class="main p-30">
      <ul class="bank-list">
        <li v-for="item in bankcardlist" :key="item.num" @click="selectBank(item)" v-longpress="()=>delbank(item.bank_id)">
          <p class="name">{{ item.bank_address }}</p>
          <p class="num">{{ item.bank_code }}</p>
          <p class="time">{{$t('fund.addtime')}}：{{ item.create_time | toSecDate }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import api from "@/api/api";
export default {
  data() {
    return {
      // list: [
      //     {
      //         name: '中国银行',
      //         num: '6226123412348888',
      //         date: '2022-02-20',
      //     },
      //     {
      //         name: '建设银行',
      //         num: '6226123412348888',
      //         date: '2022-06-20',
      //     },
      // ]
      bankcardlist: []
    };
  },
  created() {
    this.getBankcardList();
  },
  methods: {
    // 选择银行
    selectBank(v){
      console.log(v,4444)
      this.$router.push({
        name: 'fundcash',
        params: {
          bank_address: v.bank_address,
          bank_id:v.bank_id,
          bank_code:v.bank_code.substr(-4)
        },
      })
    },
    // 获取银行卡列表
    getBankcardList() {
      this.$axios.post(api.bankcard.banklist, {}).then(res => {
        // console.log("项目列表", res);
        this.bankcardlist = res.data.list;
        // this.banners = res.data.list.map(item => item.image)
      });
    },
    // 删除银行卡
    delbankcard(c_id) {
      this.$axios.post(api.bankcard.deluserbank, {
        bank_id: c_id
      }).then(res => {
        if (res.errCode == 200) {
          this.getBankcardList();
          this.$toast({
            type: "success",
            message: res.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.errMsg
          });
        }
      });
    },
    toAdd() {
      this.$router.push({
        path: "/bank/add"
      });
    },
    delbank(c_id) {
      Dialog.confirm({
        // title: '标题',
        message: "确认删除?"
      })
        .then(() => {
          // console.log(666);
          this.delbankcard(c_id);
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="less" scoped>
.bank-list {
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2rem;
    margin-bottom: 0.3rem;
    padding: 0.3rem;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 15px;
    color: #666;
    .num {
      font-size: 0.42rem;
    }
  }
}
</style>
