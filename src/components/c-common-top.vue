<template>
  <div class="top-box">
    <div class="title-wrap" :class="{'white-color':color=='white'}">
      <p class="back" @click="back" v-if="isBack"><i class="iconfont icon-fanhuijiantou "></i></p>
      <p class="title">{{title}}</p>
      <p class="op" v-if="isOp">
        <img src="../assets/imgs/project/share.png" alt="">
      </p>
      <p class="to" v-if="isTo" @click="toPage">
        {{toText}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '发现'
    },
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'black'
    },
    isBack: {
      type: Boolean,
      default: false,
    },
    isOp: {
      type: Boolean,
      default: false,
    },
    isTo: {
      type: Boolean,
      default: false,
    },
    toText: {
      type: String,
      default: null
    },
  },
  data() {
    return {

    }
  },
  methods: {
    checkMore() {
      this.$emit(this.type)
    },
    back() {
      this.$emit('back')
      this.$router.back();
    },
    toPage() {
      this.$emit("to")
    }
  },
}
</script>
<style lang="less" scoped>
.top-box {
  height: 0.7rem;
  width: 100%;
}
.title-wrap {
  position: fixed;
  z-index: 10;
  // display: flex;
  height: 0.7rem;
  line-height: 0.7rem;
  width: 100vw;
  // background-color: #fff;
  align-items: center;
  color: #333333;
  text-align: center;
  font-family: Microsoft YaHei;
  &.white-color {
    .back {
      i {
        color: #fff !important;
      }
    }
    .title {
      color: #fff;
    }
  }
  /deep/.back {
    position: absolute;
    left: 0.3rem;
    top: 0;
    height: 0.7rem;
    line-height: 0.7rem;
    i {
      font-weight: bold;
      font-size: 0.36rem;
    }
  }
  .op {
    position: absolute;
    right: 0.3rem;
    top: 0.1rem;
    display: flex;
    align-items: center;
    img {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 0.29rem;
    font-weight: 400;
  }
  .to {
    position: absolute;
    right: 0.3rem;
    top: 0;
    line-height: 0.7rem;
    font-size: 0.24rem;
    font-weight: 400;
    color: #333;
  }
}
</style>
