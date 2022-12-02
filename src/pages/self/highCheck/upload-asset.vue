<template>
    <div class="page-wrap">
      <c-common-top :isBack="true" :title="$t('self.assetTitle')"></c-common-top>
      <div class="main p-30">
        <van-uploader v-model="assetFile">
          <div class="front pic-id">
            <img :src="img1" alt="">
          </div>
        </van-uploader>

        <div class="submit">
          <van-button class="btn-bg" block @click="submit"> {{$t('common.sure')}}</van-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import localStore from '@/utils/localStorage'
  import api from "@/api/api"
  
  
  export default {
    data() {
      return {
        assetFile:[],
        img1: ''
      };
    },
    watch: {
        assetFile: {
        handler(arr) {
          console.log('arr', arr)
          if (arr.length) {
            this.img1 = arr[0].content;
            localStore.set('asset-id', this.img1)
            this.upload(this.img1, 'asset-id')
          }
        },
        deep: true,
      },
     
    },
    created() {
    },
    methods: {
      // front_card_id  /   back_card_id
      upload(base, type) {
        this.$axios.post(api.common.uploadImg, {
          image_base64: base
        }).then(res => {
          // console.log('upload', res)
          localStore.set(type, res.data.image_id)
        })
      },
      // 提交
      submit(){
        this.$router.back();
      },
    },
  };
  </script>
  <style lang="less" scoped>
  .page-wrap {
    padding-bottom: 0;
    /deep/.van-uploader__preview {
      display: none;
    }
    .van-uploader {
      width: 100%;
    }
    /deep/.van-uploader__wrapper {
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
    }
    /deep/.van-uploader__input-wrapper {
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
    margin-left: 5px;
    margin-top: 10px;
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
      margin-top: 2.6rem;
    }
  }
  </style>
  