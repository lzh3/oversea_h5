<template>
    <div class="bg1">
        <c-common-top :title="$t('fund.withdraw')" :isBack="true"></c-common-top>
        <div class="main">
            <div class="history p-30">
                <ul>
                    <!-- <li class="date">{{item.date}}</li> -->
                    <div class="li-content">
                        <li v-for="(v,index) in historyList" :key='index'>
                            <p class="status-block">
                                <span class="money">{{v.money | toNumber}}</span>
                                <span class="status" :class="v.withdraw_status==0?'ing':v.withdraw_status==1?'finish':'back'">{{v.withdraw_status | statusFilter}}</span>
                            </p>
                            <p class="time-flag c-888">
                                <span class="time">{{v.pay_time || v.create_time | toSecDate}}</span>
                                <!-- <span class="com">{{$t('fund.commission')}}：{{v.commission}}</span> -->
                            </p>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/api"

export default {
    data() {
        return {
            historyList: [
            ],

            page: 0,
            pageSize: 20,
        }
    },

    filters: {
        statusFilter(val) {
            // 0（默认）生成订单1审核中2提现成功3审核失败
            let obj = {
                0: '生成订单',
                1: '审核中',
                2: '提现成功',
                3: '审核失败'
            }
            return obj[val]
        },
    },
    created() {
      this.getList();
    },
    methods: {
        // 提现列表
        getList() {
            // bankcardAPI.withdrawList
            this.$axios.post(api.bankcard.withdrawList, {
                page: this.page,
                pageSize: this.pageSize,
            }).then(res => {
                // console.log('用户详情', res.data)
                this.historyList = res.data.list;
            })
        },
    }
}
</script>

<style lang='less' scoped>
.history {
    ul {
        .li-content {
            // overflow: hidden;
        }
        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 1.3rem;
            padding: 0.3rem;
            margin-bottom: 0.12rem;
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 0.29rem;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
            // &:not(:last-child) {
            //     border-bottom: 1px solid #eee;
            // }
            .status-block {
                display: flex;
                justify-content: space-between;
                font-size: 0.31rem;
                line-height: 0.3rem;
                vertical-align: middle;
                .money {
                    font-weight: bold;
                }
                .status {
                    font-size: 0.27rem;
                    &.ing {
                        color: #0c9f39;
                    }
                    &.finish {
                        color: #888;
                    }
                    &.back {
                        color: #ec3535;
                    }
                }
            }
            .time-flag {
                margin-top: 0.15rem;
                font-size: 0.24rem;
                display: flex;
                justify-content: space-between;
            }
        }
        .date {
            margin-bottom: 0.3rem;
            text-align: left;
            padding-left: 0;
            padding-bottom: 0;
            height: auto;
            background-color: transparent;
            font-size: 0.29rem;
            font-weight: 400;
            color: #333;
            border-bottom-color: transparent !important;
        }
    }
}
</style>
