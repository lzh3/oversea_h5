<template>
  <div class="content bg-white-page" id="page0">
    <c-common-top :isBack="true" title='合同' />
    <!-- <div class="pic">
      <img :src="img" alt="">
    </div> -->
    <div id="pdfDom">
      <!-- <div v-html="htmlStr"></div> -->
      <!-- {{htmlStr}} -->
      <div id="pdfContent"></div>
    </div>
    <van-button type="primary" @click="printPdf" class="printbtn()">打印合同</van-button>
  </div>
</template>

<script>
import api from "@/api/api";
import { downloadPDF } from '@/utils/shootScreen'
// import { convertToImage } from '@/utils/shootScreen'

export default {
  data() {
    return {
      contractSrc: null,
      htmlStr: '',
      img: '',
    };
  },
  mounted() {
    this.getcontract()
  },
  methods: {
    // 打印合同
    printPdf() {
      // pdfDom
      let dom = document.getElementById('pdfContent')
      downloadPDF(dom)
      
    },
    // 获取合同
    getcontract() {
      this.$axios.post(api.self.contract, {}).then(res => {
        console.log("合同", res);
        this.contractSrc = res.data.url;
        this.htmlStr = res.data.html;
        let dom = document.getElementById('pdfContent')
        dom.innerHTML = this.htmlStr;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  width: 100vw;
  overflow-x: scroll;
  padding-bottom: 1rem;
}

.pic img {
  width: 250px;
  height: 500px;
}

#pdfDom {
  width: 100%;
  height: 100vh;
  white-space: wrap;
}

.van-button {
  position: fixed;
  width: 2rem;
  z-index: 100;
  bottom: 20px;
  left: 70vw;
  background-color: #ddd;
  border: none;
  color: #333;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
