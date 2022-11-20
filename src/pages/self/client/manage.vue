<template>
  <div class="manage-wrap bg2">
    <c-common-top :title='$t("self.clientManage")' color='white' :isBack="true"></c-common-top>
    <div class="main">
      <div class="summary-block">
        <p class="title">{{$t('client.clientCount')}}</p>
        <p class="count">20</p>
        <p class="income">
          {{$t('client.yMoney')}}:
          <span>255.20</span>
        </p>
      </div>
      <div class="user-list p-30">
        <ul>
          <li class="p-30" v-for="item in userList" :key="item.id" @click="toFund(item)">
            <p class="pic">
                <img :src="item.avatar" alt="">
            </p>
            <div class="details">
              <div class="info">
                <p class="name">{{item.name}}</p>
                <p>ID: {{item.id}}</p>
              </div>
              <div>
                <p class="count">{{$t('client.customer')}}：<span class="num">{{item.count}}</span>
                  <!-- {{$t('client.person')}} -->
                </p>
                <p>{{$t('client.ratio')}}：<span>{{item.rate}}</span></p>
              </div>
            </div>
            <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
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
        userList: [
            {
                name: '天猫精灵',
                id: '3478755',
                count: '10',
                rate: '20%',
                avatar: '',
            },
             {
                name: '天猫精灵',
                id: '34784755',
                count: '10',
                rate: '20%',
                avatar: '',
            },
             {
                name: '天猫精灵',
                id: '3478475',
                count: '10',
                rate: '20%',
                avatar: '',
            },
             {
                name: '天猫精灵',
                id: '3484755',
                count: '10',
                rate: '20%',
                avatar: '',
            },
        ],
    }
  },
  methods: {
    toFund(item){
        this.$router.push({
            path: '/client/manageDetail',
            query: {
                id: item.id,
            }
        })
    }
  }
}
</script>

<style lang='less' scoped>
.manage-wrap {
}
.summary-block {
  width: 100%;
  margin-top: 0.3rem;
  text-align: center;
  color: #fff;
  font-size: 0.22rem;
  .title {
    font-weight: 500;
  }
  .count {
    font-size: 0.38rem;
    font-weight: bold;
    margin: 0.3rem 0;
  }
  .income {
    font-weight: 400;
  }
}

.user-list {
  margin-top: 0.5rem;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 1.3rem;
      margin-bottom: 0.3rem;
      background: #fff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      opacity: 0.8;
      border-radius: 0.29rem;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      .pic {
        // flex: 1;
        width: 0.72rem;
        height: 0.72rem;
        margin-right: 0.3rem;
        border-radius: 50%;
        background-color: skyblue;
      }
      .details {
        display: flex;
        justify-content: space-between;
        align-items:center;
        flex: auto;
        margin-right: 0.3rem;
        font-size: 0.23rem;
        font-weight: 400;
        color: #666;
        .name {
          font-size: 0.29rem;
          color: #333;
            margin-bottom: 0.1rem;
          line-height: 0.3rem;
        }
        .count {
          line-height: 0.3rem;
            margin-bottom: 0.1rem;
          .num {
            color: #0a35d8;
            font-size: 0.36rem;
          }
        }
      }
      .icon{
        color: #333;
      }
    }
  }
}
</style>
