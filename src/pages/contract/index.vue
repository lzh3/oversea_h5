<template>
    <div class="content bg-white-page">
        <c-common-top :isBack="true" title='合同'/>
        <div id="pdfDom">
            666
            <div class="box"></div>
        </div>
        <van-button type='default' @click="printPdf">打印</van-button>
    </div>
</template>

<script>
import {getPdf} from '@/utils/htmlToPdf'

export default {
    data() {
        return {
            htmlTitle: '合同',
        };
    },
    created() { },
    methods: {
        printPdf(){
            getPdf('合同', 'pdfDom')
        },
    },
};
</script>
<style lang="less" scoped>
.box{
    width: 30px;
    height: 30px;
    background-color: skyblue;
}
</style>