<template>
    <div class="bg1">
        <c-common-top title="订单管理" :isBack="true" />
        <div class="main p-30">
            <ul class="order-list">
                <li v-for="item in list" :key="item.id" @click="toPay(item)">
                    <p class="title">{{item.title}}</p>
                    <div class="price-block">
                        <span class="price">{{item.price | toNumber}}</span>
                        <i class="iconfont icon-xiangyoujiantou"></i>
                    </div>
                    <p class="status" :class="statusObj[item.status]">
                        {{statusTxt[item.status]}}
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
            statusObj: {
                0: 'no-pay', // 待支付
                1: 'ing', // 审核中
                2: 'back' // 被驳回
            },
            statusTxt: {
                0: '待支付',
                1: '审核中',
                2: '被驳回'
            },
            list: [
                {
                    id: 1,
                    title: '泰国曼谷XXXXXX酒店5年股权',
                    price: 2392389.30,
                    status: '0'
                },
                {
                    id: 2,
                    title: '泰国曼谷XXXXXX酒店5年股权',
                    price: 29.00,
                    status: '1'
                },
                {
                    id: 3,
                    title: '泰国曼谷XXXXXX酒店5年股权',
                    price: 23389.00,
                    status: '2'
                },
            ],
        };
    },
    filters: {

    },
    created() {

    },
    methods: {
        toPay(item){
            this.$router.push({
                path: '/order/pay',
                query: {
                    
                },
            })
        },
    },
};
</script>
<style lang="less" scoped>
.main {
    .order-list {
        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.3rem;
            height: 1.87rem;
            margin-bottom: 0.3rem;
            background: #fff;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
            border-radius: 15px;
            .title {
                font-size: 0.29rem;
                font-weight: 400;
                color: #333;
            }
            .price-block {
                display: flex;
                justify-content: space-between;
                .price {
                    color: #ff1f16;
                }
            }
            .status{
                font-size: 0.24rem;
                &.no-pay{
                    color: #0A35D8;
                }
                &.ing{
                    color: #333;
                }
                &.back{
                    color: #999;
                }
            }
        }
    }
}
</style>