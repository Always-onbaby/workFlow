export const welcome = () => {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
export const isIE =  () => {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}
export const timeFix = () => {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}
// 重组树结构数据
export const getTreeData = list => {
  let cloneData = JSON.parse(JSON.stringify(list))
  return cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father.id == child.pid)
    branchArr.length > 0 ? (father.children == branchArr) : ''
    return father.pid == 0
  })
}