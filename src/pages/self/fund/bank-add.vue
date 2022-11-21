<template>
    <div class="wrapper bg1">
        <c-common-top :title="$t('fund.addbank')" :isBack="true"></c-common-top>
        <div class="main p-30">
            <div class="content">
                <van-field v-model="info.bank_name" :label="$t('fund.addbank')" placeholder="" />
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="info.bank_address" type="tel" :label="$t('fund.NameonCard')" placeholder="" />
                <van-field v-model="info.bank_real_name" :label="$t('fund.openanaccount')" placeholder="" />
                <van-field v-model="info.bank_code" :label="$t('fund.bankID')" placeholder="" />
                <van-button type="info" class="btn-bg" block @click="saveFn">{{$t('common.save')}}</van-button>

            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/api"
export default {
    data() {
        return {
            info: {},
        };
    },
    created() { },
    methods: {
      saveFn(){
         this.$axios.post(api.bankcard.addbank, {
        bank_name: this.info.bank_name,
        bank_address: this.info.bank_address,
        bank_real_name: this.info.bank_real_name,
        bank_code: this.info.bank_code,
      }).then(res => {
        console.log('res', res)
        if (res.errCode == 200) {
         this.$toast({
            type: 'success',
            message: res.data.errMsg
          })
          this.$router.push('/bank/list')
        } else {
          this.$toast({
            type: 'fail',
            message: res.data.errMsg
          })
        }
      })
      }
    },
};
</script>
<style lang="less" scoped>
.content {
    padding: 1rem 0.35rem;
    background-color: #fff;
    border-radius: 15px;
    .van-button{
        margin-top: 1.5rem;
    }
}
</style>
