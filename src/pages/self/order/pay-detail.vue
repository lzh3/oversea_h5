<template>
  <div class="bg1">
    <c-common-top :title="$t('order.orderDetail')" :isBack="true" />
    <div class="main p-30">
      <!--  -->
      <div class="bar-section">
        <section class="banner-section">
          <van-swipe class="my-swipe" :show-indicators="false" :autoplay="2000" indicator-color="white">
            <van-swipe-item>
              <img src="../../../assets/imgs/project/1.png" alt="">
            </van-swipe-item>
            <!-- <van-swipe-item>2</van-swipe-item> -->
          </van-swipe>
        </section>

      </div>
      <!--  -->
      <div class="project-info">
        <div class="title">
          {{projectInfo.name}}
        </div>
        <div class="buy">
          <p class="info">
            <span class="unit">￥{{orderInfo.price}}<i>/{{$t('common.copies')}}</i></span>
            <span class="remain">{{$t('order.remain')}}{{(projectInfo.amount - orderInfo.num) || 0}}{{$t('common.copies')}}</span>
          </p>
          <p class="op">
            <span class="">{{orderInfo.num}}</span>
          </p>
        </div>
        <div class="service">
          <span class="t">{{$t('order.seviceCharge')}} ({{projectInfo.service_rate}}%)</span>
          <span class="cost">￥{{servicePrice}}</span>
        </div>
        <div class="total">
          <span>{{$t('order.totalMoney')}}</span>
          <span class="cost">￥{{orderInfo.total_price}}</span>
        </div>
      </div>
      <!--  -->
      <div class="upload-box">
        <div class="bg-white card" @click="toContract">
          <span>{{$t('order.contract')}}</span>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
      <div class="pay-btn" v-if="orderInfo.order_status==5">
        <!-- v-if="orderInfo.order_status==5"> -->
        <van-button block class="btn-bg" @click="handlePay">{{$t('common.payNow')}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"

export default {
  data() {
    return {
      projectInfo: {},
      orderInfo: {},
    }
  },
  computed: {
    // 服务费
    servicePrice() {
      return this.orderInfo.price * this.orderInfo.num * this.projectInfo.service_rate / 100 || 0;
    },
  },
  created() {
    this.getOrderDetail();
  },
  methods: {
    // 获取订单详情
    getOrderDetail() {
      this.$axios.post(api.self.orderDetail, {
        order_id: this.$route.query.id,
      }).then(res => {
        console.log('订单详情', res.data)
        this.projectInfo = res.data.porject_info || {};
        this.orderInfo = res.data.order_info || {};
      })
    },
    // 点击支付
    handlePay() {
      this.$axios.post(api.bankcard.createOrder, {
        order_id: this.$route.query.id,
      }).then(res => {
        console.log('支付', res.data)
        if (res && res.data) {
          this.goPay(res.data.payUrl, res.data.msg)
        }

      })
    },
    goPay(url = '', msg='') {
      if (url) {
        let aDom = document.createElement('a');
        aDom.style.display = 'none';
        aDom.target = '_self';
        aDom.href = url;
        document.body.appendChild(aDom);
        aDom.click();
        document.removeChild(aDom);
      }else {
        this.$toast({
          type: 'fail',
          message: msg,
        })
      }
    },
    // 跳转合同
    toContract() {
      console.log('jump', this.projectInfo)
      this.$router.push({
        path: '/project/contract',
        query: {
          contractId: this.orderInfo.contract_id,
        },
      })
    },
  }
}
</script>

<style lang='less' scoped>
.bar-section {
  position: relative;
  height: 3.8rem;
  margin-bottom: 0.3rem;
  .van-swipe {
    height: 100%;
  }
  .banner-section {
    // position: absolute;
    // top: -0.7rem;
    // height: 4.5rem;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.project-info {
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  //   height: 3.4rem;
  margin-top: 0.3rem;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  .title {
    font-size: 0.29rem;
    font-weight: bold;
  }
  .buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem 0;
    .info {
      display: flex;
      flex-direction: column;
      .unit {
        font-size: 0.24rem;
        color: #ff1f16;
        i {
          color: #666;
          font-style: normal;
        }
      }
      .remain {
        margin-top: 0.1rem;
        font-size: 10px;
        color: #666;
      }
    }
    .op {
      span {
        font-size: 0.36rem;
        color: #333;
        display: inline-block;
        width: 0.3rem;
        text-align: center;
      }
      .count {
        width: 1.06rem;
        height: 0.54rem;
        line-height: 0.54rem;
        background: #ddd;
        border-radius: 0.27rem;
        font-size: 0.29rem;
        font-weight: bold;
        color: #333;
      }
    }
  }
  .service {
    margin-bottom: 0.3rem;
    font-size: 0.24rem;
    display: flex;
    justify-content: space-between;
    .cost {
      color: #ff1f16;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0 0;
    border-top: 1px solid #eee;
    .cost {
      color: #ff1f16;
    }
  }
}
.upload-box {
  div {
    display: flex;
    padding: 0 0.3rem;
    height: 0.85rem;
    border-radius: 15px;
    margin: 0.3rem 0;
    align-items: center;
    justify-content: space-between;
  }
  .status {
    color: #999;
  }
  .sign-img {
    width: 1.14rem;
    height: 0.43rem;
  }
}
.pay-btn {
  position: fixed;
  bottom: 0.3rem;
  left: 0.3rem;
  right: 0.3rem;
}
</style>
