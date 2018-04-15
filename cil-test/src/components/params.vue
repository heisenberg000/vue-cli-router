<template>
  <div class="params">
    {{ msg }}
    <p>
    {{ $route.params.newId }} - {{ $route.params.newTitle }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'params',
  data(){
    return {
      msg: 'params pages'
    }
  },
  // 模板中钩子函数
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入params路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params路由模板');
    next()
  }
}
</script>
<style scoped>

</style>
