// import addNode from '@/components/addNode'
// import nodeWrap from '@/components/nodeWrap'
// import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import './css/override-element-ui.css'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import './plugins/axios'
import ydc from './plugins/common.js'
import './plugins/element.js'
import func from './plugins/preload.js'
import router from './router'
import store from './store'
import './utils/component'
import './utils/filter'
// Vue.use(nodeWrap)
// Vue.component('nodeWrap', nodeWrap); //初始化组件


// Vue.use(addNode)
// Vue.component('addNode', addNode); //初始化组件
Vue.prototype.$func = func;
Vue.prototype.$ydc = ydc;
Vue.config.productionTip = false;
Vue.use(ElementUI,{size: 'small'})
Vue.directive('enterNumber', {
    bind: function(el, { value = 2 }) {
        el = el.nodeName == "INPUT" ? el : el.children[0]
        var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
        el.addEventListener('keyup', function() {
            el.value = el.value.match(new RegExp(RegStr, 'g'));
            el.dispatchEvent(new Event('input'))
        })
    }
});

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
        el.focus()
    }
});
new Vue({
    router,
    store,
    // components: {
    //     nodeWrap,
    //     addNode,
    // },
    render: h => h(App)
}).$mount('#app')