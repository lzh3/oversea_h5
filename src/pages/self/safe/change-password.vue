<template>
  <div class="change-page">
    <c-common-top title="修改密码" :isBack="true" />
    <div class="content">
      <van-form ref="vanform">
        <van-field
          v-model="info.old"
          type="tel"
          label="原密码"
          placeholder="请填写原密码"
          :rules="[{ validator, required: true, message: '请输入正确原密码' }]"
        />
        <van-field
          v-model="info.new"
          label="新密码"
          placeholder="请填写新密码"
          :rules="[{ required: true, message: '请输入正确内容' }]"
        />
        <van-field
          v-model="info.address"
          label="确认密码"
          placeholder="再次填写确认"
          :rules="[{ validator1, message: '请确认是否输入一致' }]"
        />
        <div class="tips">
          <p>密码必须是8-16位英文字母、数字的组合</p>
          <p>忘记密码请联系业务人员修改</p>
        </div>
        <van-button type="info" class="btn-bg" block @click="changepwd"
          >确认修改</van-button
        >
      </van-form>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import localStorage from "@/utils/localStorage";
export default {
  data() {
    return {
      info: {},
      localpwd:'',
    };
  },
  created() {
    this.localpwd = localStorage.get('userinfo').password
    console.log(this.localpwd,'local');
  },
  methods: {
    // 验证原密码是否正确
       validator(val) {
      return this.localpwd == val;
    },
    //  验证新密码和确认密码
    validator1(val) {
      return this.info.new === val;
    },
    changepwd() {
      this.$refs.vanform.validate().then(() => {
          this.$axios.post(api.updatepwd.updateuserpwd, {
              user_id: localStorage.get("userid"),
              origin_password: this.info.old,
              new_password: this.info.new,
              confirm_password: this.info.address
            })
            .then(res => {
              if (res.errCode == 200) {
                this.$toast.success("提交成功");
                this.$router.push("/self/safe");
              } else {
                this.$toast({
                  type: "fail",
                  message: res.data.errMsg
                });
              }
            });
        }).catch(() => {
          this.$toast.fail("提交失败");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.tips {
  font-size: 0.22rem;
}
.change-page{
  margin: auto;
  width: 6.9rem;
height: 7.51rem;
background: #FFFFFF;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
opacity: 0.8;
border-radius: 0.29rem;
}
</style>
