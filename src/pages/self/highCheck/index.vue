<template>
    <div class="high-page bg1">
        <c-common-top :isBack="true" :title="$t('self.highCheck')" />
        <div class="upload-box p-30">
            <div class="bg-white card" @click="uploadCard">
                <span>{{$t('self.assetCheck')}}</span>
                <p>
                    <span class="status" v-if="bool">已上传</span>
                    <i class="iconfont icon-xiangyoujiantou"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import localStore from '@/utils/localStorage'

export default {
    data() {
        return {
            bool: false,
        };
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            let img = localStore.get('asset-id');
            this.bool = img ? true : false;
        },
        uploadCard() {
            this.$router.push({
                path: '/high/upload'
            })
        },
    },
};
</script>
<style lang="less" scoped>
.upload-box {
    div {
        display: flex;
        padding: 0 0.3rem;
        height: 0.85rem;
        border-radius: 15px;
        margin: 0.3rem 0;
        align-items: center;
        justify-content: space-between;
    }
    .status {
        color: #999;
    }
    .sign-img {
        width: 1.14rem;
        height: 0.43rem;
    }
}
</style>
