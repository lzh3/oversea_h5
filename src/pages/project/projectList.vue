<template>
    <div class="list-wrap bg1">
        <c-common-top :title="$t('home.investRec')" :isBack="true"></c-common-top>
        <van-tabs v-model="active" @click="changeTab">
            <van-tab :title="$t('home.investment')">
                <div class="main p-30 c_homelist">
                    <van-list v-model="loading" :finished="isFinished" @load="loadMore">
                        <c-home-list :cards="projects" />
                    </van-list>
                </div>
            </van-tab>
            <van-tab :title="$t('home.advNotice')">
                <div class="main p-30 c_homelist">
                    <van-list v-model="loading" :finished="isFinished" @load="loadMore">
                        <c-home-list :cards="projects1" />
                    </van-list>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import api from "@/api/api"
import CHomeList from "@/components/home/c-home-list";

export default {
    components: {
        CHomeList
    },
    data() {
        return {
            active: 0,
            projects: [],
            total1: 0,
            projects1: [],
            total2: 0,
            pagestart: 1,
            pagesize: 15,

            loading: false,
            isFinished: false,
        };
    },
    created() {
        // this.getProjectList1()
    },
    methods: {
        loadMore() {
            console.log('loadmore', this.active == 0)
            this.active == 0 ? this.getProjectList1(this.pagestart) : this.getProjectList2(this.pagestart);
            this.pagestart++;
        },
        // 获取项目列表 -- 投资2
        getProjectList1() {
            this.loading = true;
            this.$axios.post(api.home.projectList, {
                page: this.pagestart,
                page_size: this.pagesize,
                show_status: 1
            }).then(res => {
                console.log('项目列表', res)
                // this.projects = res.data.list;
                this.total = res.data.total;
                if (this.pagestart === 1) {
                    this.projects = res.data.list;
                } else {
                    this.projects.push(...res.data.list);
                }
                this.total1 = res.data.total;
                this.loading = false;
                if (this.projects.length >= this.total1 || res.data.list.length === 0) {
                    this.isFinished = true
                }
            })
        },
        // 获取项目列表 -- 预告0
        getProjectList2() {
            this.loading = true;
            this.$axios.post(api.home.projectList, {
                page: this.pagestart,
                page_size: this.pagesize,
                show_status: 0
            }).then(res => {
                console.log('项目列表', res)
                // this.projects1 = res.data.list;

                if (this.pagestart === 1) {
                    this.projects1 = res.data.list;
                } else {
                    this.projects1.push(...res.data.list);
                }
                this.total2 = res.data.total;
                this.loading = false;
                if (this.projects1.length >= this.total2 || res.data.list.length === 0) {
                    this.isFinished = true
                }
            })
        },

        // 切换Tab
        changeTab(v) {
            this.pagestart = 1;
            if (v == 0) {
                this.getProjectList1()
            } else {
                this.getProjectList2()
            }
        },
    }
};
</script>
<style lang="less" scoped>
/deep/.van-tabs__wrap {
    height: 30px;
}
/deep/.van-tabs__nav {
    background-color: transparent;
    padding-bottom: 15px;
    .van-tabs__line {
        background-color: #0a35d8;
    }
}
.c_homelist {
    margin-top: 0.16rem;
}
</style>
