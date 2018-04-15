import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import pageOne from '@/components/pageOne'
import pageTwo from '@/components/pageTwo'
import Params from '@/components/params'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  // hash history两种模式 hash模式带#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children: [
        // {
        //   path: '/',
        //   component: Hi
        // },
        {
          path: 'pageOne',
          name: 'pageOne',
          component: pageOne,
        },
        {
          path: 'pageTwo',
          name: 'pageTwo',
          component: pageTwo
        },
      ]
    },
    {
      // url传递参数 可以加正则表达式
      path: '/params/:newId(\\d+)/:newTitle',
      name: 'params',
      component: Params,
      beforeEnter: (to,from,next)=>{
        console.log(to)
        console.log(from)
        // true确认跳转 false不跳转
        next(true)
        // 跳转到根目录
        // next({path:'/'})
      }
    },
    {
      // 重定向跳转
      path: '/goHome',
      redirect: '/'
    },
    {
      // 重定向带参数跳转
      path: '/goParams/:newId(\\d+)/:newTitle',
      redirect: '/params/:newId(\\d+)/:newTitle'
    },
    {
      path: '/pageOneAlias',
      component: pageOne,
      alias: '/pOAlias'

    },
    {
      // url错误时，错误页面
      path: '*',
      name: 'error',
      component: error,
    }
  ]
})
