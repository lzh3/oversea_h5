
<template>
    <div class="find-wrap bg1">
        <c-common-top />
        <div class="main p-30">
            <section class="banner-section">
                <van-swipe class="my-swipe" :show-indicators="false" :autoplay="2000" indicator-color="white">
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                </van-swipe>
            </section>
            <section class="news-section">
                <c-common-title title='行业动态' type='news'></c-common-title>
                <van-list v-model="loading" :finished="false" @load="getInfo">
                    <news-list :cards="newsList">
                    </news-list>
                </van-list>
            </section>
        </div>

    </div>
</template>

<script>
import newsList from '@/components/find/newsList'
import api from "@/api/api"

export default {
    name: 'Find',
    components: {
        newsList,
        loading: false,

    },
    data() {
        return {
            msg: '我的',
            newsList: [
                // {
                //     id: 1,
                //     url: 'abb',
                //     title: '标题1234234标题呀',
                //     time: '2022-01-12'
                // },

            ],

            pagesize: 15,
            page: 0,

        }
    },
    created() {
        this.getInfo();
    },
    methods: {
        getInfo() {
          this.loading = true;
            this.$axios.post(api.home.articleList, {
                type: 2,
                page: this.page,
                pageSize: this.pagesize

            }).then(res => {
                console.log('res', res.data)
                this.loading = false;
                this.newsList = res.data.list;
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main {
    padding-bottom: 1rem;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 0.2rem;
    line-height: 3.7rem;
    text-align: center;
    background-color: #39a9ed;
    border-radius: 0.29rem;
}
.banner-section {
    // margin-top: 0.26rem;
}
.news-section {
    margin-top: 0.34rem;
}
</style>
