<template>
  <div class="cash-wrap bg1">
    <c-common-top :title="$t('fund.cash1')"
    @to="toPage"
    :isTo='true' :isBack="true" :toText="text"></c-common-top>
    <div class="main p-30">
      <div class="main-top" @click="toCardList">
        <p class="to tt">{{$t('fund.card')}}</p>
        <div class="card tt">
          <p class="card-id">{{cardinfo}}</p>
          <p class="tip">{{$t('fund.Received')}}</p>
        </div>
        <p class="tt"><i class="iconfont icon-xiangyoujiantou"></i></p>
      </div>
      <div class="card-op">
        <p class="title">{{$t('fund.cash')}}</p>
        <div class="money">
          <span>￥</span>
          <van-field v-model="money" label="" placeholder="" />
        </div>
        <div class="info">
          {{$t('fund.cashbalance')}}
          <span>￥{{balance}}元，</span>
          <span class="all-out" @click="handleOutAll">{{$t('fund.allcash')}}</span>
        </div>
        <div class="submit">
          <van-button block type="default" class="btn-bg" @click="subWithdraw">{{$t('common.submit')}}</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      text:this.$t('fund.withdraw'),
        money: '',
        balance: 2000,
        cardinfo:'中国银行 (5558)',
      bank_id:null,
    }
  },
  created() {
    let cdata = this.$route.params

    if (cdata.bank_code != undefined) {
      this.cardinfo = cdata.bank_address + "(" + cdata.bank_code + ")"
      this.bank_id = cdata.bank_id
    }
  },
  methods: {
    // 提现
    subWithdraw(){
      this.$axios.post(api.self.withdraworder, {
        money:this.money,
        bank_id:this.bank_id,
        withdraw_password:100,
      }).then(res => {
        // console.log('获取用户提现列表', res)
       if(res.errCode == 200){
        this.$toast.success(res.errMsg)
        this.$router.back()
       }else{
         this.$toast.fail(res.errMsg)
       }
      })
    },
    handleOutAll(){
        this.money = this.balance;
    },
    // 提现明细
    toPage(){
        this.$router.push({
            path: '/getcash/detail',
        })
    },
    // 选择银行卡
    toCardList(){
      this.$router.push({
        path: '/bank/list'
      })
    }
  }
}
</script>

<style lang='less' scoped>
.cash-wrap {
  overflow: hidden;
}
.main {
  display: flex;
  flex-direction: column;
  height: calc(~"100vh - 0.7rem");
}
.main-top {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  color: #333;
  .tt {
    line-height: 0.3rem;
  }
  .to {
    font-size: 0.29rem;
    font-weight: 400;
  }
  .card-id {
    font-size: 0.29rem;
    font-weight: 550;
    color: #333333;
    margin-bottom: 0.3rem;
  }
  .tip {
    font-size: 0.24rem;
    font-weight: 400;
    color: #888;
  }
  .iconfont {
    font-size: 0.24rem;
  }
}
.card-op {
  width: 100%;
  flex: auto;
  padding: 0.3rem;
  box-sizing: border-box;
  margin-top: 0.6rem;
  background-color: #fff;
  border-radius: 0.29rem;
  font-weight: 400;
  .title {
    font-size: 0.29rem;
  }
  .money {
    display: flex;
    align-items: center;
    // line-height: 0.3rem;
    margin: 0.5rem 0 0.3rem 0;
    border-bottom: 1px solid #eee;
    /deep/.van-cell {
      padding: 0;
    }
  }
  .info {
    margin-bottom: 0.9rem;
    font-size: 0.24rem;
    .all-out{
        color: #0A35D8;
    }
  }
}
</style>
