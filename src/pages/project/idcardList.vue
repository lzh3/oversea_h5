<template>
    <div class="page-wrap">
        <c-common-top :isBack="true" :title="$t('subscribe.idcard')" :isTo="true" :toText="$t('common.add')" @to="toUpload"></c-common-top>
        <div class="id-list">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <span>{{item.name}}</span>
                    <i class="iconfont icon-xiangyoujiantou"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: '3948395894543556',
                    name: '张三',
                },
                {
                    id: '40883495834989',
                    name: '李四',
                },
            ],
        };
    },
    created() { },
    methods: {
        toUpload(){
            this.$router.push({
                path: '/project/uploadCard'
            })
        }
    },
};
</script>
<style lang="less" scoped>
.id-list {
    padding: 0 0.3rem;
    li {
        display: flex;
        padding: 0 0.3rem;
        justify-content: space-between;
        height: 0.88rem;
        background: #fff;
        align-items: center;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
        border-radius: 15px;
        margin-bottom: 0.3rem;
    }
}
</style>
