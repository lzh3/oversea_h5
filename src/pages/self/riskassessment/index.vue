<template>
  <div class="rootbox"  v-touch:left="onSwipeRight" v-touch:right="onSwipeleft">
    <c-common-top :title="$t('risk.risk')" :isBack="true"/>
    <div class="content">
      <div><span>{{touchindex+1}}</span>/<span>10</span></div>
<!--      <div class="progress">-->
<!--        <div class="inprogress"></div>-->
<!--      </div>-->
      <van-progress :percentage="percent" class="progress" />
<!--      <div class="question">{{ $t('risk.income') }}</div>-->
      <div class="question">{{titleArr[touchindex]}}</div>
      <div class="q_option">
        <div :class="{active:clickindex===item.clickid}" @click="btnClick(item.clickid)" class="q_option_item"
             v-for="item in questionobj[touchindex]" :key="item.clickid">
          <div v-html="item.option_item"></div>
        </div>

      </div>
      <!-- <div class="q_option_item"><span>A.</span>工资、劳务报酬</div>
      <div class="q_option_item"><span>B.</span>生产经营所得</div>
      <div class="q_option_item"><span>C.</span>利息、股息、转让证券等金融性资收入</div>
      <div class="q_option_item"><span>D.</span>出租、出售房地产等非金融性资产收入</div>
      <div class="q_option_item"><span>E.</span>无固定收入</div> -->
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  data() {
    return {
      percent:10,
      touchindex:0,
      clickindex: null,
      titleArr: [
        '1.您的主要收入来源',
        '2.最近您家庭预计进行证 券投资的资金占家庭现有 总资产(不含自住、自用房 产及汽车等固定资产)的比 例是：',
        '3.您是否有尚未清偿数额较大的债务,如有,其性质是:',
        '4.您可用于投资的资产数额(包括金融资产和不动产)为',
        '5.以下描述中何种符合您的实际情况:',
        '6:您的投资经验可以被概括为:',
        '7.有一位投资者一个月内做了15笔交易(同一种买卖各一次算一笔),您认为这样的交易频率:',
        '8.过去一年时间内，您购买的不同产品或接受的不同服务(含同一类型的不同产品或服务)的数量是:',
        '9.以下金融产品或服务,您投资经验在两年以上的有:',
        '10.如果您曾经从事过金融市场投资，在交易较为活跃的月份，平均月交易额大概是多少'

      ],
      questionobj: {
        0: [
          {
            option_item: ` <div class=""><span>A.</span>工资、劳务报酬</div>`,
            clickid: '1-0'
          },
          {
            option_item: ` <div class=""><span>B.</span>生产经营所得</div>`,
            clickid: '2-0'
          },
          {
            option_item: `  <div class=""><span>C.</span>利息、股息、转让证券等金融性资收入</div>`,
            clickid: '3-0'
          },
          {
            option_item: ` <div class=""><span>D.</span>出租、出售房地产等非金融性资产收入</div> `,
            clickid: '4-0'
          },
          {
            option_item: ` <div class=""><span>E.</span>无固定收入</div>`,
            clickid: '5-0'
          },
        ],
        1: [
          {
            option_item: ` <div class=""><span>A.</span>70%以上</div>`,
            clickid: '1-1'
          },
          {
            option_item: ` <div class=""><span>B.</span>50%-70%</div>`,
            clickid: '2-1'
          },
          {
            option_item: `  <div class=""><span>C.</span>30%-50%</div>`,
            clickid: '3-1'
          },
          {
            option_item: ` <div class=""><span>D.</span>10%-30%</div> `,
            clickid: '4-1'
          },
          {
            option_item: ` <div class=""><span>E.</span>10%以下</div>`,
            clickid: '5-1'
          },
        ],
        2: [
          {
            option_item: ` <div class=""><span>A.</span>没有</div>`,
            clickid: '1-2'
          },
          {
            option_item: ` <div class=""><span>B.</span>有,住房抵押贷款等长期定额债务</div>`,
            clickid: '2-2'
          },
          {
            option_item: `  <div class=""><span>C.</span>有,信用卡欠款,消费信贷等短期信用债务</div>`,
            clickid: '3-2'
          },
          {
            option_item: ` <div class=""><span>D.</span>有,亲朋之间借款</div> `,
            clickid: '4-2'
          },
        ],
        3: [
          {
            option_item: ` <div class=""><span>A.</span>不超过50万人民币</div>`,
            clickid: '1-3'
          },
          {
            option_item: ` <div class=""><span>B.</span>50万-300万(不含)人民币</div>`,
            clickid: '2-3'
          },
          {
            option_item: `  <div class=""><span>C.</span>300万-1000万(不含)人民币</div>`,
            clickid: '3-3'
          },
          {
            option_item: ` <div class=""><span>D.</span>1000万人民币以上</div> `,
            clickid: '4-3'
          },
        ],
        4: [
          {
            option_item: ` <div class=""><span>A.</span>现在或此前曾从事金融、经济或财会等与金融产品投资相关的工作超过两年</div>`,
            clickid: '1-4'
          },
          {
            option_item: ` <div class=""><span>B.</span>已取得金融、经济或财 会等与金融产品投资相关 专业学士以上学位</div>`,
            clickid: '2-4'
          },
          {
            option_item: `  <div class=""><span>C.</span>取得证券从业资格、基金从业资格、期货从业资格、注册会计师证书（CPA或注册金融分析师证书(CFA）中的一项及以上</div>`,
            clickid: '3-4'
          },
          {
            option_item: ` <div class=""><span>D.</span>我不符合以上任何一项描述</div>`,
            clickid: '4-4'
          },
        ],
        5: [
          {
            option_item: ` <div class=""><span>A.</span>有限:除银行活期账户和定期存款外，我基本没有其他投资经验</div>`,
            clickid: '1-5'
          },
          {
            option_item: ` <div class=""><span>B.</span>一般:除银行活期账户和定期存款外，我购买过基金、保险等理财产品，但还需要进一步的指导</div>`,
            clickid: '2-5'
          },
          {
            option_item: `  <div class=""><span>C.</span>丰富:我是一位有经验的投资者，参与过股票、基金等产品的交易，并倾向于自己做出投资决策</div>`,
            clickid: '3-5'
          },
          {
            option_item: ` <div class=""><span>D.</span>非常丰富:我是一位非常有经验的投资者，参与过权证、期货或创业板等产品的交易</div>`,
            clickid: '4-5'
          },
        ],
        6: [
          {
            option_item: ` <div class=""><span>A.</span>太高了</div>`,
            clickid: '1-6'
          },
          {
            option_item: ` <div class=""><span>B.</span>偏高</div>`,
            clickid: '2-6'
          },
          {
            option_item: `  <div class=""><span>C.</span>正常</div>`,
            clickid: '3-6'
          },
          {
            option_item: ` <div class=""><span>D.</span>偏低</div>`,
            clickid: '4-6'
          },
        ],
        7: [
          {
            option_item: ` <div class=""><span>A.</span>5个以下</div>`,
            clickid: '1-7'
          },
          {
            option_item: ` <div class=""><span>B.</span>6个至10个</div>`,
            clickid: '2-7'
          },
          {
            option_item: `  <div class=""><span>C.</span>11至15个</div>`,
            clickid: '3-7'
          },
          {
            option_item: ` <div class=""><span>D.</span>16个以上</div>`,
            clickid: '4-7'
          },
        ],
        8: [
          {
            option_item: ` <div class=""><span>A.</span>银行存款等</div>`,
            clickid: '1-8'
          },
          {
            option_item: ` <div class=""><span>B.</span>债券,货币市场基金,债券型基金或其他固定收益类产品</div>`,
            clickid: '2-8'
          },
          {
            option_item: `  <div class=""><span>C.</span>股票,混合型基金,偏股型基金,股票型基金等权益类投资品种</div>`,
            clickid: '3-8'
          },
          {
            option_item: ` <div class=""><span>D.</span>期货,期权,融资融券</div>`,
            clickid: '4-8'
          },
          {
            option_item: ` <div class=""><span>E.</span>复杂金融 产品,其他产品或服务</div>`,
            clickid: '5-8'
          },
        ],
        9: [
          {
            option_item: ` <div class=""><span>A.</span>10万元以内</div>`,
            clickid: '1-9'
          },
          {
            option_item: ` <div class=""><span>B.</span>10万元-30万元</div>`,
            clickid: '2-9'
          },
          {
            option_item: `  <div class=""><span>C.</span>30万元-100万元</div>`,
            clickid: '3-9'
          },
          {
            option_item: ` <div class=""><span>D.</span>100万元以上</div>`,
            clickid: '4-9'
          },
          {
            option_item: ` <div class=""><span>E.</span>从未从事过金融市场投资</div>`,
            clickid: '5-9'
          },
        ],

      },
      localpwd: ""
    };
  },
  created() {
  },
  methods: {
    btnClick(v) {
      this.clickindex = v
    },
    onSwipeRight() {
      console.log(this.touchindex,'touchindex---')
      this.percent = (this.touchindex+2) * 10
      if(this.touchindex>8){
        this.$router.push('/self/riskfinish')
      }else{
        this.touchindex++;
      }
    },
    onSwipeleft(){
      console.log(this.touchindex,'touchindex')
      this.percent = this.touchindex * 10
      if(this.touchindex<=1){
        this.touchindex = 0
        this.percent = 10
      }else{
        this.touchindex--;
      }

    },
  },
};
</script>
<style lang="less" scoped>
.rootbox {
  width: 100%;
  height: 100vh;
  background: url('../../../assets/imgs/bg2.jpg') no-repeat;

  .content {
    padding: 0 0.65rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin: auto;
    margin-top: 0.6rem;
    width: 6.9rem;
    //height: 11.88rem;
    background: #FFFFFF;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    opacity: 0.8;
    border-radius: 29px;

    .progress {

      // margin: auto;
      margin: 0.2rem 0;
      //width: 5.60rem;
      //height: 0.12rem;
      //background: #CCCCCC;
      //border-radius: 0.06rem;

      //.inprogress {
      //  float: left;
      //  width: 10%;
      //  height: 100%;
      //  background-color: #0A35D8;
      //  border-radius: 0.06rem;
      //}
    }

    .question {
      margin: 0.5rem 0;
      //width: 2.61rem;
      //height: 0.27rem;
      // font-size: 28px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }

    .q_option {
      .q_option_item {
        padding-left: 0.29rem;
        // vertical-align: middle;
        margin-top: 0.3rem;
        width: 5.8rem;
        //height: 0.91rem;
        line-height: 0.91rem;
        background: #F0F0F0;
        border-radius: 0.45rem;

        span {
          font-weight: 700;
        }
      }
    }
  }

  .active {
    background-color: #738ef2 !important;
  }
}

</style>
