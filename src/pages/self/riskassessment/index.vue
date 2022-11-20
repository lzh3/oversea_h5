<template>
  <div class="rootbox">
    <c-common-top title="风险评估" :isBack="true" />
    <div class="content" v-touch:left="onSwipeRight">
        <div><span>1</span>/<span>10</span></div>
        <div class="progress"><div class="inprogress"></div></div>
        <div class="question">您的主要收入来源是</div>
        <div class="q_option">
            <div :class="{active:clickindex===item.clickid}" @click="btnClick(item.clickid)" class="q_option_item" v-for="item in question" :key="item.clickid" v-html="item.option_item"></div>
                
            </div>
            <!-- <div class="q_option_item"><span>A.</span>工资、劳务报酬</div>
            <div class="q_option_item"><span>B.</span>生产经营所得</div>
            <div class="q_option_item"><span>C.</span>利息、股息、转让证券等金融性资收入</div>
            <div class="q_option_item"><span>D.</span>出租、出售房地产等非金融性资产收入</div>
            <div class="q_option_item"><span>E.</span>无固定收入</div> -->
        </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  data() {
    return {
        clickindex:null,
      question: [
        {
            option_item:` <div class=""><span>A.</span>工资、劳务报酬</div>`,
            clickid:1
        },
        {
            option_item:` <div class=""><span>B.</span>生产经营所得</div>`,
            clickid:2
        },
        {
            option_item:`  <div class=""><span>C.</span>利息、股息、转让证券等金融性资收入</div>`,
            clickid:3
        },
        {
            option_item:` <div class=""><span>D.</span>出租、出售房地产等非金融性资产收入</div> `,
            clickid:4
        },
        {
            option_item:` <div class=""><span>E.</span>无固定收入</div>`,
            clickid:5
        },
      ],
      localpwd: ""
    };
  },
  created(){},
  methods: {
    btnClick(v){
        this.clickindex = v
    },
    onSwipeRight(){
        this.$router.push('/self/riskfinish')
    },
  },
};
</script>
<style lang="less" scoped>
.rootbox{
    width: 100%;
  height: 100vh;
  background: url('../../../assets/imgs/bg2.jpg') no-repeat;
  .content{
    padding: 0 0.65rem;
    padding-top: 0.2rem;
    margin: auto;
  margin-top: 0.6rem;
width: 6.9rem;
height: 11.88rem;
background: #FFFFFF;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
opacity: 0.8;
border-radius: 29px;
.progress{

    // margin: auto;
    margin: 0.2rem 0;

    width: 5.60rem;
height: 0.12rem;
background: #CCCCCC;
border-radius: 0.06rem;
.inprogress{
    float: left;
    width: 10%;
    height: 100%;
    background-color: #0A35D8;
    border-radius: 0.06rem;
}
}
.question{
    margin: 0.5rem 0;
    width: 2.61rem;
height: 0.27rem;
// font-size: 28px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #333333;
}
.q_option{
    .q_option_item{
        padding-left: 0.29rem;
        // vertical-align: middle;
        margin-top: 0.3rem;
        width: 5.6rem;
height: 0.91rem;
line-height: 0.91rem;
background: #F0F0F0;
border-radius: 0.45rem;
span{
    font-weight: 700;
}
    }
}
  }
  .active{
    background-color: #738ef2!important;
  }
}
  
</style>
