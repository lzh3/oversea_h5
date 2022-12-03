<template>
    <div class="project-page bg3">
        <c-common-top title="我的收藏" :isBack="true" color='#000' />
        <div class="main">
            <!--      <div class="summary-block">-->
            <!--        <p class="title">{{$t('hasproject.totalrevenue')}}（元）</p>-->
            <!--        <p class="count">2000.20</p>-->
            <!--        <p class="income">-->
            <!--          {{$t('hasproject.lastrevenue')}}-->
            <!--          <span>255.20</span>-->
            <!--        </p>-->
            <!--      </div>-->
            <div class="project-list p-30">

                <van-list v-model="loading" :finished="isFinished" @load="loadMore">
                    <c-home-list :cards="projects" :showStatus="false"></c-home-list>
                </van-list>

                <!-- <ul>
          <li v-for="item in projects" :key="item.id" @click="handleItemClick(item)">
            <h3 class="item-title">
              {{item.name}}
              <van-tag color="#EE7348" >{{item.type}}</van-tag>
            </h3>
            <div class="details">
              <div class="item">
                <p class="small-title">{{$t('hasproject.investmentamount')}}</p>
                <p>{{item.amount | toNumber}}</p>
              </div>
              <div class="item">
                <p class="small-title">{{$t('hasproject.uprevenue')}}</p>
                <p class="total">{{item.min_amount | toNumber}}</p>
              </div>
              <div class="item">
                <p class="small-title">{{$t('hasproject.expire')}}</p>
                <p>{{item.sort}} {{$t('hasproject.day')}}</p>
              </div>
            </div>
          </li>
        </ul> -->
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/api/api"
import cHomeList from "@/components/home/c-home-list"

export default {
    components: {
        cHomeList
    },
    data() {
        return {
            projects: [],

            pagestart: 1,
            pagesize: 15,

            loading: false,
            isFinished: false,
        };
    },
    created() {
        this.getcollectlist()
    },
    methods: {
        loadMore() {
            this.getcollectlist();
            this.pagestart++;
        },
        handleItemClick(item) {
            this.$router.push({
                path: '/projectDetail',
                query: {
                    id: item.project_id
                },
            })
            // this.$emit('item', item)
        },
        // 获取用户喜欢列表
        getcollectlist() {
            this.$axios.post('/api/user-collection/user-collection-list', {
                page: 1,
                pageSize: 100
            }).then(res => {
                console.log('喜欢列表', res)
                // this.projects = res.data.list;
                this.total = res.data.total;
                if (this.pagestart === 1) {
                    this.projects = res.data.list;
                } else {
                    this.projects.push(...res.data.list);
                }
                this.total = res.data.total;
                this.loading = false;
                if (this.projects.length >= this.total || res.data.list.length === 0) {
                    this.isFinished = true
                }
            })
        },
    },
};
</script>
<style lang="less" scoped>
/deep/.van-tag {
    margin-right: 5px;
}
.bg3 {
    background: url("../../../assets/imgs/bg2.jpg");
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
    margin-top: 20px;
    li {
        height: 2.13rem;
        background-color: #fff;
        width: 100%;
        padding: 0.3rem;
        margin-bottom: 0.3rem;
        box-sizing: border-box;
        border-radius: 15px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);

        .item-title {
            line-height: 0.28rem;
            font-size: 0.29rem;
            font-weight: 400;
            color: #333;
        }
        .details {
            display: flex;
            justify-content: space-between;
            // text-align: center;
            p {
                font-size: 0.3rem;
                &:last-of-type {
                    text-align: center;
                }
            }
            .small-title {
                font-size: 0.23rem;
                color: #888;
                margin: 0.2rem 0 0.25rem;
            }
        }
    }
}
</style>
