<template>
    <div class="safe-page bg1">
        <c-common-top title="账户安全" :isBack="true" />
        <div class="safe-box p-30">
            <div class="bg-white card" @click="toChange(0)">
                <span>修改登录密码</span>

                <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
            <div class="bg-white" @click="toChange(1)">
                <span>修改支付密码</span>
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
