<template>
  <div class="login">
    <c-common-top :title="$t('login.login')"></c-common-top>
    <div class="content">
      <h3 class="title">{{$t('login.title')}}</h3>
      <van-cell-group>
        <van-field v-model="user_name" :placeholder="$t('placehold.username')" />
        <van-field class="password" v-model="password" placeholder="$t('placehold.password')" />
        <van-button round type="info" block @click="loginFn">{{$t('common.submit')}}</van-button>
      </van-cell-group>
      <p class="tips">{{$t('placehold.forget')}}</p>
    </div>
  </div>
</template>

<script>
import api from "@/api/api"
import localStorage from '@/utils/localStorage'

export default {
  components: {},
  props: {},
  data() {
    return {
      user_name: 'yceshi',
      password: '121212'
    };
  },

  created() {
    localStorage.clear();
  },
  methods: {
    loginFn() {
      this.$axios.post(api.self.login, {
        user_name: this.user_name,
        password: this.password
      }).then(res => {
        console.log('res--login', res)
        if (res.errCode == 200) {
          localStorage.set('userinfo', {
            user_name: this.user_name,
            password: this.password
          })
          localStorage.set('token', res.data.token)
          this.$router.push('/home')
        } else {
          this.$toast({
            type: 'fail',
            message: res.data.errMsg
          })
        }
      })
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  background: url("../../assets/imgs/bg2.jpg") 100% / cover;
}
.content {
  margin-top: 0.9rem;
  padding: 0 0.6rem;
  .title {
    text-align: left;
    margin-bottom: 0.69rem;
  }
  /deep/.van-cell-group {
    background-color: transparent;
    .van-cell {
      border-radius: 0.45rem;
    }
  }
  /deep/.van-button {
    background: linear-gradient(112deg, #0a35d8 0%, #3f63ea 100%);
  }
  .password {
    margin: 0.69rem 0;
  }
  .tips {
    width: 100%;
    text-align: center;
    font-size: 0.24rem;
    font-weight: 400;
    color: #333;
    margin-top: 0.3rem;
  }
}
</style>
