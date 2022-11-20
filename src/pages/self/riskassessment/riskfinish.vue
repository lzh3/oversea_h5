<template>
  <div class="rootbox">
    <c-common-top title="风险评估" :isBack="true" />
    <div class="content" v-touch:right="onSwipeRight">
       <div class="imgbox"><img src="../../../assets/imgs//self/smile.png" alt="" srcset=""></div>
       <div class="title">您已完成风险评估,感谢您的配合</div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  data() {
    return {

    };
  },
  created(){},
  methods: {
    onSwipeRight(){
      this.$router.go(-1)
    },
  },
};
</script>
<style lang="less" scoped>
.rootbox{
    width: 100%;
  height: 100vh;
  background: url('../../../assets/imgs/bg2.jpg') no-repeat;
  .content{
    padding: 0 0.65rem;
    padding-top: 0.2rem;
    margin: auto;
  margin-top: 0.6rem;
width: 6.9rem;
height: 11.88rem;
background: #FFFFFF;
box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.05);
opacity: 0.8;
border-radius: 29px;
.imgbox{
  text-align: center;
  img{
    margin: 2.05rem 0 0.7rem 0;
    display: inline-block;
    width: 1.5rem;
  }
}
.title{
  text-align: center;
  // width: 4.5rem;
height: 0.28rem;
// font-size: 28px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #333333;
}
  }
}
  
</style>
