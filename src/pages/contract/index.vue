<template>
  <div class="content bg-white-page" id="page0">
    <c-common-top :isBack="true" title='合同' />
    <!-- <div class="pic">
      <img :src="img" alt="">
    </div> -->
    <div id="pdfDom">
      <iframe sandbox  id='pdfIframe' ref='iframeRef' :src="contractSrc" frameborder="0" width="100%" height="100%"></iframe>
      <!-- <embed id="embed" :src="contractSrc" type="text/html" width='100%' height='100%' /> -->
    </div>
    <!-- <van-button type="primary" @click="printPdf" class="printbtn">打印合同</van-button> -->
  </div>
</template>

<script>
import api from "@/api/api";
import { getPdf } from '@/utils/htmlToPdf'
// import { convertToImage } from '@/utils/shootScreen'
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      contractSrc: null,
      img: ''
    };
  },
  created() {
    this.getcontract()
  },
  mounted() {

  },
  methods: {
    // 打印合同
    async printPdf() {
      // pdfDom
      let dom = document.getElementById('page0')
      //   console.log(dom['document'], document.embeds[0])
      // getPdf('合同', 'embed')
      const imgBlobData =  await this.convertToImage(dom,);
      console.log('33', imgBlobData)
      this.img = imgBlobData;
      this.$forceUpdate();
    },
    // 获取合同
    getcontract() {
      this.$axios.post(api.self.contract, {}).then(res => {
        console.log("合同", res);
        this.contractSrc = res.data.url;
        // this.banners = res.data.list.map(item => item.image)
        // this.getHtml(res.document.url)
      });
    },
    getHtml(html) {
      // this.$axios.get(html, {}).then(res=>{
      //     console.log('res000', res)
      // })
    },
    convertToImage(container) {
      // 设置放大倍数
      const scale = window.devicePixelRatio;
      // html2canvas配置项
      const ops = {
        scale,
        useCORS: true,
        allowTaint: false,
      };

      return html2canvas(container, ops).then((canvas) => {
        // 返回图片的二进制数据
        return canvas.toDataURL("image/png");
      });
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  padding-bottom: 1rem;
}

.pic img {
  width: 250px;
  height: 500px;
}

#pdfDom {
  width: 100%;
  height: 100vh;
}

.van-button {
  width: 2rem;
  position: fixed;
  bottom: 10px;
  left: 50%;
  right: 0;
  margin-left: -1rem;
  background-color: #ddd;
  border: none;
  color: #333;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
