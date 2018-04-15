<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <button @click="goForward">forward</button>
      <button @click="goBack">back</button>
      <button @click="goHome">return Home</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">测试页面</router-link>
      <!-- 路由传参 name为在index.js里面配置的 params为需要传递的参数对象 -->
      <router-link :to="{name:'pageOne',params:paramObj}">测试页面子页面1</router-link> |
      <router-link to="/Hi/pageTwo">测试页面子页面2</router-link> |
      <router-link to="/params/89/This is a big news">Url传递参数</router-link> |
      <router-link to="/goHome">重定向跳转</router-link> |
      <router-link to="/goParams/188/This is a params redirect">重定向带参数跳转</router-link> |
      <!-- 重定向改变url显示，alias不改变 -->
      <router-link to="/pOAlias">alias别名</router-link> |
      <!-- 404页面测试 -->
      <router-link to="/abc">404页面测试</router-link> |

    </div>
    <p v-if="$route.name!=='Hi'">{{ $route.name }}</p>
    <!-- 定义动画效果 -->
    <transition name="fade" mode="out-in"><router-view/></transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      paramObj : {
        username: 'yuanjunyi',
        age: 27,
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.forward(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
