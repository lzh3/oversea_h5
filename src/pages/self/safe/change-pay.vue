<template>
    <div class="change-page">
        <c-common-top title="修改密码" :isBack="true" />
        <div class="content">
            <van-field v-model="info.old" type="tel" label="原密码" placeholder="请填写原密码" />
            <van-field v-model="info.new" label="新密码" placeholder="请填写新密码" />
            <van-field v-model="info.address" label="确认密码" placeholder="再次填写确认" />
            <div  class="tips">
                <p>密码必须是8-16位英文字母、数字的组合</p>
                <p>忘记密码请联系业务人员修改</p>
            </div>
            <van-button type="info" class="btn-bg" block>确认修改</van-button>

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
.tips{
    font-size: 0.22rem;
}
</style>