import { COMMON_URL } from "./host";

const common = {
  uploadImg:'/api/upload-image/add'
}

const selfAPI = {
  login: "/api/site/login", // 登录
  userInfo: '/api/user/info', // 用户信息

};
const homeAPI = {
  projectList: '/api/project/list', // 精品项目
  articleList:'/api/article/article-list', // 时尚好物
  projectInfo:'/api/project/info', // 项目详情
  submitOrder: '/api/order/submit-order', // 认购
  setCollect: '/api/user-collection/set-collection', // 收藏

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
export default {
  self: selfAPI,
  home: homeAPI,
  common,
};
