<template>
  <div class="bg1">
    <c-common-top title="电子签名" :isBack="true"></c-common-top>
    <div class="esign">
      <div class="esign-box">
        <vue-esign class="sign1" ref="esign" :width="800" :height="500" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor" :bgColor.sync="bgColor" />
      </div>
      <div class="op-block">
        <div class="tips">
          <span>请在上方空白处书写您的签字</span>
          <span class="bold">提交签字后无法修改，请确认后提交</span>
        </div>
        <div class="esigh-btns">
          <van-button class="reset" @click="handleReset">清除重写</van-button>
          <van-button class="btn-bg" @click="handleSure">提交签字</van-button>
        </div>
      </div>
      <!-- <div class="esigh-result">
                <img v-if="resultImg" :src="resultImg" alt="" />
            </div> -->
    </div>

  </div>
</template>

<script>
import vueEsign from "vue-esign";
import api from "@/api/api"
import localStore from '@/utils/localStorage'

export default {
  components: {
    vueEsign
  },
  data() {
    return {
      lineWidth: 6,
      lineColor: "#000000",
      bgColor: "",
      resultImg: "",
      isCrop: false,
      borders: "1px solid red",
    };
  },
  created() { },
  methods: {
    handleReset() {
      this.$refs.esign.reset();
    },
    handleSure() {
      this.$refs.esign
        .generate()
        .then((res) => {
          this.resultImg = res;
        //   console.log('resimg', res)
          this.upload();
          localStore.set('esign', this.resultImg)
        })
        .catch((err) => {
          this.$toast({
            type: 'fail',
            message: err
          })
          // 画布没有签字时会执行这里 'Not Signned'
        });
    },
    upload() {
      this.$axios.post(api.common.uploadImg, {
        image_base64: this.resultImg
      }).then(res => {
        // console.log('upload', res)
        localStore.set('sign_image_id', res.data.image_id)
        this.$router.back();
      })
    },
  },
};
</script>
<style lang="less" scoped>
.esign {
  background-color: #fff;
}
.op-block {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  padding: 0.3rem;
  border-top: 1px solid #dee;
  .tips {
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
    margin-bottom: 0.2rem;
    .bold {
      color: #fe443c;
    }
  }
}
.van-button {
  width: 2rem;
  height: 0.66rem;
}
.reset {
  color: #fe443c;
  border-radius: 0.45rem;
  border-color: #3f63ea;
}
</style>