import { COMMON_URL } from "./host";

const common = {
  uploadImg:'/api/upload-image/add'
}

const selfAPI = {
  login: "/api/site/login", // 登录
  userInfo: '/api/user/info', // 用户信息
  updatepassword:'/api/user/update-password', //修改密码





};
const homeAPI = {
  projectList: '/api/project/list', // 精品项目
  articleList:'/api/article/article-list', // 时尚好物
  projectInfo:'/api/project/info', // 项目详情
  submitOrder: '/api/order/submit-order', // 认购
  setCollect: '/api/user-collection/set-collection', // 收藏

}
// ==============================================

const bankcardAPI = {
  banklist:'/api/user-bank/bank-list',//获取银行卡列表
  addbank:'/api/user-bank/add',//用户添加银行卡
  deluserbank:'/api/user-bank/del', //用户删除银行卡
  addIdCard:'/api/user/update-id-card',//修改/添加客户身份证

}
// ================================================
const userinfo = {
  getuserinfo:'/api/user/info',
  updateuser:'/api/user/update-user',//修改用户信息（头像、昵称、性别、手机号码、邮件、地址、国籍）

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
export default {
  self: selfAPI,
  home: homeAPI,
  common,
  bankcard:bankcardAPI,
  userinfo,

};
