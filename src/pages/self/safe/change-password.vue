<template>
  <div class="change-page">
    <c-common-top :title="$t('safe.changepwd')" :isBack="true" />
    <div class="content">
      <van-form ref="vanform" class="vanform">
        <van-field
          v-model="info.old"
          type="tel"
          :label="$t('safe.originalpwd')"
          :placeholder="$t('safe.hint1')"
          :rules="[{ validator, required: true, message:$t('safe.tip1')  }]"
        />
        <van-field
          v-model="info.new"
          :label="$t('safe.newpwd')"
          :placeholder="$t('safe.hint2')"
          :rules="[{ required: true, message: $t('safe.tip2') }]"
        />
        <van-field
          v-model="info.address"
          :label="$t('safe.confirm')"
          :placeholder="$t('safe.hint3')"
          :rules="[{ validator1, message: $t('safe.tip3') }]"
        />
        <div class="tips">
          <p>{{$t('safe.hint4')}}</p>
          <p>{{$t('safe.hint5')}}</p>
        </div>
        <van-button type="info" class="btn-bg" block @click="changepwd"
          >{{ $t('safe.hint6') }}</van-button
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
.content{
  margin: auto;
  width: 6.9rem;
height: 7.51rem;
background: #FFFFFF;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
opacity: 0.8;
border-radius: 0.29rem;
.vanform{
  margin-top: 0.2rem;
  padding-top: 0.8rem;
  /deep/.van-cell{
    padding-left: 35px;
    font-size: 29px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #333333;
  }
  .tips{
     padding-left: 0.3rem;
    p{
    margin-top: 0.41rem;
    margin-left: 0.33rem;
    // height: 21px;
font-size: 0.22rem;
font-family: Source Han Sans CN;
color: #333333;
    }
    p:nth-child(2){
      margin-top: 0.2rem;
      margin-bottom: 0.6rem;
    }


  }
  /deep/.van-button{
    width: 6rem;
    margin: auto;
  }
}
}
</style>
