// 审批方案列表
import mgrProcessList from '@/assets/json/getMgrProcessList.json'
// import list from '@/assets/json/defaultList.json'
// import formAndProcessConfig from '@/assets/json/getFormAndProcessConfigV2.json'
// import canVisibleDataMembersList from '@/assets/json/getProcessDataVisible.json'
// import canManageMembersList from '@/assets/json/getProcessManagerList.json'
// import canVisibleMembersList from '@/assets/json/getProcessVisible.json'
import Mock from 'mockjs2'
import { builder } from '../util'



// const paaSComponent = (options) => {
//   return builder(list.componentNameList)
// }

// const iconUrlMap = () => {
//   return builder(list.iconUrlMap)
// }

// const approveConfig = () => {
//   const info = {
//     paaSComponent: list.componentNameList,
//     iconUrlMap: list.iconUrlMap,
//     dirList: list.dirList
//   }
//   return builder(info)
// }

// const processConfig = (options) => {
//   // const body = getBody(options)
//   // console.log('mock: body', body)
//   return builder(formAndProcessConfig.data)

// }


// const canManageMembers = (options) => {
//   // const body = getBody(options)
//   // console.log('mock: body', body)
//   return builder(canManageMembersList.data)

// }

// const canVisibleDataMembers = (options) => {
//   // const body = getBody(options)
//   // console.log('mock: body', body)
//   return builder(canVisibleDataMembersList.data)

// }

// const canVisibleMembers = (options) => {
//   // const body = getBody(options)
//   // console.log('mock: body', body)
//   return builder(canVisibleMembersList.data)

// }
const processList = (options) => {
  return builder(mgrProcessList.data)
}

// Mock.mock(/\/approve\/paaSComponent/, 'get', paaSComponent)
// Mock.mock(/\/approve\/iconUrlMap/, 'get', iconUrlMap)
// Mock.mock(/\/approve\/approveConfig/, 'get', approveConfig)
// Mock.mock(/\/approve\/processConfig/, 'get', processConfig)
// 人员列表数据
// Mock.mock(/\/approve\/canManageMembers/, 'get', canManageMembers)
// Mock.mock(/\/approve\/canVisibleDataMembers/, 'get', canVisibleDataMembers)
// Mock.mock(/\/approve\/canVisibleMembers/, 'get', canVisibleMembers)
Mock.mock(/\/approve\/getMgrProcessList/, 'get', processList)