import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import Router from 'vue-router'
NProgress.configure({ showSpinner: false })
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/approval/list'
    },
    {
      path: '/approval/list',
      name: 'approval_list',
      component: () => import(`@/views/approval/list/List.vue`),
      meta: {
        title: '审批流_方案列表',
      }
    },
    {
      path: '/approval/setting',
      name: 'approval',
      component: () => import(`@/views/approval/setting`),
      meta: {
        title: '审批流_方案设置',
      }
    }
  ]
})
router.beforeEach((to, fron, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = `审批流`
  }
  next()
})


router.afterEach(() => {
  NProgress.done()
})
export default router