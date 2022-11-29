<template>
    <div class="content bg-white-page" id="page0">
        <c-common-top :isBack="true" :title="$t('contract.contract')" />
        <!-- <div class="pic">
          <img :src="img" alt="">
        </div> -->
        <div class="pdf" id="pdfDom" ref="pdfRef">
            <div>
                <!-- <div v-html="htmlStr"></div> -->
                <!-- {{htmlStr}} -->
                <div id="pdfContent"></div>
            </div>
        </div>
        <van-button type="primary" @click="printPdf" class="printbtn">{{$t('contract.pcontract')}}</van-button>
    </div>
</template>

<script>
import api from "@/api/api";
import { downloadPDF } from '@/utils/shootScreen'
// import { convertToImage } from '@/utils/shootScreen'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
    data() {
        return {
            contractSrc: null,
            htmlStr: '',
            img: '',
            contract_id: '',
        };
    },
    mounted() {
        this.contract_id = this.$route.query.contractId;
        this.getcontract()
    },
    methods: {
        // 打印合同
        printPdf() {
            // pdfDom
            let dom = document.getElementById('pdfContent')
            this.$nextTick(()=>{
              downloadPDF(dom)
            })

        },
        // 获取合同
        getcontract() {
            console.log('conid', this.contract_id)
            this.$axios.post(api.self.contract, {
                contract_id: this.contract_id,
            }).then(res => {
                console.log("合同", res);
                this.contractSrc = res.data.url;
                this.htmlStr = res.data.html;
                let dom = document.getElementById('pdfContent')
                dom.innerHTML = this.htmlStr;
            });
        },

        exportPdf() {
            let title = '合同'
            html2Canvas(this.$refs.pdfRef, {
                allowTaint: true,
                useCORS: true,
            }).then(function (canvas) {
                let contentWidth = canvas.width;
                let contentHeight = canvas.height;
                let pageHeight = (contentWidth / 592.28) * 841.89;
                let leftHeight = contentHeight;
                let position = 0;
                let imgWidth = 595.28;
                let imgHeight = (592.28 / contentWidth) * contentHeight;
                let pageData = canvas.toDataURL("image/jpeg", 1.0);
                let PDF = new JsPDF("", "pt", "a4");
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        if (leftHeight > 0) {
                            PDF.addPage();
                        }
                    }
                }
                PDF.save(title + ".pdf");
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
