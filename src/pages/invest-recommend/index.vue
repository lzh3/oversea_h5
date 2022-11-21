<template>
    <div class="recommend-page bg1">
        <c-common-top :isBack="true" :title="$t('home.investRec')"></c-common-top>
        <van-tabs v-model="active">
            <van-tab :title="$t('home.investment')"></van-tab>
            <van-tab :title="$t('home.advNotice')"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        };
    },
    created() { },
    methods: {},
};
</script>
<style lang="less" scoped>
/deep/.van-tabs__wrap{
    height: 30px;
}
/deep/.van-tabs__nav{
    background-color: transparent;
    padding-bottom: 15px;
    .van-tabs__line{
        background-color: #0A35D8;
    }
}

</style>
