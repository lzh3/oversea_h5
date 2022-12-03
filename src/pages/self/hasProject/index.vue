<template>
  <div class="project-page bg2">
    <c-common-top :title="$t('hasproject.investment')" :isBack="true" color='white' />
    <div class="main">
      <div class="summary-block">
        <p class="title">{{$t('hasproject.totalrevenue')}}（元）</p>
        <p class="count">{{totalinvest}}</p>
        <!-- <p class="income">
          {{$t('hasproject.lastrevenue')}}
          <span>255.20</span>
        </p> -->
      </div>
      <div class="project-list p-30">
        <ul>
          <li v-for="item in projects" :key="item.id" @click="topage(item.project_id)">
            <h3 class="item-title">
              {{item.name}}
              <van-tag color="#EE7348">{{item.type}}</van-tag>
            </h3>
            <div class="details">
              <div class="item">
                <p class="small-title">{{$t('hasproject.investmentamount')}}</p>
                <p>{{item.investment_amount_all | toNumber}}</p>
              </div>
              <div class="item">
                <p class="small-title">{{$t('hasproject.uprevenue')}}</p>
                <p class="total">{{item.income_amount_all | toNumber}}</p>
              </div>
              <div class="item">
                <p class="small-title">{{$t('hasproject.expire')}}</p>
                <p>{{item.sy_time | toDay}} {{$t('hasproject.day')}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"
import localStore from '@/utils/localStorage'
export default {
  data() {
    return {
      totalinvest:null,
      projects: [
        // {
        //   id: 0,
        //   title: '项目abc',
        //   invest: 10000000,
        //   time: '2022-02-28',
        //   tags: ['酒店', '利润'],
        //   total: 232344,
        //   day: 200,
        // },
        // {
        //   id: 1,
        //   title: '项目c',
        //   invest: 398000,
        //   time: '2022-02-28',
        //   total: 230923,
        //   day: 300,
        // },
      ]
    };
  },
  created() {
    this.geinvestmentlist()
   },
  methods: {
        // 获取用户信息
        geinvestmentlist() {
      this.$axios.post(api.self.investmentlist, {
        user_id:localStore.get('userid')
      }).then(res => {
        this.totalinvest = res.data.income_amount_count_all
        this.projects = res.data.list
        console.log('用户详情', res)

      })
    },
    topage(v){
      this.$router.push({
        path:'/projectDetail',
        query: {
                    id: v,
                },
      })
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.van-tag{
    margin-right: 5px;
}
.summary-block {
  width: 100%;
  margin: 0.3rem 0 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 0.22rem;
  .title {
    font-weight: 500;
  }
  .count {
    font-size: 0.38rem;
    font-weight: bold;
    margin: 0.25rem 0;
  }
  .income {
    font-weight: 400;
  }
}
.project-list {
  li {
    height: 2.13rem;
    background-color: #fff;
    width: 100%;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);

    .item-title {
      line-height: 0.28rem;
      font-size: 0.29rem;
      font-weight: 400;
      color: #333;
    }
    .details{
        display: flex;
        justify-content: space-between;
        // text-align: center;
        p{
            font-size: 0.3rem;
            &:last-of-type{
                text-align: center;
            }
        }
        .small-title{
            font-size: 0.23rem;
            color: #888;
            margin: 0.2rem 0 0.25rem;
        }
    }
  }
}
</style>
