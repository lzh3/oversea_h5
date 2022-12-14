import Vue from "vue";
import Router from "vue-router";

import localStorage from "@/utils/localStorage";

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
import Plan from "@/pages/project/plan";
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
import SafeIndex from "@/pages/self/safe/index";
import IndustryTrend from "@/pages/home/industry-trend";
import pay from "@/pages/pay/index";
import Luckydraw from "@/pages/self/luckydraw/index";

import ContractIndex from "@/pages/contract";
import InvestRecommend from "@/pages/invest-recommend";
import Changepwd from "@/pages/self/safe/change-password";
import Changepay from "@/pages/self/safe/change-pay";
import LangIndex from "@/pages/lang";
import RiskAssessment from "@/pages/self/riskassessment/index";
import Riskfinish from "@/pages/self/riskassessment/riskfinish";
import NewsDetail from "@/pages/find/news-detail";
import Consult from "@/pages/project/consult";

import Collect from "@/pages/self/collect/index";
// html?????????????????????
import DetailInner from "@/pages/project/detail-inner";
import Beta from "@/pages/self/beta";
import HomeSearch from "@/pages/home/search";
import HighCheck from '@/pages/self/highCheck'
import HighUpload from '@/pages/self/highCheck/upload-asset'

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
      path: "/home/search",
      component: HomeSearch
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
      path: "/find/newsDetail",
      component: NewsDetail
    },
    {
      path: "/self",
      component: Self
      // children: [
      //   {
      //     path: "edit",
      //     component: SelfEdit
      //     // parent: '/self'
      //   }
      // ]
    },
    {
      path: "/self/edit",
      component: SelfEdit
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
      path: "/projectDetail/plan",
      name:'plan',
      component: Plan
    },
    {
      path: "/projectDetail",
      component: ProjectDetail
    },
    // ??????
    {
      path: "/project/subscribe",
      component: ProjectSubscribe
    },
    {
      path: "/detailInner",
      component: DetailInner
    },
    // ???????????????
    {
      path: "/project/idcardList",
      component: IDcardList
    },
    // ???????????????
    {
      path: "/project/uploadCard",
      component: UploadCard
    },
    {
      path: "/project/esign",
      component: Esign
    },
    {
      path: "/client/manage", // ????????????
      component: ClientManage
    },
    {
      path: "/client/manageDetail", // ??????????????????
      component: ClientManagedetail
    },
    {
      path: "/fund/manage", // ????????????
      component: FundManage
    },
    {
      path: "/fund/cash", // ??????
      name: "fundcash",
      component: FundCash
    },
    {
      path: "/getcash/detail", // ????????????
      component: CashDetail
    },
    {
      path: "/bank/list",
      component: BankList
    },
    // ???????????????
    {
      path: "/bank/add",
      component: BankAdd
    },
    // ????????????
    {
      path: "/hasProject",
      component: HasProject
    },
    // ????????????
    {
      path: "/self/order",
      component: OrderManage
    },
    {
      path: "/order/pay",
      component: OrderPay
    },
    // ????????????
    {
      path: "/self/safe",
      component: SafeIndex
    },
    // ????????????
    {
      path: "/industry/list",
      component: IndustryTrend
    },
    // ????????????
    {
      path: "/payResult",
      component: pay
    },
    // ??????
    {
      path: "/project/contract",
      component: ContractIndex
    },
    // ????????????
    {
      path: "/home/invest-recommend",
      component: InvestRecommend
    },
    // ????????????
    {
      path: "/self/changepwd",
      component: Changepwd
    },
    // ??????????????????
    {
      path: "/self/changepay",
      component: Changepay
    },
    // ????????????
    {
      path: "/self/luckydraw",
      component: Luckydraw
    },
    {
      path: "/lang",
      component: LangIndex
    },
    //????????????
    {
      path: "/self/riskassessment",
      component: RiskAssessment
    },
    // ????????????--??????
    {
      path: "/self/riskfinish",
      component: Riskfinish
    },
    //??????
    {
      path: "/project/consult",
      component: Consult
    },
    //????????????
    {
      path: "/self/collect",
      component: Collect
    },
    {
      path: "/self/beta",
      component: Beta
    },
    // ????????????
    {
      path: "/self/highCheck",
      component: HighCheck
    },
    {
      path: '/high/upload',
      component: HighUpload
    }
  ]
});

routerObj.beforeEach((to, from, next) => {
  if (localStorage.get("userinfo")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    }
    next("/login");
  }
});

export default routerObj;
