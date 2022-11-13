<template>
    <div class="bg1">
        <c-common-top title="银行卡列表" @to="toAdd" :isBack="true" :isTo="true" toText="新增"></c-common-top>
        <div class="main p-30">
            <ul class="bank-list">
                <li v-for="item in list" :key="item.num">
                    <p class="name">{{item.name}}</p>
                    <p class="num">{{item.num}}</p>
                    <p class="time">
                        添加日期：{{item.date}}
                    </p>
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
                    name: '中国银行',
                    num: '6226123412348888',
                    date: '2022-02-20',
                },
                {
                    name: '建设银行',
                    num: '6226123412348888',
                    date: '2022-06-20',
                },
            ]
        };
    },
    created() { },
    methods: {
        toAdd(){
            this.$router.push({
                path: '/bank/add'
            })
        }
    },
};
</script>
<style lang="less" scoped>
.bank-list {
    li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 2rem;
        margin-bottom: 0.3rem;
        padding: 0.3rem;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 15px;
        color: #666;
        .num{
            font-size: 0.42rem;
        }
    }
}
</style>
