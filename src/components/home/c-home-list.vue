<template>
    <div class="list-wrap">
        <ul>
            <li class="item" v-for="item in cards" :key="item.project_id" @click="handleItemClick(item)">
                <div class="pic">
                    <img :src="item.image" alt="" v-if="item.image">
                </div>
                <div class="details">
                    <h3 class="item-title">
                        {{item.name}}
                    </h3>
                  <div class="c-tag">
                    <van-tag color="#EE7348">{{item.city}}</van-tag>
                    <van-tag color="#7DA4F5">{{item.type }}</van-tag>
                  </div>
                    <p v-if="showStatus" class="status">{{item.show_status | statusFilter}}</p>
                    <p v-else class="status"></p>
                    <div class="process">
                        <div class="process-bar">
                            <van-progress :percentage="processBar(item)" :show-pivot="false" track-color="#FFB9B6" color="#FF1F16" />
                        </div>
                        <span>{{progressCom(item)}}</span>
                    </div>
                    <p class="time">截止时间：{{item.end_time | toSecDate}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { STATUS } from "@/utils/enum"
export default {
    props: {
        cards: {
            type: Array,
            default: () => []
        },
        showStatus: {
            type: Boolean,
            default: true,
        }
    },
    filters: {
        statusFilter(val) {
            return STATUS[val]
        },
      // ellipsis(value){
      //   if (!value) return '';
      //   if (value.length > 4) {
      //     return value.slice(2) + '...'
      //   }
      //   return value
      // }
    },
    computed: {
        progressCom(){
            return item=>{
                return (100 * (item.sub_amount / item.amount)).toFixed(2) + "%";
            }
        },
        processBar(){
            return item=>{
                return (item.sub_amount / item.amount) || 0;
            }
        },
    },
    data() {
        return {

        }
    },
    methods: {
        handleItemClick(item){
            this.$router.push({
                path:'/projectDetail',
                query: {
                    id: item.project_id
                },
            })
            // this.$emit('item', item)
        }
    },
}
</script>
<style lang="less" scoped>
/deep/.van-tag{
    margin-right: 5px;
}
.list-wrap {
    width: 100%;
    ul {
        width: 100%;

        .item {
            display: flex;
            width: 100%;
            height: 2.2rem;
            margin-bottom: 0.3rem;
            background: #fff;
            border-radius: 0.28rem;
            overflow: hidden;
            box-sizing: border-box;
          //padding-bottom: 0.3rem;
            .van-tag{
                //margin-right: 0.18rem;
            }
            .pic {
                width: 2.5rem;
                height: 100%;
                // background: #eee;
                border-radius: 0.28rem;
                // overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    border:none;
                }
            }
            .details {
                flex: 1;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                margin-left: 0.3rem;
                text-align: left;
                // align-items: center;
                // justify-content: center;
                p {
                    height: 0.24rem;
                    line-height: 0.24rem;
                }
                .item-title {
                    margin: 0.18rem 0 0.2rem 0;
                    line-height: 0.28rem;
                    font-size: 0.29rem;
                    font-weight: 400;
                    color: #333;
                  //.van-tag{
                  //  font-size: 10px;
                  //}
                }
              .c-tag{
                font-size: 10px;
              }
                .status {
                    font-size: 0.23rem;
                    font-weight: 400;
                    color: #ff1f16;
                    margin-top: 10px;
                }
                .process {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    .process-bar {
                        width: 100%;
                    }
                    span {
                        margin-left: 0.18rem;
                        font-size: 0.22;
                        color: #ff1f16;
                    }
                }
                .time {
                    font-size: 0.22rem;
                    font-weight: 400;
                    color: #666;
                }
            }
        }
    }
}
</style>
