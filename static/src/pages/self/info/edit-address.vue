<template>
  <div class="address-page bg1">
    <c-common-top title="修改收件地址" :isBack="true"></c-common-top>
    <div class="main p-30">
      <van-field v-model="info.name" label="收件人：" placeholder="名字"/>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="info.phone" type="tel" label="手机号码：" placeholder="手机号"/>
      <van-field v-model="info.address" label="详细地址：" placeholder="省、市、区、街道"/>
      <div class="default">
        <span>设为默认</span>
        <van-switch size="16px" v-model="info.default" />
      </div>
      <van-button type="info" class="btn-bg" block>保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    }
  },
  methods: {


  }
}
</script>

<style lang='less' scoped>
/deep/.van-field__label {
  width: 1.5rem;
  font-size: 14px;
}
/deep/.van-field__control{
    font-size: 14px;
}
.main {
  margin: 0 0.3rem;
  padding: 0.5rem 0.3rem 0.8rem;
  background-color: #fff;
  border-radius: 15px;
  .default{
    font-size: 0.28rem;
    line-height: 0.28rem;
    display: flex;
    align-items: center;
    text-align: right;
    justify-content: end;
    margin: 0.5rem 0 1.5rem 0;
    span{
        margin-right: 4px;
    }
  }
}
</style>

