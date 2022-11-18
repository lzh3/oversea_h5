
<template>
  <div class="home-wrap">
    <!-- {{$t('common.save')}}
    <van-button type='primary' @click="changeLocale">点击</van-button> -->
    <div class="search">
      <p class="position" @click="goPosition">
        <img src="../../assets/imgs/home/position.png" alt="">
        <span>中国</span>
      </p>
      <van-search v-model="keyword" shape="round" background="transparent" left-icon="search" placeholder="请输入项目名称" />
    </div>
    <div class="main p-30">
      <section class="home-top">
        <!-- <div class="search">
          <p class="position" @click="goPosition">
            <img src="../../assets/imgs/home/position.png" alt="">
            <span>中国</span>
          </p>
          <van-search v-model="keyword" shape="round" background="transparent" left-icon="search" placeholder="请输入项目名称" />
        </div> -->
        <div class="bar-section">
          <section class="banner-section">
            <van-swipe class="my-swipe" :show-indicators="false" :autoplay="2000" indicator-color="white">
              <!-- <van-swipe-item>
                {{$t('common.save')}}
                <van-button type='primary' @click="changeLocale">点击</van-button>
              </van-swipe-item> -->
              <van-swipe-item v-for="item in banners" :key="item">
                <img :src="item" alt="">
              </van-swipe-item>
            </van-swipe>
          </section>
        </div>
        <div class="column-wrap">
          <van-row class="columns">
            <van-col span="8" v-for="item in columns" :key="item.text" @click="jumpTo(item)">
              <div class="icon">
                <img :src="item.icon" alt="">
              </div>
              <p class="text">{{item.text}}</p>
            </van-col>
          </van-row>
        </div>
        <div class="adv-section">
         <van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
    <van-swipe-item v-for="item in noticelist" :key="item.id">{{item.title}}</van-swipe-item>

  </van-swipe>
</van-notice-bar>
        </div>
      </section>

      <div class="section-wrap">
        <section class="project-list">
          <c-common-title title='精品项目' type='project' @more='handleProjectMore'></c-common-title>
          <c-home-list :cards='projects' />
        </section>
        <section class="fashion-list">
          <c-common-title title='时尚好物' type='fashion'></c-common-title>
          <c-article-list :cards='articles' />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"

import barIcon1 from '../../assets/imgs/home/bar_icon1.png'
import barIcon2 from '../../assets/imgs/home/bar_icon2.png'
import barIcon3 from '../../assets/imgs/home/bar_icon3.png'
import barIcon4 from '../../assets/imgs/home/bar_icon4.png'

import cHomeList from "@/components/home/c-home-list"
import cArticleList from "@/components/home/c-article-list"

export default {
  // name: 'Home',
  components: {
    cHomeList,
    cArticleList,
  },
  data() {
    return {
      noticelist:[],
      save: 'save',
      keyword: '',
      columns: [
        {
          icon: barIcon1,
          text: '投资推荐',
          url: '/projectList'
        },
        {
          icon: barIcon2,
          text: '好物鉴赏',
          url: ''
        },
        {
          icon: barIcon3,
          text: '新手福利',
          url: ''
        },
        {
          icon: barIcon4,
          text: '即将上线',
          url: ''
        },

      ],
      projects: [],
      articles: [],
      banners: [],

      apage: 0,
      apageSize: 15,
    }
  },
  created() {
    this.getProjectList();
    this.getArtList();
    this.getnoticelist()
  },
  methods: {
    // 获取公告列表
    getnoticelist(){
       this.$axios.post(api.home.notice, {
        type: 1,
        page: this.apage,
        pageSize: this.apageSize
      }).then(res => {
        console.log('notice', res)
        this.noticelist = res.data.list;
      })
    },
    // 获取项目列表
    getProjectList() {
      this.$axios.post(api.home.projectList, {

      }).then(res => {
        console.log('项目列表', res)
        this.projects = res.data.list;
        this.banners = res.data.list.map(item => item.image)
      })
    },
    // 时尚好物
    getArtList() {
      this.$axios.post(api.home.articleList, {
        type: 1,
        page: this.apage,
        pageSize: this.apageSize
      }).then(res => {
        console.log('时尚', res)
        this.articles = res.data.list;
      })
    },
    changeLocale() {
      console.log('changelocale', this.$i18n.getLocaleMessage('en'))
      this.$i18n.locale = 'ch';
      // this.$forceUpdate()
    },
    // 跳转选择位置
    goPosition() {
      this.$router.push({
        path: '/position'
      })
    },
    handleProjectMore(type) {
      console.log('type', type)
      if (type === 'project') {
        this.$router.push({
          path: '/projectList'
        })
      }
    },
    // colomn跳转
    jumpTo(item){
      this.$router.push({
        path: item.url,
        query: {
          tab: 1,
        },
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home-wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  //   padding: 0 0.3rem;
  box-sizing: border-box;
  // height: 100vh;
  background: url("../../assets/imgs/bg1.jpg") 100% / cover fixed;
  .main {
    padding-bottom: 1.5rem;
  }
}
.bar-section {
}
.my-swipe {
  /deep/.van-swipe__track {
    width: 100% !important;
    .van-swipe-item {
      color: #fff;
      width: 100% !important;
      line-height: 2.5rem;
      text-align: center;
      //   background-color: #39a9ed;
      border-radius: 0.29rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.29rem;
      }
    }
  }
}
.search {
  //   position: sticky;
  //   top: 0;
  //   z-index: 99;
  width: 100%;
  padding: 0 0.3rem;
  display: flex;
  .position {
    width: 1.58rem;
    display: flex;
    align-items: center;
    span {
      font-size: 0.29rem;
      // font-family: Source Han Sans CN;
      font-weight: 400;
      color: #fefefe;
      margin-left: 0.12rem;
    }
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
  }
}
.home-top {
  position: relative;
  width: 100%;
  box-sizing: border-box;

  .van-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .column-wrap {
    // position: absolute;
    width: auto;
    margin: 0.3rem auto;
    .columns {
      display: flex;
      width: 100%;
      height: 1.57rem;
      background: #fff;
      text-align: center;
      .icon {
        width: 0.8rem;
        height: 0.8rem;
        margin: 0 auto 0.1rem;
        // padding-top: 2px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        font-size: 0.22rem;
        // font-family: Source Han Sans CN;
        font-weight: 400;
        color: #333333;
      }
    }
  }
  .adv-section {
    font-size: 0.28rem;
    text-align: left;
    margin-bottom: 0.3rem;
    background-color: #fffbe8;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    .tag {
      display: inline-block;
      padding: 0 3px;
      line-height: 0.42rem;
      font-size: 0.24rem;
      color: #204feb;
      border-radius: 0.1rem;
      border: 1px dashed #0a35d8;
    }
    .info {
      margin: 0 4px;
    }
  }
}
.section-wrap {
  // margin-top: 1.065rem;
  // padding: 0 0.3rem;
}
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
</style>
