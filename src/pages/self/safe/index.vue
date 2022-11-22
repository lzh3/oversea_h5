<template>
    <div class="safe-page bg1">
        <c-common-top :title="$t('changepay.safe')" :isBack="true" />
        <div class="safe-box p-30">
            <div class="bg-white card" @click="toChange(0)">
                <span>{{$t('changepay.title1')}}</span>

                <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
            <div class="bg-white" @click="toChange(1)">
                <span>{{$t('changepay.title')}}</span>
                <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    created() { },
    methods: {
        toChange(type){
            if(type==0){
              this.$router.push({
                 path: '/self/changepwd'
              })
            }else{
                 this.$router.push({
                 path: '/self/changepay'
              })
            }
        }
    },
};
</script>
<style lang="less" scoped>
.safe-box {
    div {
        display: flex;
        padding: 0 0.3rem;
        height: 0.85rem;
        border-radius: 15px;
        margin: 0.3rem 0;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
