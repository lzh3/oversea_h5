// let common_url =  'http://www.cbith.com'
// let common_url = ''

// if(/localhost/.test(location.href.toLowerCase())){
//     common_url = ''
// }else{
//     common_url= 'http://www.cbith.com'
// }
let baseUrl = "/";

// 需要判断
const curDomain = document.domain;
if ("https://www.cbith.net/".includes(curDomain)) {
    baseUrl = "https://www.cbith.net/";
} else if (" http://m.cbicn.net:799/".includes(curDomain)) {
    baseUrl = " http://m.cbicn.net:799/";
} else {
    baseUrl = "";
}

export const COMMON_URL = baseUrl;

