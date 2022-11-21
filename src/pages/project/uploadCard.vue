<template>
  <div class="page-wrap">
    <c-common-top :isBack="true" :title="$t('uploadCard.uploadCard')"></c-common-top>
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
        {{$t('uploadCard.upload1')}}
      </div>
      <div class="submit">
        <van-button class="btn-bg" block @click="submit"> {{$t('common.submit')}}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import localStore from '@/utils/localStorage'
import api from "@/api/api"

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
          localStore.set('front_card', this.img1)
          this.upload(this.img1, 'front_card_id')
        }
      },
      deep: true,
    },
    backFile: {
      handler(arr) {
        // console.log('arr', arr)
        if (arr.length) {
          this.img2 = arr[0].content; // base64
          localStore.set('back_card', this.img2)
          this.upload(this.img2, 'back_card_id')
        }
      },
      deep: true,
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      let front = localStore.get('front_card')
      let back = localStore.get('back_card')
      if(front){
        this.img1 = front;
      }
      if(back){
        this.img2 = back;
      }
    },
    // front_card_id  /   back_card_id
    upload(base, type) {
      this.$axios.post(api.common.uploadImg, {
        image_base64: base
      }).then(res => {
        // console.log('upload', res)
        localStore.set(type, res.data.image_id)
        // this.$router.back();
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
