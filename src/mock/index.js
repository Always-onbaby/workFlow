import { isIE } from '@/utils/util'
// 判断环境不是 prod 或者 preview 是 true 时，加载 mock 服务
if(process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
  if(isIE()) {
    console.log('IE 不支持 mockjs')
  }
  console.log('mock mounting')
  const Mock = require('mockjs2')
  // require('./services/resume')
  // require('./services/auth')
  // require('./services/user')
  // require('./services/project')
  // require('./services/customer')
  // require('./services/system')
  // require('./services/candidate')
  require('./services/approve')

  Mock.setup({
    timeout: 800
  })
  console.log('mock mounted')
}