<template>
    <div class="edit-wrap">
        <c-common-top title="编辑资料" :isBack="true"></c-common-top>
        <div class="main p-30">
           <van-uploader v-model="avaFile">
            <div class="avatar bg-white p-30">
                <p class="label">头像</p>

                <div class="ava">
                    <img :src="imgava" alt="">
                    <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
                </div>

            </div>
           </van-uploader>

            <div class="edit-item">
                <ul>
                    <li class="p-30 bg-white" v-for="item in items" :key="item.label" @click="handleItemClick(item)">
                        <span class="label">{{item.label}}</span>
                        <span class="label">{{item.desc}}
                           <i class="iconfont icon-xiangyoujiantou"></i>
                        </span>


                    </li>
                </ul>
            </div>
        </div>
        <c-dialog-name :visible.sync="dialogName" @ok="upNickName" />
        <!-- <c-sheet-sex :showShare="true"/> -->
        <van-popup class="sex-popup" v-model="showShare" position="bottom" :style="{ height: 'auto', }">
            <div class="op-block">
                <p class="sex" v-for="item in sex" :key="item.type" @click="handleSexSelect(item.type)">{{item.label}}</p>
                <p class="line"></p>
                <p class="cancel" @click="cancelSex">取消</p>
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
          userInfo:{},
          imgava,
          avaFile:[],
            items: [
                {
                    label: '昵称',
                    type: '1',
                },
                {
                    label: '性别',
                    type: '2'
                },
                {
                    label: '国籍',
                    type: '3'
                },
                 {
                    label: '手机号',
                    type: '4'
                },
                {
                    label: '邮箱',
                    type: '5'
                },
                {
                    label: '收件地址',
                    type: '6'
                },
            ],
            sex: [
                {
                    label: '男',
                    type: 1,
                },
                {
                    label: '女',
                    type: 2,
                }
            ],
            showShare: false,
            dialogName: false,
        };
    },
    created() {
       this.getUserInfoList()
    },
      watch: {
    avaFile: {
      handler(arr) {
        console.log('arr', arr)
        if (arr.length) {
          this.imgava = arr[0].content;
          localStore.set('imgava', this.imgava)
          this.upload(this.imgava, 'imgava')
        }
      },
      deep: true,
    },
  },
    methods: {
      //上传头像
          upload(base, type) {
      this.$axios.post(api.common.uploadImg, {
        image_base64: base
      }).then(res => {
        // console.log('upload', res)
        localStore.set(type, res.data.image_id)
        // this.$router.back();
      })
    },
      // 获取用户信息列表
      getUserInfoList(){
          this.$axios.post(api.userinfo.getuserinfo, {}).then(res => {
          this.userInfo = res.data;
        console.log("信息列表",  this.userInfo);
          // this.items[0].desc = this.userInfo.nick_name
          // this.items[1].desc = this.userInfo.sex==2?'女':'男'
          // this.items[2].desc = this.userInfo.country || ''
          // this.items[3].desc = this.userInfo.mobile || ''
          // this.items[4].desc = this.userInfo.email || ''
          // this.items[5].desc = this.userInfo.address || ''
            this.items.forEach(i=>{
              if(i.type=='1'){
                i.desc = this.userInfo.nick_name
              }else if(i.type=='2'){
                  i.desc = this.userInfo.sex==2?'女':'男'
              }else if(i.type=='3'){
                  i.desc = this.userInfo.country || ''
              }else if(i.type=='4'){
                  i.desc = this.userInfo.email || ''
              }else if(i.type=='5'){
                  i.desc = this.userInfo.address || ''
              }
              return i
            })
            console.log(this.items,555);

        // this.banners = res.data.list.map(item => item.image)
      });
      },
      // 更新用户昵称
      upNickName(name){
         this.$axios.post(api.userinfo.updateuser, {
        nick_name: name
      }).then(res => {
        if (res.errCode == 200) {
          this.getUserInfoList();
          this.$toast({
            type: "success",
            message: res.data.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.data.errMsg
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
                    this.showShare =true;
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
        handleSexSelect(type){
                 this.$axios.post(api.userinfo.updateuser, {
        sex: type
      }).then(res => {
        if (res.errCode == 200) {
          this.getUserInfoList();
          this.$toast({
            type: "success",
            message: res.data.errMsg
          });
        } else {
          this.$toast({
            type: "fail",
            message: res.data.errMsg
          });
        }
      });
            this.cancelSex();
        },
        cancelSex(){
            this.showShare =false;
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
