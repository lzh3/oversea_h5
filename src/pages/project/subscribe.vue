<template>
  <div class="sub-page bg1">
    <c-common-top :isBack="true" title='认购'></c-common-top>
    <div class="main p-30">
      <div class="user-info">
        <!-- <div class="info">
          <span>{{userInfo.user_name}}</span>
          <span>{{userInfo.mobile}}</span>
        </div> -->
        <div class="address">
          <i class="iconfont icon-weizhi"></i>
          {{userInfo.address}}
        </div>
        <!-- <div class="email">{{userInfo.email}}</div> -->
      </div>
      <div class="project-info">
        <div class="title">
          {{projectInfo.name}}
        </div>
        <div class="buy">
          <p class="info">
            <span class="unit">￥{{projectAbout.price}}<i>/份</i></span>
            <span class="remain">剩余{{remainCount}}份</span>
          </p>
          <p class="op">
            <span @click="handleMin">-</span>
            <span class="count">{{buyInfo.count}}</span>
            <span @click="handleAdd">+</span>
          </p>
        </div>
        <div class="service">
          <span class="t">服务费({{projectInfo.service_rate}}%)</span>
          <span class="cost">￥{{servicePrice}}</span>
        </div>
        <div class="total">
          <span>总金额</span>
          <span class="cost">￥{{totalPrice}}</span>
        </div>
      </div>
      <div class="pay-type common-box">
        <p class="title">支付方式</p>
        <p class="type">
          <van-radio-group v-model="payType">
            <p>
              <span class="tt">
                <img src="../../assets/imgs/project/money.png" alt="">
                佣金支付
              </span>
              <van-radio :name="1"></van-radio>
            </p>
            <p>
              <span class="tt">
                <img src="../../assets/imgs/project/card.png" alt="">
                银行卡支付
              </span>
              <van-radio :name="2"></van-radio>
            </p>
          </van-radio-group>
        </p>
      </div>
      <div class="upload-box">
        <div class="bg-white card" @click="uploadCard">
          <span>身份证信息</span>
          <p>
            <span class="status" v-if="front_id&&back_id">已上传</span>
            <i class="iconfont icon-xiangyoujiantou"></i>
          </p>
        </div>
        <div class="bg-white" @click="toSign">
          <span>电子签名</span>
          <img class="sign-img" :src="esign" alt="">
        </div>
      </div>
      <div class="describe bg-white">
        <p class="title">交易说明</p>
        <p class="content">交易说明交易接口的垃圾方式来得快上课啦的解放克里斯丁说明交易说明交易说明交易说明交易说明交易说明交易说明交易说明交易说明交易说明交易说明</p>
      </div>
      <div class="agree">

        <van-checkbox v-model="isAgree" shape="square">
          我已阅读并同意
          <span class="c-main">《投资协议》</span>、
          <span class="c-main">《电子签名授权委托书》</span>、
          <span class="c-main">《风险提示书》</span>
          及其他相关的条款协议
        </van-checkbox>
      </div>
    </div>
    <div class="bottom-op bg-white">
      <span class="price">￥{{totalPrice}}</span>
      <van-button class="btn-bg" @click="submitCheck">提交审核</van-button>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"
import localStore from '@/utils/localStorage'

export default {
  data() {
    return {
      userInfo: {},
      projectInfo: {},
      payType: 1, // 支付方式
      isAgree: false, // 是否同意

      buyInfo: {
        count: 0,
      },

      esign: '', // 电子签名图片
      esign_id: '',
      front_id: '',
      back_id: ''
    }
  },
  computed: {
    projectAbout() {
      return this.projectInfo.projectProgramme ? this.projectInfo.projectProgramme[0] : {};
    },

    // 剩余份数
    remainCount() {
      return this.projectInfo.limit_buy_num - this.buyInfo.count || 0;
    },
    // 服务费
    servicePrice() {
      return this.projectAbout.price * this.buyInfo.count * this.projectInfo.service_rate / 100 || 0;
    },
    // 总金额
    totalPrice() {
      return this.projectAbout.price * this.buyInfo.count + this.servicePrice || 0;
    },
  },
  created() {
    this.getUserInfo();
    this.getProjectInfo();
    this.getCardId();
  },
  methods: {
    getCardId() {
      let front = localStore.get('front_card_id')
      let back = localStore.get('back_card_id')
      let sign_id = localStore.get('sign_image_id')
      let sign = localStore.get('esign')
      this.esign = sign;
      this.esign_id = sign_id;
      this.front_id = front;
      this.back_id = back;
    },
    // 获取用户信息
    getUserInfo() {
      this.$axios.post(api.self.userInfo, {
        project_id: this.$route.query.id
      }).then(res => {
        this.userInfo = res.data;
      })
    },
    // 获取项目info
    getProjectInfo() {
      this.$axios.post(api.home.projectInfo, {
        project_id: this.$route.query.id
      }).then(res => {
        console.log('pro详情', res.data)
        this.projectInfo = res.data;
      })
    },
    // 获取电子签名
    // getSign() {
    //   this.$axios.post(api.home.projectInfo, {
    //     project_id: this.$route.query.id
    //   }).then(res => {
    //     console.log('详情', res.data)
    //     // this.projects = res.data.data.list;
    //     this.projectInfo = res.data;
    //   })
    // },
    handleMin() {
      if (this.buyInfo.count <= 0) return;
      this.buyInfo.count--;
    },
    handleAdd() {
      if (this.buyInfo.count >= this.projectInfo.limit_buy_num) return;
      this.buyInfo.count++;
    },
    // 跳转签名页面
    toSign() {
      this.$router.push({
        path: '/project/esign'
      })
    },
    // 上传身份证
    uploadCard() {
      this.$router.push({
        path: '/project/uploadCard',
        query: {},
      })
    },
    // 提交审核
    submitCheck() {
      if (!this.isAgree) {
        this.$toast({
          type: 'fail',
          message: '请阅读并同意相关条款协议'
        })
        return;
      }
      let param = {
        project_id: this.$route.query.id,
        programme_id: this.projectInfo.projectProgramme[0].programme_id,
        num: this.buyInfo.count,
        autograph: this.esign_id,
        remark: '--',
        pay_type: this.payType,
        id_card_img_positive: this.front_id,
        id_card_img_back: this.back_id,
      }
      console.log('param', param)
      for (let key in param) {
        if (!param[key]) {
          this.$toast({
            type: 'fail',
            message: '信息请填写完整'
          })
          return;
        }
      }
      this.$axios.post(api.home.submitOrder, param).then(res => {
        this.$router.back();
      })
    },

  }
}
</script>

<style lang='less' scoped>
.main {
  padding-bottom: 1.2rem;
}
.user-info {
  padding: 0.3rem;
  box-sizing: border-box;
  //   height: 2.26rem;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  font-size: 0.29rem;
  .info {
    display: flex;
    justify-content: space-between;
  }
  .address {
    font-size: 0.22rem;
    color: #666;
    padding: 0.1rem 0 0.28rem 0;
    // border-bottom: 1px solid #eee;
  }
  .email {
    margin-top: 0.26rem;
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
.pay-type {
  height: 2.5rem;
  .type {
    p {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.24rem 0 0.24rem;
      &:nth-child(1) {
        border-bottom: 1px solid #eee;
      }
    }
    .tt {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 8px;
      }
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
.describe {
  // height: 1.7rem;
  padding: 0.3rem;
  border-radius: 15px;
  .title {
    margin-bottom: 0.2rem;
  }
  .content {
    font-size: 0.24rem;
  }
}
.agree {
  margin-top: 0.3rem;
  // padding: 0.3rem;
  border-radius: 15px;
  /deep/.van-checkbox__label {
    font-size: 0.24rem;
  }
}
.bottom-op {
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 0.3rem;
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.15);
  .price {
    font-size: 0.3rem;
    font-weight: bold;
    color: #fe443c;
  }
  /deep/.van-button {
    width: 2.4rem;
    height: 0.66rem;
  }
}
</style>
