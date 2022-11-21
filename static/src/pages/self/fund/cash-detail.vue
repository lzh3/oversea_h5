<template>
  <div class="bg1">
    <c-common-top title='提现明细' :isBack="true"></c-common-top>
    <div class="main">
      <div class="history p-30">
        <ul v-for="item in historyList" :key='item.time'>
          <li class="date">{{item.date}}</li>
          <div class="li-content">
            <li v-for="(v,index) in item.list" :key='index'>
              <p class="status-block">
                <span class="money">{{v.money | toNumber}}</span>
                <span class="status" :class="v.status==0?'ing':v.status==1?'finish':'back'">{{v.status | statusFilter}}</span>
              </p>
              <p class="time-flag c-888">
                <span class="time">{{v.time}}</span>
                <span class="com">佣金金额：{{v.commission}}</span>
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyList: [
        {
          date: '2022-10-01',
          list: [
            {
              commission: 100,
              money: 10000,
              status: 1,
              time: '2022-02-23 20:20'
            }
          ],
        },
        {
          date: '2022-10-01',
          list: [
            {
              commission: 100,
              money: 10000,
              status: 0,
              time: '2022-02-23 20:20'
            },
            {
              commission: 100,
              money: 10000,
              status: 2,
              time: '2022-02-23 20:20'
            }
          ],
        }
      ],
    }
  },

  filters: {
    statusFilter(val) {
      let obj = {
        0: '进行中',
        1: '已完成',
        2: '被驳回'
      }
      return obj[val]
    },
  },
  created() {

  },
  methods: {}
}
</script>

<style lang='less' scoped>
.history {
  ul {
    .li-content {
      border-radius: 0.29rem;
      overflow: hidden;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 1.3rem;
      padding: 0.3rem;
      box-sizing: border-box;
      background-color: #fff;
      &:not(:last-child){
        border-bottom: 1px solid #eee;
      }
      .status-block {
        display: flex;
        justify-content: space-between;
        font-size: 0.31rem;
        line-height: 0.3rem;
        vertical-align: middle;
        .money {
          font-weight: bold;
        }
        .status {
          font-size: 0.27rem;
          &.ing {
            color: #0c9f39;
          }
          &.finish {
            color: #888;
          }
          &.back {
            color: #ec3535;
          }
        }
      }
      .time-flag {
        margin-top: 0.15rem;
        font-size: 0.24rem;
        display: flex;
        justify-content: space-between;
      }
    }
    .date {
      margin-bottom: 0.3rem;
      text-align: left;
      padding-left: 0;
      padding-bottom: 0;
      height: auto;
      background-color: transparent;
      font-size: 0.29rem;
      font-weight: 400;
      color: #333;
      border-bottom-color: transparent !important;
    }
  }
}
</style>
