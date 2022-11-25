
<template>
  <div class="bg1 self-wrap_page">

    <!-- <router-view v-if="$route.path!=='/self'" /> -->
    <div class="self-wrap">
      <c-common-top :title="$t('self.mine')" />
      <div class="main p-30">
        <div class="user-card p-30" @click="goEdit">
          <p class="pic">
            <img :src="avatar" alt="">
          </p>
          <p class="info">
            <span class="user-name">{{userInfo.user_name}}</span>
            <span class="user-id">ID: {{info.id}}</span>
          </p>
          <p class="icon">
            <i class="iconfont icon-xiangyoujiantou c-white"></i>
          </p>
        </div>
        <div class="columns">
          <ul>
            <li class="p-30" v-for="item in columns" :key="item.title" @click="toPage(item)">
              <p class="setting">
                <img :src="item.pic" alt="">
              </p>
              <p class="title">{{$t(item.lang)}}</p>
              <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import localStore from '@/utils/localStorage'
import api from "@/api/api"
import localStorage from '@/utils/localStorage'
import img1 from '../../assets/imgs/self/1.png'
import img2 from '../../assets/imgs/self/2.png'
import img3 from '../../assets/imgs/self/3.png'
import img4 from '../../assets/imgs/self/4.png'
import img5 from '../../assets/imgs/self/5.png'
import img6 from '../../assets/imgs/self/6.png'
import img7 from '../../assets/imgs/self/7.png'
import img8 from '../../assets/imgs/self/8.png'
import img9 from '../../assets/imgs/self/9.png'
import img10 from '../../assets/imgs/self/10.png'
import img11 from '../../assets/imgs/self/11.png'


export default {
  name: 'Home',
  data() {
    return {
      avatar: '',
      userInfo: {},
      info: {
        id: 3487854758
      },
      columns: [
        {
          title: '客户管理',
          pic: img1,
          to: '/client/manage',
          lang: 'self.clientManage'
        },
        {
          title: '已投项目',
          pic: img2,
          to: '/hasProject',
          lang: 'self.investProject'
        },
        {
          title: '资金管理',
          pic: img3,
          to: "/fund/manage",
          lang: 'self.fundManage'
        },
        {
          title: '订单管理',
          pic: img4,
          to: "/self/order",
          lang: 'self.orderManage'
        },
        {
          title: '幸运天天乐',
          pic: img11,
          to: '/self/luckydraw',
          lang: 'self.lucky'
        },
        {
          title: '我的收藏',
          pic: img6,
          to: '',
          lang: 'self.collect'
        },
        {
          title: '高级认证',
          pic: img7,
          to: '',
          lang: 'self.advCert'
        },
        {
          title: '风险评估',
          pic: img8,
          lang: 'self.risk',
          to: '/self/riskassessment',
        },
        {
          title: '账户安全',
          pic: img9,
          to: '/self/safe',
          lang: 'self.accountSafe'
        },
        // {
        //   title: '更多',
        //   pic: img10,
        //   to: '/login',
        //   lang: 'self.more'
        // },
        {
          title: '退出登录',
          lang: 'login.loginOut',
          to: '/login',
          type: 'out',
        },
      ]

    }
  },
  created() {
    this.getAvatar();
    this.getUserInfo()
  },
  methods: {
    getAvatar(){
      let imgid = localStore.get('imgava')
      if(!imgid) return;
      this.$axios.post(api.common.getImg, {
        image_id: imgid
      }).then(res => {
        console.log('头像', res)
        this.avatar = res.data.image_base64
      })
    },
    // 获取用户信息
    getUserInfo() {
      this.$axios.post(api.self.userInfo, {
      }).then(res => {
        console.log('用户详情', res.data)
        this.userInfo = res.data;
        localStorage.set('userid', this.userInfo.user_id)
      })
    },
    toPage(item) {
      console.log('item', item)
      if(item.type==='out'){ // 退出登录
        localStore.clear();
      }
      this.$router.push({
        path: item.to
      })
    },
    goEdit() {
      this.$router.push('/self/edit')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.self-wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background: url("../../assets/imgs/bg2.jpg") 100% / cover;
  .main {
    padding-bottom: 1rem;
  }
}
.user-card {
  display: flex;
  align-items: center;
  height: 2.19rem;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(112deg, #576bdd 0%, #3f63ea 100%);
  border-radius: 0.29rem;
  .iconfont {
    color: #fff;
  }
  .pic {
    width: 1.08rem;
    height: 1.08rem;
    border-radius: 50%;
    background: #ddd;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 0.14rem;
    .user-name {
      font-size: 0.29rem;
      font-weight: 400;
      margin-bottom: 0.18rem;
    }
    .user-id {
      font-size: 0.22rem;
    }
  }
  .icon {
    flex: 1;
    text-align: right;
  }
}
.columns {
  margin-top: 0.3rem;
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
      height: 0.84rem;
      border-radius: 0.28rem;
      background-color: #fff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      .setting {
        width: 0.32rem;
        height: 0.32rem;
        // background-color: skyblue;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        font-size: 0.29rem;
        margin-left: 0.2rem;
      }
      .icon {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
