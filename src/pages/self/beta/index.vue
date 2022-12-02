<template>
    <div class="bg1">
        <c-common-top :title='$t("self.changeV")' :isBack='true'></c-common-top>
        <div class="p-30">
            <van-cell :title="$t('self.inVersion')" clickable @click="handleCell('1')">
                <template #right-icon>
                    <van-radio-group v-model="radio">
                        <van-radio name="1" />
                    </van-radio-group>
                </template>
            </van-cell>
            <van-cell :title="$t('self.outVersion')" clickable @click="handleCell('2')">
                <template #right-icon>
                    <van-radio-group v-model="radio">
                        <van-radio name="2" />
                    </van-radio-group>
                </template>
            </van-cell>
        </div>
    </div>
</template>

<script>
import localStore from '@/utils/localStorage'

export default {
    data() {
        return {
            radio: localStore.get('LANGUAGE') || '1',
        }
    },
    created() {
        console.log('****', localStore.get('LANGUAGE'))
        this.radio = localStore.get('ISIN') || '1';
    },
    methods: {
        handleCell(val) {
            // 1: 国内    2：国外
            this.radio = val;
            console.log('cell', this.radio)
            localStore.set('ISIN',val)
            let BASEURL = val==1? 'http://h5.cbicn.net:799/':'https://www.cbith.com'
            localStore.set('BASEURL',BASEURL)
        }
    }
}
</script>

<style lang='less' scoped>
.van-cell {
    margin-bottom: 0.14rem;
    border-radius: 15px;
}
.van-radio-group {
    //   border-radius: 15px;
}
</style>
