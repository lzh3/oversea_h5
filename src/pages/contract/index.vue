<template>
    <div class="content bg-white-page">
        <c-common-top :isBack="true" title='合同'/>
        <div id="pdfDom">
          <van-button type="primary" @click="printPdf" class="printbtn">打印合同</van-button>
            <iframe :src="contractSrc" frameborder="0" width="100%" height="100%"></iframe>

        </div>
    </div>
</template>

<script>
import api from "@/api/api";
import {getPdf} from '@/utils/htmlToPdf'
export default {
    data() {
        return {
          contractSrc:null,
        };
    },
    created() {
      this.getcontract()
    },
    methods: {
      // 打印合同
     printPdf(){
            getPdf('合同', 'pdfDom')
        },
      // 获取合同
       getcontract() {
      this.$axios.post(api.self.contract, {}).then(res => {
        console.log("合同", res);
        this.contractSrc = res.data.url;
        // this.banners = res.data.list.map(item => item.image)
      });
    },
    },
};
</script>
<style lang="less" scoped>
#pdfDom{
  width: 100%;
  height: 100vh;
}
.printbtn{
  // position: absolute;
  // top: 50px;
}

</style>
