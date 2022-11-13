<template>
  <div class="bg1">
    <c-common-top title="支付" :isBack="true" />
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
          {{projectInfo.title}}
        </div>
        <div class="buy">
          <p class="info">
            <span class="unit">￥{{projectInfo.unit}}<i>/份</i></span>
            <span class="remain">剩余{{projectInfo.remain}}份</span>
          </p>
          <p class="op">
            <span @click="handleMin">-</span>
            <span class="count">{{projectInfo.count}}</span>
            <span @click="handleAdd">+</span>
          </p>
        </div>
        <div class="service">
          <span class="t">服务费({{projectInfo.serviceRate}})</span>
          <span class="cost">￥1500</span>
        </div>
        <div class="total">
          <span>总金额</span>
          <span class="cost">349895</span>
        </div>
      </div>
      <!--  -->
      <div class="upload-box">
        <div class="bg-white card" @click="uploadCard">
          <span>身份证信息</span>
          <p>
            <span class="status">已上传</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </p>
        </div>
        <div class="bg-white" @click="toSign">
          <span>电子签名</span>
          <img class="sign-img" src="" alt="">
        </div>
        <div class="bg-white card" @click="uploadCard">
          <span>合同</span>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
      <div class="pay-btn">
        <van-button block class="btn-bg">立即支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectInfo: {
        title: '泰国曼谷亚朵abc酒店5年股权',
        unit: 10000,
        remain: 30,
        service: 1000,
        serviceRate: '3%',
        count: 0,
      },
    }
  },
  methods: {
    uploadCard(){

    },
    handleAdd(){},
    handleMin(){},
    toSign(){},
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
        color: #ddd;
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
.pay-btn{
    position: fixed;
    bottom: 0.3rem;
    left: 0.3rem;
    right: 0.3rem;
}
</style>
