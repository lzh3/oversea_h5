
<template>
  <div class="bg1 self-wrap_page">

    <router-view v-if="$route.path!=='/self'" />
    <div class="self-wrap" v-else>
      <c-common-top title="我的" />
      <div class="main p-30">
        <div class="user-card p-30" @click="goEdit">
          <p class="pic"></p>
          <p class="info">
            <span class="user-name">用户昵称</span>
            <span class="user-id">ID: {{info.id}}</span>
          </p>
          <p class="icon">
            <i class="iconfont icon-xiangyoujiantou c-white"></i>
          </p>
        </div>
        <div class="columns">
          <ul>
            <li class="p-30" v-for="item in columns" :key="item.title" @click="toPage(item)">
              <p class="setting"></p>
              <p class="title">{{item.title}}</p>
              <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      info: {
        id: 3487854758
      },
      columns: [
        {
          title: '客户管理',
          pic: '',
          to: '/client/manage',
        },
        {
          title: '已投项目',
          pic: '',
          to: '/hasProject',
        },
        {
          title: '资金管理',
          pic: '',
          to: "/fund/manage"
        },
        {
          title: '幸运天天乐',
          pic: '',
          to: '',
        },
        {
          title: '我的收藏',
          pic: '',
          to: '/self/order',
        },
        {
          title: '高级认证',
          pic: '',
          to: '',
        },
        {
          title: '风险评估',
          pic: '',
          to: '',
        },
        {
          title: '账户安全',
          pic: '',
          to: '/self/safe',
        },
        {
          title: '更多',
          pic: '',
          to: '/login',
        },
      ]

    }
  },
  methods: {
    toPage(item) {
      console.log('item', item)

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
    background: skyblue;
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
      .setting {
        width: 0.32rem;
        height: 0.32rem;
        background-color: skyblue;
        border-radius: 50%;
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
