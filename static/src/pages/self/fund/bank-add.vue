<template>
    <div class="wrapper bg1">
        <c-common-top title="添加银行卡" :isBack="true"></c-common-top>
        <div class="main p-30">
            <div class="content">
                <van-field v-model="info.name" label="持卡人姓名：" placeholder="" />
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="info.phone" type="tel" label="银行名称：" placeholder="" />
                <van-field v-model="info.address" label="开户行：" placeholder="" />
                <van-field v-model="info.address" label="银行卡号：" placeholder="" />
                <van-button type="info" class="btn-bg" block>保存</van-button>

            </div>
        </div>
    </div>
</template>

<script>
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
.content {
    padding: 1rem 0.35rem;
    background-color: #fff;
    border-radius: 15px;
    .van-button{
        margin-top: 1.5rem;
    }
}
</style>