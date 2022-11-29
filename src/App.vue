<template>
    <div id="app">
        <router-view />
        <van-tabbar v-model="active" v-if="showTab">
            <router-link to="/home">
                <van-tabbar-item>
                    <!-- <span>首页</span> -->
                    <p>{{$t('home.home')}}</p>
                    <template #icon="props">
                        <img :src="props.active ? homeActive : home" />
                    </template>
                </van-tabbar-item>
            </router-link>
            <router-link to="/find">
                <van-tabbar-item icon="search">
                    <p>{{$t('home.find')}}</p>
                    <template #icon="props">
                        <img :src="findActive" v-if="props.active" />
                        <img :src="find" v-else />
                    </template>
                </van-tabbar-item>
            </router-link>
            <router-link to="/self">
                <van-tabbar-item icon="setting-o">
                    <p>{{$t('home.personal')}}</p>
                    <template #icon="props">
                        <img :src="props.active ? meActive : me" />
                    </template>
                </van-tabbar-item>
            </router-link>
        </van-tabbar>
    </div>
</template>

<script>
import home from "./assets/imgs/tabbar/home.png"
import homeActive from "./assets/imgs/tabbar/home_active.png"
import find from "./assets/imgs/tabbar/find.png"
import findActive from "./assets/imgs/tabbar/find_active.png"
import me from "./assets/imgs/tabbar/me.png"
import meActive from "./assets/imgs/tabbar/me_active.png"

import localStore from '@/utils/localStorage'
export default {
    name: 'App',
    data() {
        return {
            home,
            homeActive,
            find,
            findActive,
            me,
            meActive,
            active: 0,
            icon: {
                active: 'https://img01.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
            },

            // 是否显示底部
            showTab: false,
        }
    },
    watch: {
        $route: {
            handler(val) {
                let obj = {
                    '/home': 0,
                    '/find': 1,
                    '/self': 2,
                }
                this.active = obj[val.path]

                if (val.path === '/home' || val.path === "/self" || val.path === "/find") {
                    this.showTab = true;
                } else {
                    this.showTab = false;
                }

                // 语言
                this.$i18n.locale = localStore.get('LANGUAGE') || 'ch';
            },
            deep: true,
            immediate: true,
        },
    },
    created() {
        // console.log('route', this.$route.path)
    },
}
</script>
<style lang="less">
</style>
<style lang='less' scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

// .van-tabbar-item__text {
a {
    color: #999;
    &.router-link-exact-active {
        color: #0a35d8;
    }
}
.van-tabbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > a {
        flex: 1;
        text-align: center;
    }
}
/deep/.van-tabbar-item--active {
    color: #0a35d8;
}
// }
</style>
