import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestMessageBox from '@/components/TestMessageBox.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.use(Router)
Vue.use(Element, { size: 'small' })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/TestMessageBox',
      name: 'TestMessageBox',
      component: TestMessageBox
    }
  ]
})
