<template>
  <div class="bg1">
    <c-common-top :isBack='true' title='  ' />
    <div class="main p-30">
      <div class="content" v-html="content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.content = this.$route.query.content;
  },
  methods: {}
}
</script>

<style lang='less' scoped>
/deep/.content {
  img {
    width: 100% !important;
  }
}
</style>
