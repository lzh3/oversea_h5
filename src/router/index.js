import Vue from "vue";
import Router from "vue-router";

import localStorage from '@/utils/localStorage'

import Home from "@/pages/home";
import Find from "@/pages/find";
import Self from "@/pages/self";
import Login from "@/pages/login";
import SelectPosition from "@/pages/home/SelectPosition";
import SelfEdit from "@/pages/self/info/edit";
import ProjectList from "@/pages/project/projectList";
import ProjectDetail from "@/pages/project/projectDetail";
import ProjectSubscribe from "@/pages/project/subscribe";
import IDcardList from "@/pages/project/idcardList";
import UploadCard from "@/pages/project/UploadCard";
import ClientManage from "@/pages/self/client/manage";
import FundManage from "@/pages/self/fund/manage";
import ClientManagedetail from "@/pages/self/client/manageDetail";
import FundCash from "@/pages/self/fund/get-cash";
import CashDetail from "@/pages/self/fund/cash-detail";
import HasProject from "@/pages/self/hasProject";
import EditAddress from "@/pages/self/info/edit-address";
import AddressList from "@/pages/self/info/address-list";
import Esign from "@/pages/project/esign";
import BankList from "@/pages/self/fund/bank-list";
import BankAdd from "@/pages/self/fund/bank-add";
import OrderManage from "@/pages/self/order/manage";
import OrderPay from "@/pages/self/order/pay-detail";
import SafeIndex from '@/pages/self/safe/index'

Vue.use(Router);


let routerObj = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
      // children: [
      //   {
      //     path: 'position',
      //     component: SelectPosition,
      //     parent: 'home'
      //   }
      // ]
    },
    {
      path: "/position",
      component: SelectPosition
    },
    {
      path: "/find",
      component: Find
    },
    {
      path: "/self",
      component: Self,
      children: [
        {
          path: "edit",
          component: SelfEdit
          // parent: '/self'
        }
      ]
    },
    {
      path: "/address/list",
      component: AddressList
    },
    {
      path: "/address/edit",
      component: EditAddress
    },
    {
      path: "/projectList",
      component: ProjectList
    },
    {
      path: "/projectDetail",
      component: ProjectDetail
    },
    // 认购
    {
      path: "/project/subscribe",
      component: ProjectSubscribe
    },
    // 身份证列表
    {
      path: "/project/idcardList",
      component: IDcardList
    },
    // 上传身份证
    {
      path: "/project/uploadCard",
      component: UploadCard
    },
    {
      path: "/project/esign",
      component: Esign
    },
    {
      path: "/client/manage", // 客户管理
      component: ClientManage
    },
    {
      path: "/client/manageDetail", // 客户管理详情
      component: ClientManagedetail
    },
    {
      path: "/fund/manage", // 资金管理
      component: FundManage
    },
    {
      path: "/fund/cash", // 提现
      component: FundCash
    },
    {
      path: "/getcash/detail", // 提现明细
      component: CashDetail
    },
    {
      path: "/bank/list",
      component: BankList
    },
    // 添加银行卡
    {
      path: "/bank/add",
      component: BankAdd
    },
    // 已投项目
    {
      path: "/hasProject",
      component: HasProject
    },
    // 订单管理
    {
      path: "/self/order",
      component: OrderManage
    },
    {
      path: "/order/pay",
      component: OrderPay
    },
    // 账户安全
    {
      path: "/self/safe",
      component: SafeIndex
    }
  ]
});

routerObj.beforeEach((to, from, next) => {
  if (localStorage.get('userinfo')) {
    next();
  } else {
    if (to.path == '/login'){
      next()
    }
    next('/login');
  }
})

export default routerObj;