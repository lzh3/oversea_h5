<template>
  <div class="bg1">
    <c-common-top :title="$t('self.clientManage')" :isBack="true"></c-common-top>
    <div class="main p-30">
      <div class="user-card">
        <div class="user-info">
          <p class="pic"></p>
          <p class="info">
            <span class="user-name">{{info.name}}</span>
            <span class="user-id">ID: {{info.id}}</span>
          </p>
        </div>
        <div class="info-detail">
          <div class="detail-item">
            <p>{{$t('client.customer')}}：<span class="count">{{info.client}}</span>人</p>
            <p>{{$t('managedetail.project')}}：<span class="count">{{info.project}}</span>项</p>
          </div>
          <div class="detail-item">
            <p>{{$t('managedetail.time')}}：<span>{{info.time}}</span></p>
            <p>{{$t('managedetail.percentage')}}：<span>{{info.rate}}</span></p>
          </div>
        </div>
      </div>
      <div class="step-block">
        <van-steps inactive-icon='circle' inactive-color='#fff' direction="vertical" :active="100">
          <van-step v-for="item in steps" :key="item.id">
            <h3 class="time">{{item.time}}</h3>
            <div class="step-detail">
              <p class="title">{{$t('managedetail.newuser')}}</p>
              <p class="info">
                <span>{{$t('managedetail.user')}}：{{item.name}}</span>
                <span>ID：{{item.id}}</span>
              </p>
            </div>
          </van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        id: 232343,
        name: '全力詹',
        client: 5,
        project: 10,
        time: '2022-10-05',
        rate: '50%'
      },
      steps: [
        {
          time: '2021-09-22',
          name: '全力詹',
          id: 99,
        },
        {
          time: '2022-03-22',
          name: '全力詹',
          id: 9,
        },
        {
          time: '2022-07-22',
          name: '欧文',
          id: 39,
        }
      ],
    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.user-card {
  // height: 2.4rem;
  padding: 0.3rem;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  opacity: 0.8;
  border-radius: 0.3rem;
}
.user-info {
  display: flex;
  .pic {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    background: skyblue;
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    margin-left: 0.3rem;
    .user-name {
      font-size: 0.29rem;
      font-weight: 400;
    }
    .user-id {
      font-size: 0.22rem;
      color: #888;
    }
  }
}
.info-detail {
  font-size: 0.24rem;
  .detail-item {
    display: flex;
    margin-top: 0.3rem;
    justify-content: space-between;
    .count {
      font-size: 0.29rem;
      color: #3221e9;
    }
  }
}
.step-block {
  margin-top: 0.3rem;
  padding-bottom: 0.6rem;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  /deep/.van-icon {
    background: #fff;
  }
  /deep/.van-step__line {
    background-color: #ddd;
  }
  .time {
    font-size: 0.24rem;
    font-weight: 400;
    color: #333;
    margin-bottom: 0.29rem;
  }
  .step-detail {
    height: 1.28rem;
    padding: 0.22rem 0.3rem;
    box-sizing: border-box;
    background: #f4f4f4;
    border-radius: 10px;
    font-size: 0.24rem;
    .title {
      color: #888;
    }
    .info {
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
      span {
        flex: 1;
      }
    }
  }
}
</style>
