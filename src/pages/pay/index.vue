<template>
  <div class="pay-result bg1">
    <c-common-top v-if="payResult" class="common-top" title="支付结果" :isBack="true" />
    <div class="content">
      <div class="res-img">
        <img v-if="payResult" src="../../assets/imgs/common/success.png" alt="">
        <img v-else src="../../assets/imgs/common/fail.png" alt="">
      </div>
      <div class="res-text">
        <span v-if="payResult">支付成功</span>
        <span v-else>支付失败</span>
      </div>
      <div class="btn" @click="handBack">返回首页</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payResult: true
    };
  },
  created() { },
  methods: {
    handBack() {
      this.payResult = !this.payResult
    }
  },
};
</script>
<style lang="less" scoped>
.pay-result {
  background-color: #bfa;
  display: flex;
  flex-direction: column;
  .common-top {
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    margin: 0.26rem 0.3rem;
    padding-top: 2.3rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.29rem;
    font-weight: 400;
    font-family: Source Han Sans CN;
    border-radius: 0.29rem;
    background-color: #fff;
    .res-img {
      width: 1.52rem;
      height: 1.52rem;
      margin: 0 auto 0.28rem;
      img {
        width: 100%;
      }
    }
    .res-text {
      margin-bottom: 0.78rem;
      font-weight: bold;
      color: #333333;
    }
    .btn {
      line-height: 0.91rem;
      margin: 0 0.34rem;
      background: linear-gradient(112deg, #0a35d8 0%, #3f63ea 100%);
      border-radius: 0.45rem;
    }
  }
}
</style>