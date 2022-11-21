<template>
  <div class="bg1">
    <c-common-top :title="$t('order.orderManage')" :isBack="true" />
    <div class="main p-30">
      <ul class="order-list">
        <van-list v-model="loading" :finished="finished" @load="loadMore">
          <li v-for="item in list" :key="item.id" @click="toPay(item)">
            <p class="title">{{item.project_name}}</p>
            <div class="price-block">
              <span class="price">{{item.total_price | toNumber}}</span>
              <i class="iconfont icon-xiangyoujiantou"></i>
            </div>
            <p class="status" :class="statusObj[item.order_status]">
              {{item.order_status | orderStatusFilter}}
            </p>
          </li>
        </van-list>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"
import { ORDERSTATUS } from '@/utils/enum'

export default {
  data() {
    return {
      loading: false,
      finished: false,
      statusObj: {
        3: 'no-pay', // 成功
        4: 'no-pay', // 
        1: 'ing', // 审核中
        6: 'back', // 被驳回
      },
      statusTxt: {
        // 0: '待支付',
        // 1: '审核中',
        // 2: '被驳回'
      },
      list: [],
      objFilter: {
        page: 1,
        pageSize: 15,
      },
      total: 0,
    };
  },
  filters: {
    orderStatusFilter(val) {
      return ORDERSTATUS[val] || '--';
    }
  },
  created() {
    // this.getList();
  },
  methods: {
    loadMore() {
      this.getList(this.objFilter.page)
      this.objFilter.page++;
    },
    // 获取订单列表
    getList(page = 1) {
      this.loading = true;
      this.$axios.post(api.self.orderList, {
        ...this.objFilter,
        page,
      }).then(res => {
        if (page === 1) {
          this.list = res.data.list;
        } else {
          this.list.push(...res.data.list);
        }
        this.total = res.data.total;
        this.loading = false;
        if (this.list.length >= this.total || res.data.list.length===0) {
          this.finished = true
        }
      })
    },
    // 跳转详情页
    toPay(item) {
      this.$router.push({
        path: '/order/pay',
        query: {
          id: item.id,
        },
      })
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  .order-list {
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.3rem;
      height: 1.87rem;
      margin-bottom: 0.3rem;
      background: #fff;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
      border-radius: 15px;
      .title {
        font-size: 0.29rem;
        font-weight: 400;
        color: #333;
      }
      .price-block {
        display: flex;
        justify-content: space-between;
        .price {
          color: #ff1f16;
        }
      }
      .status {
        font-size: 0.24rem;
        &.no-pay {
          color: #0a35d8;
        }
        &.ing {
          color: #333;
        }
        &.back {
          color: #999;
        }
      }
    }
  }
}
</style>