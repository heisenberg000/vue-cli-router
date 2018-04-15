<template>
  <div class="hi">
    <h2>{{ msg }}</h2>
    <!-- 用于展示link的内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: '这是一个测试页面',
    }
  }
}
</script>

<style scoped>

</style>
