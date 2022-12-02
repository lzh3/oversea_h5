<template>
    <div class="change-page">
        <c-common-top :title="$t('changepay.title')" :isBack="true" />
        <van-form ref="vanform" class="vanform">
            <div class="content">
                <van-field v-model="info.real_name" type="tel" :label="$t('changepay.hint1')" :placeholder="$t('changepay.tip1')" :rules="[{ required: true, message: $t('changepay.tip1') }]" />
                <van-field v-model="info.id_card" :label="$t('changepay.hint2')" :placeholder="$t('changepay.tip2')" :rules="[{ required: true, message: $t('changepay.tip2') }]" />
                <van-field v-model="info.new_password" :label="$t('changepay.hint3')" :placeholder="$t('changepay.tip3')" :rules="[{ required: true, message: $t('changepay.tip3') }]" />
            </div>
            <van-button type="info" class="btn-bg" block @click="toNext">{{$t('changepay.next')}}</van-button>
        </van-form>
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
    methods: {
        // updatepay
        toNext(){
          this.$axios.post(api.updatepwd.updatepay,{
            ...this.info,
          }).then(res=>{
            console.log('res', res)
            if(res.errCode==1){
              this.$toast.fail(res.errMsg)
            }
          })
        }

    },
};
</script>
<style lang="less" scoped>
.vanform {
    margin: auto;
    width: 6.9rem;
    height: 7.51rem;
    background: #ffffff;
    box-shadow: 0px 5px 10pxupdatepwd0px rgba(0, 0, 0, 0.05);
    opacity: 0.8;
    border-radius: 0.29rem;
    margin-top: 0.2rem;
    padding-top: 0.8rem;
    .content {
        /deep/.van-cell {
            padding-left: 35px;
            font-size: 29px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #111;
        }
    }

    /deep/.van-button {
        margin-top: 0.6rem;
        width: 6rem;
        margin: auto;
        margin-top: 3rem;
    }
}
</style>
