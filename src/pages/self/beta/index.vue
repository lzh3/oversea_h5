<template>
    <div class="bg1">
        <c-common-top title='版本切换' :isBack='true'></c-common-top>
        <div class="p-30">
            <van-cell title="国内版" clickable @click="handleCell('1')">
                <template #right-icon>
                    <van-radio-group v-model="radio">
                        <van-radio name="1" />
                    </van-radio-group>
                </template>
            </van-cell>
            <van-cell title="海外版" clickable @click="handleCell('2')">
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
        this.radio = localStore.get('LANGUAGE') === 'en' ? '2' : '1'
    },
    methods: {
        handleCell(val) {
            // 1: 国内    2：国外
            this.radio = val;
            console.log('cell', this.radio)
            let ISIN = val == 1 ? true : false;
            // this.$i18n.locale = lang
            // localStore.set('LANGUAGE', lang)

            localStorage.setItem('ISIN',ISIN)
            // location.reload();
            

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
