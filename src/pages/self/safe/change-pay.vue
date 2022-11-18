<template>
    <div class="change-page">
        <c-common-top title="修改支付密码" :isBack="true" />
        <van-form ref="vanform" class="vanform">
        <div class="content">
            <van-field v-model="info.old" type="tel" label="姓名" placeholder="请填写姓名" :rules="[{ required: true, message: '请填写姓名' }]" />
            <van-field v-model="info.new" label="证件号" placeholder="请填写证件号" :rules="[{ required: true, message: '请填写证件号' }]" />

            </div>
            <van-button type="info" class="btn-bg" block>下一步</van-button>
         </van-form>
        </div>

    </div>
</template>

<script>
import api from "@/api/api";
export default {
    data() {
        return {
            info: {},
        };
    },
    created() { },
    methods: {},
};
</script>
<style lang="less" scoped>
.vanform{
    margin: auto;
  width: 6.9rem;
height: 7.51rem;
background: #FFFFFF;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
opacity: 0.8;
border-radius: 0.29rem;
margin-top: 0.2rem;
  padding-top: 0.8rem;
  .content{
      /deep/.van-cell{
     padding-left: 35px;
    font-size: 29px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #111;
  }

  }

   /deep/.van-button{
     margin-top: 0.6rem;
    width: 6rem;
    margin:  auto;
    margin-top: 3rem;
  }
}
</style>
