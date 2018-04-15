import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Left from '@/components/Left'
import Right from '@/components/Right'

Vue.use(Router)

export default new Router({
  routes: [
    // 单页面多路由配置
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Left,
        right: Right
      },
    },
    {
      path: '/exchange',
      name: 'Ex',
      components: {
        default: HelloWorld,
        left: Right,
        right: Left
      },
    }
  ]
})
