<template>
  <div class="hi">
    <h1>{{ msg }} - {{ $route.params.username }} - {{ $route.params.age }}</h1>
  </div>
</template>

<script>
export default {
  name: 'pageOne',
  data () {
    return {
      msg: '这是测试子页面1',
    }
  }
}
</script>

<style scoped>

</style>
