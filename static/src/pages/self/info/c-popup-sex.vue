<template>
    <van-popup class="sex-popup" v-model="showShare" position="bottom" :style="{ height: 'auto', }">
        <div class="op-block">
            <p class="sex" v-for="item in sex" :key="item.type">{{item.label}}</p>
            <p class="line"></p>
            <p class="cancel" @click="cancel">取消</p>
        </div>
    </van-popup>
</template>

<script>
export default {
    props: {
        showShare: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
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
        };
    },
    created() {

    },
    methods: {
        handleItemClick(item) {
            this.$emit('select', item.type)
        },
        cancel(){
            this.$emit('cancel', false)
        },
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