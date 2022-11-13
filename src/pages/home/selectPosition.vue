<template>
    <div class="position-wrap">
        <c-common-top title="选择地区" :isBack='true' />
        <div class="main">
            <div class="search  p-30">
                <p class="icon">
                    <img src="../../assets/imgs/icon/search.png" alt="">
                </p>
                <van-field v-model="keyword" name="" label="" placeholder="请输入国家和地区" />
                <p class="cancel">取消</p>
            </div>
            <div class="line"></div>
            <div class="city-list">
                <ul>
                    <li class="city-item" v-for="item in list" :key="item.name" @click="handleItem">
                        <p class="name">{{item.name}}</p>
                        <p class="word">{{item.word}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            keyword: '',
            list: [
                {
                    name: '阿富汗',
                    word: 'a'
                },
                {
                    name: '中国',
                    word: 'z'
                }
            ],
        }
    },
    methods: {
        // 点击一条
        handleItem(item){
            this.$emit('item', item)
        }
    }
}
</script>
<style lang="less" scoped>
.position-wrap {
    // color: red;
    .main {
        background: #fff;
        margin: 0 0.3rem;
        border-radius: 0.29rem 0.29rem 0px 0px;
        .search {
            display: flex;
            height: 1.05rem;
            align-items: center;
            /deep/.van-field__value {
                border-bottom: 1px solid #3221e9;
            }
            .cancel {
                width: 1.2rem;
            }
        }
        .line {
            height: 0.1rem;
            background: #f0f0f0;
        }
        .city-list{
            padding: 0.22rem 0;
        }
        .city-item{
            display: flex;
            justify-content: space-between;
            // height: 0.44rem;
            padding: 0.22rem 0.3rem;
        }
    }
}
</style>