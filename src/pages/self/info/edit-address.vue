<template>
  <div class="address-page bg1">
    <c-common-top :title="$t('info.edit_address')" :isBack="true"></c-common-top>
    <div class="main p-30">
      <van-field v-model="info.name" :label="$t('info.receiver')" placeholder="名字"/>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="info.phone" type="tel" :label="$t('info.phone')" :placeholder="$t('info.phone')"/>
      <van-field v-model="info.address" :label="$t('info.detailaddress')" :placeholder="$t('info.Provincialstreets')"/>
      <div class="default">
        <span>{{$t('info.setdefault')}}</span>
        <van-switch size="16px" v-model="info.default" />
      </div>
      <van-button type="info" class="btn-bg" block>{{$t('common.save')}}</van-button>
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

