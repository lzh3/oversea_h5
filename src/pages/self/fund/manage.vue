<template>
  <div class="bg2">
    <c-common-top :title="$t('fund.FundsManagement')" color='white' :isBack="true"></c-common-top>
    <div class="main">
      <div class="summary-block">
        <p class="income">$ 23894.<span>18</span></p>
        <van-button type="plain" @click="handleCash">{{$t('fund.cash1')}}</van-button>
      </div>
      <div class="income-content p-30">
        <div class="tab-wrap" :class="{'right-active':currentTab==2}">
          <p @click="tabClick(1)">{{$t('fund.lucky')}} <i class="iconfont "></i></p>
          <p class="income" @click="tabClick(2)">{{$t('fund.earnings')}}</p>
        </div>
        <div class="tab-block1" v-if="currentTab==1">
          <ul>
            <li class="p-30" v-for="(item, index) in dayFuck" :key='index'>
              <span class="time">{{item.create_time | toDate}}</span>
              <span class="income">${{item.change_account}}</span>
            </li>
          </ul>
        </div>
        <div class="tab-block2" v-else>
          <ul>
            <li class="p-30" v-for="(item, index) in projectIncome" :key='index'>
              <p class="detail"><span class="time">{{item.create_time}}</span>
                <span class="income">${{item.change_account}}</span>
              </p>
              <p class="info">{{item.remark}}</p>
            </li>
          </ul>
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
      currentTab: 1,
      tabs: [
        {
          label: '幸运天天乐',
          type: 1
        },
        {
          label: '项目收益',
          type: 2
        }
      ],
      dayFuck: [
        // {
        //   time: '2019-08',
        //   income: '1000.00'
        // },
        // {
        //   time: '2022-10',
        //   income: '1000.00'
        // },
      ],
      projectIncome: [
        // {
        //   time: '2019-08',
        //   income: '1000.00',
        //   info: '泰国曼谷XXXXXX酒店5年股权'
        // },
        // {
        //   time: '2022-10',
        //   income: '1000.00',
        //   info: '泰国曼谷XXXXXX酒店5年股权'
        // },
      ],
    }
  },
  created(){
    this.getfundsList3()
  },
  mounted() {
    this.showDialog();
  },
  methods: {
        // 资金管理 3邀请分润 4项目分润
    getfundsList3() {
      this.$axios.post(api.self.fundsmgt, {
        change_code:3,
        page:1,
        page_size:100
      }).then(res => {
        // console.log('资金管理', res)
        this.dayFuck = res.data.list;
      })
    },
     // 资金管理  4项目分润
        getfundsList4() {
      this.$axios.post(api.self.fundsmgt, {
        change_code:4,
        page:1,
        page_size:100
      }).then(res => {
        // console.log('获取用户提现列表', res)
        this.projectIncome = res.data.list;
      })
    },
    tabClick(index) {
      this.currentTab = index;
      if(index==1){
        this.getfundsList3()
      }else{
        this.getfundsList4()
      }
    },
    handleCash() {
      this.$router.push({
        path: '/fund/cash'
      })
    },
    showDialog() {
      this.$dialog.confirm({
        message: this.$t('fund.hint'),
        showConfirmButton: false,
      })
    },
  }
}
</script>

<style lang='less' scoped>
.summary-block {
  margin-top: 0.3rem;
  text-align: center;
  .income {
    font-size: 0.42rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0.4rem;
    span {
      font-size: 0.21rem;
    }
  }
  .van-button {
    width: 2.42rem;
    height: 0.66rem;
    background: rgba(255, 255, 255, 0.1);
    border: 0.02rem solid #fff;
    border-radius: 0.33rem;
    color: #fff;
  }
}
.tab-wrap {
  display: flex;
  margin-top: 0.5rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: url("../../../assets/imgs/self/tab_right.png") 100% / cover
    no-repeat;
  &.right-active {
    background: url("../../../assets/imgs/self/tab_left.png") 100% / cover
      no-repeat;
  }
  p {
    flex: 1;
    text-align: center;
    font-size: 0.28rem;
    font-weight: 400;
    color: #333;
  }
}
.tab-block1 {
  ul {
    background-color: #fff;
    li {
      width: 100%;
      height: 0.9rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }
}
.tab-block2 {
  ul {
    background-color: #fff;
    li {
      width: 100%;
      height: 1.34rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #888;
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.15rem;
        // align-items: center;
        font-size: 0.24rem;
        .income {
          font-weight: bold;
          font-size: 0.3rem;
        }
      }
      .info {
        font-size: 0.3rem;
        font-weight: 400;
        color: #888;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
