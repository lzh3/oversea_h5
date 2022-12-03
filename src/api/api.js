import { COMMON_URL } from "./host";

const common = {
  uploadImg:'/api/upload-image/add',
  getImg: '/api/upload-image/info', // 获取上传的图片信息
}

const selfAPI = {
  login: "/api/site/login", // 登录
  userInfo: '/api/user/info', // 用户信息
  updatepassword:'/api/user/update-password', //修改密码
  orderList: '/api/order/user-order-list', // 订单管理列表
  orderDetail: '/api/order/order-info', // 订单详情
  fundsmgt:'/api/user-account-log/list',//资金管理
  withdraworder:'/api/withdraw-order/submit-order',//提现
  contract:'/api/user/contract',//获取合同
  getdaydayle:'/api/project/get-day-dayle',//获取天天乐奖池
  drawprize:'/api/project/draw-prize',//用户天天乐抽奖
  investment:'/api/user-investment/user-invitelist',//客户管理
  investmentlist:'/api/user-investment/list',//用户项目认购列表

};
const homeAPI = {
  projectList: '/api/project/list', // 精品项目
  articleList:'/api/article/article-list', // 时尚好物
  projectInfo:'/api/project/info', // 项目详情
  submitOrder: '/api/order/submit-order', // 认购
  setCollect: '/api/user-collection/set-collection', // 收藏
  notice:'/api/notice/notice-list',//公告列表

}
// ==============================================

const bankcardAPI = {
  banklist:'/api/user-bank/bank-list',//获取银行卡列表
  addbank:'/api/user-bank/add',//用户添加银行卡
  deluserbank:'/api/user-bank/del', //用户删除银行卡
  addIdCard:'/api/user/update-id-card',//修改/添加客户身份证
  createOrder: '/api/order/create-order',  // 第三方支付
  withdrawList: '/api/withdraw-order/withdraw-order-list', // 提现明细

}
// ================================================
const userinfo = {
  getuserinfo:'/api/user/info',
  updateuser:'/api/user/update-user',//修改用户信息（头像、昵称、性别、手机号码、邮件、地址、国籍）

}

// =================================================
const updatepwd = {
  updateuserpwd:'/api/user/update-password',//修改登录密码
  updatepay:'/api/user/update-withdraw-password',//修改支付密码
}

for (let key in selfAPI) {
  selfAPI[key] = COMMON_URL + selfAPI[key]
}
for (let key in common) {
  common[key] = COMMON_URL + common[key]
}
for (let key in homeAPI) {
  homeAPI[key] = COMMON_URL + homeAPI[key]
}
for (let key in bankcardAPI) {
  bankcardAPI[key] = COMMON_URL + bankcardAPI[key]
}
for (let key in userinfo) {
  userinfo[key] = COMMON_URL + userinfo[key]
}
for (let key in updatepwd) {
  updatepwd[key] = COMMON_URL + updatepwd[key]
}
export default {
  self: selfAPI,
  home: homeAPI,
  common,
  bankcard:bankcardAPI,
  userinfo,
  updatepwd,

};
