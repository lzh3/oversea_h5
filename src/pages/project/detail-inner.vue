<template>
  <div class="bg1">
    <c-common-top :isBack="true" :title='title'></c-common-top>
    <div class="main  p-30">
      <div class="content" v-html="htmlStr"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlStr: '',
      title: ''
    }
  },
  created() {
    this.htmlStr = this.$route.query.content;
    this.title = this.$route.query.title;
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.content{
    width: 100%;
}
/deep/img{
    width: 100% !important;
}
</style>
