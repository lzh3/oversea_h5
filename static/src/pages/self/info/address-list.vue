<template>
  <div class="address-page bg1">
    <c-common-top title="收件地址" 
    :isBack="true" :isTo="true"
     toText="新增地址"></c-common-top>
    <div class="main p-30">
      <ul class="address-list">
        <li v-for="item in addressList" :key="item.id">
          <div class="left">
            <p class="info">
              <span class="name">{{item.name}}</span>
              <span class="phone">{{item.phone}}</span>
              <van-tag color="#EE7348" v-if="item.default">默认</van-tag>
            </p>
            <p class="address">
              <span>{{item.province}}</span>
              <span>{{item.area}}</span>
              <span class="detail">{{item.detail}}</span>
            </p>
          </div>
          <div class="right c-main">
            <p @click="handleEdit(item)">编辑</p>
            <p @click="handleDelete(item)">删除</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: [
        {
          id: 1,
          name: '王五',
          phone: '12234565434',
          default: true,
          province: '北京市',
          area: '朝阳区',
          detail: '芜湖大道坡子s街116号3楼dasdjla'
        },
        {
          id: 2,
          name: '全力詹',
          phone: '12234565434',
          default: false,
          province: '北京市',
          area: '朝阳区',
          detail: '芜湖大道坡子s街116号3楼dasdjla'
        },
      ],
    }
  },
  methods: {
    handleEdit(item) {
      this.$router.push({
        path: '/address/edit',
        query: {
          id: item.id
        }
      })
    },
    handleDelete(item) {

    }
  }
}
</script>

<style lang='less' scoped>
/deep/.van-tag {
  background: rgba(10, 53, 216, 0.3) !important;
  padding: 2px 8px;
  color: #0a35d8;
  border-radius: 10px;
}
.address-list {
  li {
    display: flex;
    justify-content: space-between;
    height: 1.68rem;
    padding: 0.3rem;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 0.29rem;
    border-radius: 15px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 0.3rem;

    .left {
      margin-right: 0.6rem;
      .info {
        display: flex;
        align-items: center;
        .name {
          font-weight: bold;
        }
        .phone {
          margin: 0 0.2rem 0 0.4rem;
        }
      }
      .address {
        margin-top: 0.1rem;
        font-size: 0.28rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis; //文本超出省略
        display: -webkit-box;
        -webkit-line-clamp: 2; //第几行省略就设置第几行
        -webkit-box-orient: vertical;
        .detail {
          font-size: 0.24rem;
        }
      }
    }
    .right {
      display: flex;
      width: 1.4rem;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>

