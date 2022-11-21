<template>
    <div class="position-wrap">
        <c-common-top :title="$t('common.selectarea')" :isBack='true' />
        <div class="main">
            <!-- <div class="search  p-30">
            </div> -->
            <div class="line"></div>
            <div class="city-list">
                <ul>
                    <li class="city-item" v-for="item in list" :key="item.name" @click="handleItem(item)">
                        <p class="name">{{item.name}}</p>
                        <!-- <p class="word">{{item.word}}</p> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import localStore from '@/utils/localStorage'
export default {
    data() {
        return {
            keyword: '',
            list: [
                {
                    name: '中文',
                    lang: 'ch'
                },
                {
                    name: 'English',
                    lang: 'en'
                }
            ],
        }
    },
    methods: {
        // 点击一条
        handleItem(item) {
            // this.$emit('item', item)
            localStore.set('LANG', item.name)
            localStore.set('LANGUAGE', item.lang)
            this.$i18n.locale = item.lang;
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="less" scoped>
.position-wrap {
    // color: red;
    .main {
        background: #fff;
        margin: 0 0.3rem;
        border-radius: 0.29rem 0.29rem 0px 0px;
        .city-list {
            padding: 0.22rem 0;
        }
        .city-item {
            // display: flex;
            // justify-content: space-between;
            // height: 0.44rem;
            padding: 0.22rem 0.3rem;
            text-align: center;
            &:hover {
                background: skyblue;
            }
        }
    }
}
</style>
