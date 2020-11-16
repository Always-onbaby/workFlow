import request from '@/utils/request'
const approveApi = {
  // getPaaSComponent: '/approve/paaSComponent',
  // getApproveConfig: '/approve/approveConfig',
  // getFormAndProcessConfig: '/approve/processConfig',
  // canManageMembers: '/approve/canManageMembers',
  // canVisibleDataMembers: '/approve/canVisibleDataMembers',
  // canVisibleMembers: '/approve/canVisibleMembers',
  getMgrProcessList: '/approve/getMgrProcessList',
}
// 获取审批方案列表
export function getMgrProcessList (parameter) {
  return request({
    url: approveApi.getMgrProcessList,
    method: 'get',
    data: parameter,
  })
}
// export function getPaaSComponent (parameter) {
//   return request({
//     url: approveApi.getPaaSComponent,
//     method: 'get',
//     data: parameter,
//   })
// }

// export const getApproveConfig = (parameter) => {
//   return request({
//     url: approveApi.getApproveConfig,
//     method: 'get',
//     data: parameter,
//   })
// }
// // 获取表单和流程设计数据
// export const getFormAndProcessConfig  = (parameter) => {
//   return request({
//     url: approveApi.getFormAndProcessConfig,
//     method: 'get',
//     data: parameter,
//   })
// }

// // 可以管理模板并导出数据人员
// export const canManageMembers = (parameter) => {
//   return request({
//     url: approveApi.canManageMembers,
//     method: 'get',
//     data: parameter,
//   })
// }
// // 可以查看数据人员列表
// export const canVisibleDataMembers = (parameter) => {
//   return request({
//     url: approveApi.canVisibleDataMembers,
//     method: 'get',
//     data: parameter,
//   })
// }
// // 可以发起审批人员列表 
// export const canVisibleMembers = (parameter) => {
//   return request({
//     url: approveApi.canVisibleMembers,
//     method: 'get',
//     data: parameter,
//   })
// }