
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
        <news-list :cards="newsList"></news-list>
      </section>
    </div>

  </div>
</template>

<script>
import newsList from '@/components/find/newsList'

export default {
  name: 'Find',
  components: {
    newsList,

  },
  data() {
    return {
      msg: '我的',
      newsList: [
        {
          id: 1,
          url: 'abb',
          title: '标题1234234标题呀',
          time: '2022-01-12'
        },
        {
          id: 12,
          url: '',
          title: '标题1234234标搭建费看技术大连科技按时来看风景索拉扣的离开了看似简单分开两三点就卡拉三等奖发路撒大家看题呀',
          time: '2022-01-12'
        },
        {
          id: 3,
          url: 'abb',
          title: '标题1234234标jkjk就看看题呀的框架法兰克深大附近卡拉三等奖福利卡数据的弗兰克',
          time: '2022-01-12'
        },
      
      ],

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main{
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
.banner-section{
  // margin-top: 0.26rem;
}
.news-section{
  margin-top: 0.34rem;
}
</style>
