<template>
  <div class="project-detail-wrap">
    <c-common-top :isBack="true" title="" color="white"></c-common-top>
    <div class="bar-section">
      <section class="banner-section">
        <van-swipe class="my-swipe" :show-indicators="false" :autoplay="2000" indicator-color="white">
          <van-swipe-item>
            <img :src="detailInfo.image" alt="">
          </van-swipe-item>
          <!-- <van-swipe-item>2</van-swipe-item> -->
        </van-swipe>
      </section>
    </div>
    <div class="">
      <div class="info-card">
        <div class="title">{{detailInfo.name}}</div>
        <div class="details">
          <div class="tag-status">
            <div>
              <!-- <van-tag color="#EE7348" v-for="(v, index) in tags" :key="index">{{v}}</van-tag> -->
              <van-tag color="#EE7348">{{detailInfo.type}}</van-tag>
            </div>
            <div class="status-time">
              <span>{{detailInfo.project_status | statusFilter}}：</span>
              <span>剩余{{detailInfo.sy_time | toDay}}天</span>
            </div>
          </div>
          <div class="process">
            <div class="process-bar">
              <van-progress :percentage="progressBar(detailInfo)" :show-pivot="false" track-color="#FFB9B6" color="#FF1F16" />
            </div>
            <!-- <span>{{detailInfo.show_status | statusFilter}}</span> -->
            <span>{{progressCom(detailInfo)}}</span>
          </div>
        </div>
        <div class="money-list">
          <div class="money-item">
            <p>{{ $t('project.target') }}：</p>
            <p>{{detailInfo.amount | toNumber}}</p>
          </div>
          <div class="money-item">
            <p>{{ $t('project.subscribed') }}：</p>
            <p>{{detailInfo.sub_amount | toNumber}}</p>
          </div>
          <div class="money-item">
            <p>{{ $t('project.startInvest') }}：</p>
            <p>{{detailInfo.min_amount | toNumber}}</p>
          </div>
        </div>
      </div>
      <div class="info-item">
        <section class="info-block1 p-30 bg-white b-29">
          <ul>
            <li v-for="item in block1" :key="item.label">
              <div class="common-div" @click="jumpPage(item)">
                <p class="label">{{item.label}}</p>
                <p class="icon" v-if="item.icon">
                  <i class="iconfont icon-xiangyoujiantou"></i>
                </p>
              </div>
              <div v-if="item.type==3" class="block1-other">
                <p class="text">{{detailInfo.address_info}}</p>
                <p class="op" @click="copy(item)" v-if="item.op">{{item.op}}</p>
              </div>
              <div v-if="item.position" class="block1-position">
                <!-- <p class="text">
                  <i class="iconfont" :class="item.position"></i>
                </p> -->
                <!-- <p class="position">
                  <span>{{item.country}}</span>
                  <span>{{item.detail}}</span>
                </p> -->
                <p class="position">
                  <img class="position-img" :src="detailInfo.address_image" alt="">
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section class="info-block2 p-30 bg-white b-29">
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
        </section>
      </div>
    </div>
    <div class="bottom-op">
      <div class="op-item" @click="toconsult">
        <img src="../../assets/imgs/project/comment.png" alt="">
        <span>{{ $t('project.consult') }}</span>
      </div>
      <div class="op-item" @click="handleCollect">
        <img src="../../assets/imgs/project/shoucang.png" alt="" v-if="detailInfo.is_collection ==1">
        <img src="../../assets/imgs/project/shoucang1.png" alt="" v-else>
        <span>{{detailInfo.is_collection !=1?$t('project.havecollection'):$t('project.collection')}}</span>
      </div>
      <van-button @click="handleSub">{{ $t('project.subscribe') }}</van-button>
    </div>

    <van-dialog class="address-dialog"
    :cancelButtonText="$t('common.cancel')"
    :confirmButtonText="$t('common.sure')"
    v-model="isShow" :title="$t('common.map')" show-cancel-button>
      <img :src="detailInfo.address_image" />
      <div class="ad">
        <p>{{detailInfo.address_info}}</p>
        <p class="op" @click="copy({})">{{$t('project.copy')}}</p>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import api from "@/api/api"
import { STATUS } from "@/utils/enum"

export default {
  data() {
    return {
      tags: ['酒店', '股权'],
      isShow: false,
      block1: [
        {
          label: this.$t('project.productIntro'),
          to: '',
          icon: 'icon-xiangyoujiantou',
          type: 1,
          prop: 'remark'
        },
        {
          label: this.$t('project.brandStory'),
          to: '/detailInner',
          icon: 'icon-xiangyoujiantou',
          type: 2,
          prop: 'story', // 字段名称
        },
        {
          label: this.$t('project.team'),
          to: '',
          icon: 'icon-xiangyoujiantou',
          type: 5,
        },
        {
          label: this.$t('project.position'),
          to: '',
          position: 'icon-xiangyoujiantou',
          type: 4,
        },
        {
          label: this.$t('project.detailPosition'),
          to: '',
          text: '泰国曼谷拉差贴威区296 Phayathai Road',
          type: 3,
          // op: this.$t('project.copy')
        },
        {
          label: this.$t('project.infoDispose'),
          to: '',
          icon: 'icon-xiangyoujiantou',
          type: 6,
        },
        {
          label: this.$t('project.risk'),
          to: '',
          icon: 'icon-xiangyoujiantou',
          type: 7,
        },
      ],
      block2: {
        a: '现金分红',
        b: '到期自动退出',
        c: '补充说明内容',
      },
      detailInfo: {},
      projectProgramme:{},
    };
  },
  filters: {
    statusFilter(val) {
      return STATUS[val] || ''
    },
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
    // collectFilter(val){
    //   let obj={
    //     0:'收藏',
    //     1:'已收藏'
    //   }
    // }
  },
  computed: {
    progressCom() {
      return item => {
        return 100 * (item.sub_amount / item.amount).toFixed(2) + "%";
      }
    },
    progressBar() {
      return item => {
        return (item.sub_amount / item.amount).toFixed(2);
      }
    },
    projectAbout() {
      return this.detailInfo.projectProgramme ? this.detailInfo.projectProgramme[0] : {};
    },

  },
  created() {
    this.getProjectInfo();
  },
  methods: {
    //认购
    handleSub() {
      this.$axios.post(api.home.submitOrder, {
        project_id:this.projectProgramme.project_id,
        programme_id:this.projectProgramme.programme_id,
        num:this.projectProgramme.get_num,
        autograph:this.projectProgramme.project_id,
        remark:this.projectProgramme.project_remark,
        pay_type:this.projectProgramme.return_type,
        id_card_img_positive:1,
        id_card_img_back:1,
      }).then(res => {
        // console.log('res', res)
          if (res.errCode == 200) {
            this.$toast.success('认购成功');
            this.$router.push({
              path: '/project/subscribe',
              query: {
                id: this.detailInfo.project_id
              },
            })

          }else{
            this.$toast.fail('认购失败');
          }
      })
    },
    // 跳转
    jumpPage(item, type) {
     if(item.type==3){ //复制
       this.copy(item)
     }
      if (item.type == 4) { // 地理位置
        this.isShow = true;
        return;
      }
      if (!item.prop) return;
      this.$router.push({
        path: '/detailInner',
        query: {
          content: this.detailInfo[item.prop],
          title: item.label
        },
      })
    },
    //客服
    toconsult(){
      // this.$router.push('/project/consult')
      // http://chat.cbith.net/#/chat
      let a = document.createElement('a')
      a.target='_self'
      a.href='http://chat.cbith.net/#/chat'
      a.click();
    },

    // 点击收藏
    handleCollect() {
      this.$axios.post(api.home.setCollect, {
        project_id: this.$route.query.id
      }).then(res => {
        this.getProjectInfo();
      })
    },
    getProjectInfo() {
      this.$axios.post(api.home.projectInfo, {
        project_id: this.$route.query.id
      }).then(res => {
        console.log('详情', res.data)
        // this.projects = res.data.data.list;
        this.detailInfo = res.data;
        this.projectProgramme = res.data.projectProgramme[0]
        // console.log( this.projectProgramme,' this.projectProgramme')
      })
    },
    // 复制
    copy(item) {
      var oInput = document.createElement('input');
      oInput.value = item.text || this.detailInfo.address_info;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = 'oInput';
      oInput.style.display = 'none';
      this.$toast.success('复制成功');
    },
  },
};
</script>
<style lang="less" scoped>
.project-detail-wrap {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 1.2rem;
  height: auto;
  box-sizing: border-box;
  // height: 100vh;
  background: url("../../assets/imgs/bg2.jpg") 100% / cover fixed;
}
.my-swipe {
  /deep/.van-swipe__track {
    width: 100% !important;
    .van-swipe-item {
      color: #fff;
      width: 100% !important;
      line-height: 4.5rem;
      text-align: center;
      background-color: #39a9ed;
      img {
        height: 4.5rem;
      }
    }
  }
}
.address-dialog {
  img {
    width: 100%;
    height: 6rem;
  }
  .ad {
    display: flex;
    padding: 5px;
    font-size: 12px;
  }
  .op {
    width: 1.3rem;
    color: #0a35d8;
    font-size: 0.28rem;
  }
}
.bar-section {
  position: relative;
  height: 3.8rem;
  .banner-section {
    position: absolute;
    top: -0.7rem;
    left: 0;
    right: 0;
    height: 4.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.info-card {
  padding: 0.3rem;
  margin: 0.3rem;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  opacity: 0.8;
  border-radius: 0.29rem;
  .title {
    font-size: 0.29rem;
    font-weight: bold;
    color: #333;
  }
  .tag-status {
    display: flex;
    margin: 0.3rem 0;
    justify-content: space-between;
    align-items: center;
    .status-time {
      font-size: 0.24rem;
      font-weight: 400;
      color: #ff1f16;
    }
  }
  .process {
    display: flex;
    width: 100%;
    align-items: center;
    .process-bar {
      width: 5.8rem;
    }
    span {
      white-space: nowrap;
      margin-left: 0.18rem;
      font-size: 0.22rem;
      color: #ff1f16;
    }
  }
  .money-list {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    .money-item {
      width: 1.21rem;
      p {
        font-size: 0.29rem;
        font-weight: 400;
        color: #333;
        &:nth-child(1) {
          font-size: 0.22rem;
          font-weight: 400;
          margin-bottom: 0.15rem;
        }
      }
    }
  }
}
.info-item {
  .info-block1 {
    margin: 0 0.3rem;
    color: #333;
    li {
      width: 100%;
      display: flex;
      min-height: 0.84rem;
      max-height: 1rem;
      align-items: center;
      justify-content: space-between;
      .common-div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }
      .iconfont {
        font-size: 0.14rem;
      }
      .label {
        font-size: 0.29rem;
      }
      .block1-other {
        display: flex;
        align-items: center;
        .text {
          // width: 2.6rem;
          // max-width: 3rem;
          font-size: 0.24rem;
          margin-right: 0.1rem;
          text-align: center;
        }
        .op {
          width: 1.3rem;
          color: #0a35d8;
          font-size: 0.28rem;
        }
      }
      .block1-position {
        display: flex;
        align-items: center;
        .position {
          display: flex;
          flex-direction: column;
          font-size: 0.19rem;
          color: #666;
          img {
            width: 1rem;
            height: 0.8rem;
          }
        }
      }
    }
  }
  .info-block2 {
    margin: 0.3rem 0.3rem 0;
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
}
.bottom-op {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 0.3rem;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .op-item {
    display: flex;
    align-items: center;
    img {
      width: 0.45rem;
      height: 0.45rem;
      margin-right: 8px;
    }
  }
  /deep/.van-button {
    width: 2.42rem;
    height: 0.67rem;
    background: linear-gradient(112deg, #0a35d8 0%, #3f63ea 100%);
    border-radius: 0.29rem;
    color: #fff;
  }
}
</style>
