import Vue from 'vue'
import Router from 'vue-router'
// import TestMessageBox from '@/components/TestMessageBox.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

import HelloWorld from '@/components/HelloWorld'
import Newvue from '@/pages/Newvue/Newvue'

Vue.use(Router)
Vue.use(Element, { size: 'small' })

export default new Router({
  routes: [
    {
      path: '/Element',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Newvue',
      name: 'Newvue',
      component: Newvue
    }
  ]
})
