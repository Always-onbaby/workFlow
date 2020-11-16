import moment from 'moment'
import 'moment/locale/zh-cn'
import Vue from 'vue'
moment.locale('zh-cn')

Vue.filter('NumberFormat',(value) => {
  if(!value) {
    return '0'
  }
  const intPartFormat = Math.floor(value).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartFormat
})

Vue.filter('moment',(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(pattern)
})

Vue.filter('getProStatus',(value) => {
  if(!value) {
    return ''
  }
  const _obj = {
    'Live': '进展中',
    'Pending': '暂停中',
    'Successful': '已完成',
    'Canceled': '已取消',
    'Fail': '已失败',
  }
  return _obj[value]
})

Vue.filter('getCusStatus', value => {
  value = value + ''
  if(!value) {
    return ''
  }
  const _obj = {
    '1': '中止合作',
    '2': '暂停合作',
    '3': '合作中',
    '4': 'BD中',
  }
  return _obj[value]
})

Vue.filter('getCusProperty', value => {
  if(!value) {
    return '其他'
  }
  const _obj = {
    'foreign': '外资企业',
    'state_owned': '国有企业',
    'joint_ventrue': '合资企业',
    'private': '私营/民营企业',
  }
  return _obj[value]
})