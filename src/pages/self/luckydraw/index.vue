<template>
  <div class="lucky">
    <c-common-top :title="$t('luckydraw.lucky')" :isBack="true" />
    <div class="inner">
      <lottery @lotteryClick="lotteryClick"
      @lotteryDone="lotteryDone"
      :lottery-start="lotteryStart"
      :lottery-prizenum="prizeNum"
       :lottery-prizeno="prizeNo"
       lottery-bg="https://s1.ax1x.com/2022/11/18/znhqld.png"
       content-bg="https://s1.ax1x.com/2022/11/18/znfeuq.png"
       pointer-bg="https://s1.ax1x.com/2022/11/18/znfpHf.png"
        :lottery-width="['85%','18%']" />
      <p class="residuenum">{{$t('luckydraw.lucky1')}}:&nbsp;&nbsp;{{prizeInfo.num}}</p>

      <div class="foot">

        <div class="title">
          <div class="line"></div> {{$t('luckydraw.lucky2')}} <div class="line"></div>
        </div>
        <div class="t_content">
          <div>
            <div class="circle"></div> &nbsp;{{$t('luckydraw.lucky3')}}
          </div>
          <div class="circlebox">
            <div class="circle"></div>&nbsp;{{$t('luckydraw.lucky4')}}
          </div>
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
      lotteryStart: 0, // 停止/转动
      prizeNo: 1, // 第几个中奖
      prizeNum: 7, // 奖品数量
      prizeList: ['现金红包', '谢谢参与', '谢谢参与', '现金红包', '谢谢参与', '现金红包',],
      prizeInfo: {},
      result: {},
    }
  },
  created() {
    this.getdaydayle();
    this.drawprize();
  },
  methods: {
    // 获取天天乐奖池
    getdaydayle() {
      this.$axios.post(api.self.getdaydayle, {
      }).then(res => {
        console.log('天天乐奖池', res)
        this.prizeInfo = res.data
      })
    },
    // 用户天天乐抽奖
    drawprize() {
      this.$axios.post(api.self.drawprize, {
      }).then(res => {
        console.log('天天乐抽奖', res)
        // this.prizeInfo = res
        // console.log(this.prizeInfo,5555)
        this.result = res;
      })
    },
    lotteryClick() {
      if(this.result.errCode!=200){
        this.$toast.fail(this.result.errMsg)
        return;
      }
      if(this.prizeInfo.num===0) return;
      this.lotteryStart = 1
      let randomNum = Math.ceil((Math.random() * 6))
      console.log('randomNum', randomNum)
      this.prizeNo = randomNum
      // this.$toast.success()
    },
    lotteryDone(res) {
      this.lotteryStart = 0
      let index = res.prizeNo - 1
      console.log(this.prizeList[index])
    },
  },
}
</script>
<style lang="less" scoped>
.lucky {
  // padding: 0 0.1rem;
  width: 100%;
  height: 100vh;
  background: url("../../../assets/imgs/bg2.jpg") no-repeat;
}
.inner {
  margin: auto;
  margin-top: 0.6rem;
  width: 6.9rem;
  height: 11.88rem;
  background: #ffffff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  opacity: 0.8;
  border-radius: 29px;
  .residuenum {
    text-align: center;
    margin-top: 0.21rem;
    font-size: 0.3rem;
    font-family: Source Han Sans CN;
    color: #333333;
    font-weight: 400;
  }
  .foot {
    margin: auto;
    margin-top: 0.86rem;
    width: 6.5rem;
    padding: 0.15rem;
    // height: 2.14rem;
    background: #f0f0f0;
    border-radius: 0.48rem;
    .title {
      text-align: center;
      padding-top: 0.31rem;
      .line {
        display: inline-block;
        width: 65px;
        height: 1.8px;
        background: #0a35d8;
        vertical-align: middle;
      }
    }
    .t_content {
      // width: 5.rem;
      margin-top: 0.2rem;

      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      .circlebox {
        margin-top: 0.2rem;
      }
      .circle {
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        line-height: 0.12rem;
        vertical-align: middle;
        margin-left: 0.3rem;
        background: #0a35d8;
        border-radius: 50%;
      }
    }
  }
}
</style>
