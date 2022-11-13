<template>
  <div class="title-wrap">
    <p class="title">{{title}}</p>
    <p class="more" @click="checkMore">
      <span>查看全部</span>
      <img src="../../assets/imgs/icon/youjiantou.png" alt="" class="jiantou">
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
  },
  data() {
    return {

    }
  },
  methods: {
    checkMore() {
      this.$emit('more',this.type)
    },
  },
}
</script>
<style lang="less" scoped>
.title-wrap {
  display: flex;
  height: 0.3rem;
  margin-bottom: 0.34rem;
  justify-content: space-between;
  align-items: center;
  color: #333333;
//   font-family: Sans-serif;
  .title {
    font-size: 0.31rem;
    font-style: normal;
    font-weight: bold;
  }
  .more {
    display: flex;
    width: auto;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 0.24rem;
    font-weight: 400;
    img {
      width: 0.14rem;
      height: 0.14rem;
      margin-left: 10px;
    }
  }
}
</style>