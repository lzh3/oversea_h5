<template>
  <div class="plan-page bg1">
    <c-common-top :isBack='true' title='投资计划' toText='确定' :isTo="true" @to="goback"></c-common-top>
    <div class="plan-main info-block2 p-30 bg-white b-29">
      <ul>
        <li>
          <p class="title">{{ $t('project.investPlan1') }}：</p>
          <p class="invest">
            <span>每人限购{{projectAbout.limit_num || 0}}份</span>
            <span><i class="price">￥{{projectAbout.price}}</i>/份</span>
          </p>
        </li>
        <li>
          <p class="title">{{ $t('project.returnType') }}：</p>
          <p class="detail">{{projectAbout.return_type | returnFilter}}</p>
        </li>
        <li>
          <p class="title">{{ $t('project.exit') }}：</p>
          <p class="detail">{{projectAbout.out_type | outFilter}}</p>
        </li>
        <li>
          <p class="title">{{ $t('project.moreInfo') }}：</p>
          <p class="detail">{{projectAbout.project_remark}}</p>
        </li>
      </ul>
    </div>

    <!-- <div class="plan-main info-block2 p-30 bg-white b-29">
      <ul>
        <li>
          <p class="title">{{ $t('project.investPlan') }}：</p>
          <p class="invest">
            <span>每人限购{{projectAbout.limit_num || 0}}份</span>
            <span><i class="price">￥{{projectAbout.price}}</i>/份</span>
          </p>
        </li>
        <li>
          <p class="title">{{ $t('project.returnType') }}：</p>
          <p class="detail">{{projectAbout.return_type | returnFilter}}</p>
        </li>
        <li>
          <p class="title">{{ $t('project.exit') }}：</p>
          <p class="detail">{{projectAbout.out_type | outFilter}}</p>
        </li>
        <li>
          <p class="title">{{ $t('project.moreInfo') }}：</p>
          <p class="detail">{{projectAbout.project_remark}}</p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectAbout: {

      },
    }
  },
  filters: {
    returnFilter(val) {
      let obj = {
        1: '现金分红'
      }
      return obj[val] || '--'
    },

    outFilter(val) {
      let obj = {
        1: '到期自动退出'
      }
      return obj[val] || '--'
    },
  },
  created() {
    let cdata = this.$route.params
    console.log(cdata,'传过来的值');
    if(cdata.price!=undefined){
      this.projectAbout = cdata
    }
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.info-block2 {
  margin: 0.3rem 0.3rem 0.15rem;
  li {
    min-height: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
    .title {
      font-size: 0.29rem;
      margin-bottom: 0.15rem;
    }
    .detail {
      font-size: 0.22rem;
      font-weight: 400;
      color: #888;
    }
    .invest {
      display: flex;
      justify-content: space-between;
      color: #888;
      font-size: 0.22rem;
      .price {
        font-size: 0.29rem;
        font-weight: 400;
        color: #ff1f16;
        margin-right: 5px;
        font-style: normal;
      }
    }
  }
}
</style>
