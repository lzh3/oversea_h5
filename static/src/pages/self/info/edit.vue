<template>
    <div class="edit-wrap">
        <c-common-top title="编辑资料" :isBack="true"></c-common-top>
        <div class="main p-30">
            <div class="avatar bg-white p-30">
                <p class="label">头像</p>
                <div class="ava">
                    <p class="pic"></p>
                    <p class="icon"><i class="iconfont icon-xiangyoujiantou"></i></p>
                </div>
            </div>
            <div class="edit-item">
                <ul>
                    <li class="p-30 bg-white" v-for="item in items" :key="item.label" @click="handleItemClick(item)">
                        <span class="label">{{item.label}}</span>
                        <i class="iconfont icon-xiangyoujiantou"></i>
                    </li>
                </ul>
            </div>
        </div>
        <c-dialog-name :visible.sync="dialogName" />
        <!-- <c-sheet-sex :showShare="true"/> -->
        <van-popup class="sex-popup" v-model="showShare" position="bottom" :style="{ height: 'auto', }">
            <div class="op-block">
                <p class="sex" v-for="item in sex" :key="item.type" @click="handleSexSelect">{{item.label}}</p>
                <p class="line"></p>
                <p class="cancel" @click="cancelSex">取消</p>
            </div>
        </van-popup>
    </div>
</template>

<script>
import cDialogName from './c-dialog-name.vue';
// import cSheetSex from './c-popup-sex.vue';
export default {
    components: {
        cDialogName,
        // cSheetSex,
    },
    data() {
        return {
            items: [
                {
                    label: '昵称',
                    type: '1'
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
    created() { },
    methods: {
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
        handleSexSelect(item){
            // item.type
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
        .pic {
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