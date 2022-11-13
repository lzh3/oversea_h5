import Vue from 'vue'
import moment from 'moment'

Vue.filter('toNumber', (value) => {
  const mark = ','  // 加什么分隔符
  const counts = 3  // 几分位 3表示千分位
  if (value === 0) return 0;
  if (!value) return 0;
  value = value.toString().split(".")
  var tempAry = value[0].split("").reverse()
  var res = []
  for (var i = 0, len = tempAry.length; i < len; i++) {
    if (i % counts === 0 && i !== 0) {
      res.push(mark)
    }
    res.push(tempAry[i])
  }
  res.reverse()
  if (value[1]) {
    res = res.join("").concat("." + value[1])
  } else {
    res = res.join("")
  }
  return res
})

// 2022-11-09 18:00:00
Vue.filter('toDate', value => {
  return value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '--';
})

// 单位秒 =>  格式化
Vue.filter('toSecDate', value => {
  return value ? moment(Number(value)*1000).format('YYYY-MM-DD HH:mm:ss') : '--';
})