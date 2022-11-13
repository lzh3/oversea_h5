<template>
    <van-dialog :showConfirmButton="false" :showCancelButton="false" v-model="visible" :title="title" show-cancel-button>
        <van-field v-model="name" clearable placeholder="请输入昵称" />

        <div class="btns">
            <van-button type="default" @click="cancel">取消</van-button>
            <van-button type="default" @click="sure">确定</van-button>
        </div>
    </van-dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '修改'
        },
        visible: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            name: '',
        };
    },
    created() { },
    methods: {
        sure(){
            this.$emit('ok', this.name)
            this.cancel();
        },
        cancel(){
            this.name= ''
            this.$emit('update:visible', false)
        },
    },
};
</script>
<style lang="less" scoped>
/deep/.van-dialog__content {
    padding: 0 0.7rem 0.5rem;
    .van-cell {
        padding: 10px 0;
        border-bottom: 1px solid #3221e9;
    }
    .btns{
        display: flex;
        justify-content: space-between;
    }
    .van-button {
        margin-top: 0.5rem;
        width: 2.1rem;
        height: 0.66rem;
        border: 1px solid #cccccc;
        border-radius: 0.33rem;
        font-size: 0.29rem;
        font-weight: 400;
        color: #999;
        &:nth-child(2) {
            color: #fff;
            background: linear-gradient(112deg, #0a35d8 0%, #3f63ea 100%);
        }
    }
}
</style>