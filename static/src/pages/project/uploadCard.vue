<template>
    <div class="page-wrap">
        <c-common-top :isBack="true" title='添加身份证'></c-common-top>
        <div class="main p-30">
            <van-uploader v-model="frontFile">
                <div class="front pic-id">
                    <img :src="img1" alt="">
                </div>
            </van-uploader>
            <van-uploader v-model="backFile">
                <div class="back pic-id">
                    <img :src="img2" alt="">
                </div>
            </van-uploader>

            <div class="tips">
                <img src="../../assets/imgs/project/help.png" alt="">
                认证通过后不可修改，平台会保护你的个人信息
            </div>
            <div class="submit">
                <van-button class="btn-bg" block>提交审核</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from '../../assets/imgs/project/id1.png'
import img2 from '../../assets/imgs/project/id2.png'

export default {
    data() {
        return {
            img1,
            img2,
            frontFile: [],
            backFile: [],
        };
    },
    watch: {
        frontFile: {
            handler(arr) {
                console.log('arr', arr)
                if (arr.length) {
                    this.img1 = arr[0].content;
                }
            },
            deep: true,
        }
    },
    created() { },
    methods: {

    },
};
</script>
<style lang="less" scoped>
.page-wrap {
    padding-bottom: 0;
    /deep/.van-uploader__preview{
        display: none;
    }
    .van-uploader{
        width: 100%;
    }
    /deep/.van-uploader__wrapper{
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
    }
    /deep/.van-uploader__input-wrapper{
        width: 100%;
    }
}
.pic-id {
    width: 100%;
    height: 3.9rem;
    img {
        width: 100%;
        height: 100%;
    }
}
.tips {
    display: flex;
    line-height: 0.3rem;
    font-size: 0.29rem;
    font-weight: 400;
    color: #3221e9;
    img {
        width: 0.26rem;
        height: 0.26rem;
        margin-right: 3px;
    }
}
.submit {
    .van-button {
        height: 0.9rem;
        margin-top: 3rem;
    }
}
</style>