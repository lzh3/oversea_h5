import { COMMON_URL } from "./host";

const selfAPI = {
  login: "/api/site/login"


};
const homeAPI = {
  projectList: '/api/project/list', // 精品项目
  articleList:'/api/article/article-list', // 时尚好物
  projectInfo:'/api/project/info', // 项目详情
}




for (let key in selfAPI) {
  selfAPI[key] = COMMON_URL + selfAPI[key]
}
export default {
  self: selfAPI,
  home: homeAPI,
};
