<template>
    <div class="list-wrap bg1">
        <c-common-top :title="title" :isBack="true"></c-common-top>
        <ul class=" p-30">
            <li class="item" v-for="item in list" :key="item.id" @click="handleItemClick(item)">
                <div class="pic" v-if="item.img_url">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="details">
                    <h3 class="item-title" :class="{'no-img': !item.url}" v-html="item.title"></h3>
                    <p class="time">{{item.update_time | toSecDate}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import api from "@/api/api"

export default {
    props: {
        title: {
            type: String,
            default: '行业动态'
        },
        url: {
            type: String,
            default: api.home.articleList
        }
    },
    filters: {

    },
    data() {
        return {
            loading: false,
            list: [],

            page: 0,
            pagesize: 15,
        }
    },
    created() {
        this.getInfo();
    },
    methods: {
        // 行业动态
        getInfo() {
            this.loading = true;
            this.$axios.post(this.url, {
                type: 2,
                page: this.page,
                pageSize: this.pagesize

            }).then(res => {
                console.log('res', res.data)
                this.loading = false;
                this.list = res.data.list;
            })
        },
        handleItemClick(item) {
            this.$emit('item', item)
        }
    },
}
</script>
<style lang="less" scoped>
.list-wrap {
    width: 100%;
    ul {
        width: 100%;

        .item {
            display: flex;
            width: 100%;
            height: 1.66rem;
            margin-bottom: 0.3rem;
            background: #fff;
            border-radius: 0.28rem;
            overflow: hidden;
            .van-tag {
                margin-right: 0.18rem;
            }
            .pic {
                width: 2.5rem;
                height: 100%;
                background: #f46464;
                border-radius: 0.28rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .details {
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                // height: 100%;
                margin-left: 0.3rem;
                text-align: left;

                .item-title {
                    width: 3.6rem;
                    margin: 0.28rem 0 0.2rem 0;
                    line-height: 0.28rem;
                    font-size: 0.29rem;
                    font-weight: 400;
                    color: #333;
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    &.no-img {
                        width: 100%;
                        box-sizing: border-box;
                        padding-right: 0.3rem;
                    }
                }
                .time {
                    font-size: 0.22rem;
                    font-weight: 400;
                    color: #666;
                }
            }
        }
    }
}
</style>