<template>
    <div class="list-wrap">
        <ul>
            <li class="item" v-for="item in cards" :key="item.id" @click="handleItemClick(item)">
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

export default {
    props: {
        cards: {
            type: Array,
            default: () => []
        },
    },
    filters: {

    },
    data() {
        return {

        }
    },
    methods: {
        handleItemClick(item) {
            this.$router.push({
                path: '/find/newsDetail',
                query: {
                    content: item.contents,
                },
            })
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