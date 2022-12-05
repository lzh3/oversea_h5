<template>
  <div class="edit-wrap bg1">
    <c-common-top :title="$t('self.userInfo')" :isBack="true"></c-common-top>
    <div class="main p-30">
      <van-uploader v-model="avaFile">
        <div class="avatar bg-white p-30">
          <p class="label">{{$t('self.avatar')}}</p>

          <div class="ava">
            <img :src="imgava" alt="">
            <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
          </div>
        </div>
      </van-uploader>

      <div class="edit-item">
        <ul>
          <li class="p-30 bg-white" v-for="item in items" :key="item.label" @click="handleItemClick(item)">
            <span class="label">{{$t(item.lang)}}</span>
            <p class="right">
              <span>{{item.desc}}</span>
              <i class="iconfont icon-xiangyoujiantou"></i>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <c-dialog-name :title="$t('self.modify')" :visible.sync="dialogName" @ok="upNickName" />
    <!-- <c-sheet-sex :showShare="true"/> -->
    <van-popup class="sex-popup" v-model="showShare" position="bottom" :style="{ height: 'auto', }">
      <div class="op-block">
        <p class="sex" v-for="item in sex" :key="item.type" @click="handleSexSelect(item.type)">{{$t(item.lang)}}</p>
        <p class="line"></p>
        <p class="cancel" @click="cancelSex">{{$t('common.cancel')}}</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
import api from "@/api/api"
import cDialogName from './c-dialog-name.vue';
import localStore from '@/utils/localStorage'
import imgava from '../../../assets/imgs/project/id1.png'
// import cSheetSex from './c-popup-sex.vue';
export default {
  components: {
    cDialogName,
    // cSheetSex,
  },
  data() {
    return {
      userInfo: {},
      imgava,
      avaFile: [],
      items: [
        {
          label: '昵称',
          type: '1',
          lang: 'self.nickname'
        },
        {
          label: '性别',
          type: '2',
          lang: 'self.sex'
        },
        // {
        //   label: '国籍',
        //   type: '3',
        //   lang: 'self.nation'
        // },
        // {
        //   label: '手机号',
        //   type: '4',
        //   lang: 'self.phone'
        // },
        // {
        //   label: '邮箱',
        //   type: '5',
        //   lang: 'self.email'
        // },
        // {
        //   label: '收件地址',
        //   type: '6',
        //   lang: 'self.address'
        // },
      ],
      sex: [
        {
          label: '男',
          type: 1,
          lang: 'common.man'
        },
        {
          label: '女',
          type: 2,
          lang: 'common.woman'
        }
      ],
      showShare: false,
      dialogName: false,
    };
  },
  filter: {
  },
  created() {
    this.getUserInfoList()
    // this.getAvatar();
  },
  watch: {
    avaFile: {
      handler(arr) {
        if (arr.length) {
          // console.log(arr,'----arr')
          this.imgava = arr[0].content;
          localStore.set('imgava', this.imgava)
          this.upload(this.imgava, 'imgava')
        }
      },
      deep: true,
    },
  },
  methods: {
    // 上传头像-更改用户信息
    upAvatar(header_img) {
      this.$axios.post(api.userinfo.updateuser, {
        header_img: header_img
      }).then(res => {
        if (res.errCode == 200) {
          this.$toast({
            type: "success",
            message: res.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.errMsg
          });
        }
      });
    },
    // 获取头像
    // getAvatar(){
    //   let imgid = localStore.get('imgava')
    //   if(!imgid) return;
    //   this.$axios.post(api.common.getImg, {
    //     image_id: imgid
    //   }).then(res => {
    //     console.log('头像', res)
    //     this.imgava = res.data.image_base64
    //   })
    // },
    //上传头像
    upload(base, type) {
      this.$axios.post(api.common.uploadImg, {
        image_base64: base
      }).then(res => {
        console.log('upload', res)
        localStore.set(type, res.data.url)
        this.upAvatar(res.data.url)
        // this.$router.back();
      })
    },
    // 获取用户信息列表
    getUserInfoList() {
      this.$axios.post(api.userinfo.getuserinfo, {}).then(res => {
        this.userInfo = res.data;
        // console.log("信息列表", this.userInfo);
        this.imgava = res.data.header_img
        this.items.forEach(i => {
          if (i.type == '1') {
            i.desc = this.userInfo.nick_name
          } else if (i.type == '2') {
            i.desc = this.userInfo.sex == 2 ? '女' : '男'
          } else if (i.type == '3') {
            i.desc = this.userInfo.country || ''
          } else if (i.type == '4') {
            i.desc = this.userInfo.email || ''
          } else if (i.type == '5') {
            i.desc = this.userInfo.address || ''
          }
        })
        console.log(this.items, 555);
        this.items=[...this.items]
        // this.$forceUpdate();

        // this.banners = res.data.list.map(item => item.image)
      });
    },
    // 更新用户昵称
    upNickName(name) {
      this.$axios.post(api.userinfo.updateuser, {
        nick_name: name
      }).then(res => {
        if (res.errCode == 200) {
          this.getUserInfoList();
          this.$toast({
            type: "success",
            message: res.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.errMsg
          });
        }
      });
    },
    handleItemClick(item) {
      switch (item.type) {
        case '1':
          this.dialogName = true;
          break;
        case '2':
          this.showShare = true;
          break;
        case '6':
          this.$router.push({
            path: '/address/list'
          })
          break;
        default:
          break;
      }
    },
    // 修改性别
    handleSexSelect(type) {
      this.$axios.post(api.userinfo.updateuser, {
        sex: type
      }).then(res => {
        if (res.errCode == 200) {
          this.getUserInfoList();
          this.$toast({
            type: "success",
            message: res.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.errMsg
          });
        }
      });
      this.cancelSex();
    },
    cancelSex() {
      this.showShare = false;
    }
  },
};
</script>
<style lang="less">
.sex-popup {
  border-top-right-radius: 0.29rem;
  border-top-left-radius: 0.29rem;
}
</style>
<style lang="less" scoped>
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

.avatar {
  display: flex;
  width: 100%;
  height: 1.7rem;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: 0.29rem;
  .ava {
    display: flex;
    flex-wrap: nowrap;
    img {
      width: 1.09rem;
      height: 1.09rem;
      margin-right: 0.3rem;
      border-radius: 50%;
      background-color: skyblue;
    }
    .icon {
      display: flex;
      align-items: center;
    }
  }
}
.edit-item {
  ul {
    li {
      display: flex;
      height: 0.88rem;
      margin-top: 0.3rem;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.29rem;
    }
  }
}
.op-block {
  text-align: center;
  font-size: 0.3rem;
  font-weight: 400;
  color: #000;
  p {
    height: 0.87rem;
    line-height: 0.87rem;
  }
  .line {
    height: 0.2rem;
    background: #f5f5f5;
  }
}
</style>
