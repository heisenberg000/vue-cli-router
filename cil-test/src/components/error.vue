<template>
  <div class="404">
      <h1>404</h1>
      <h2>{{ errormsg }}</h2>
  </div>
</template>
<script>
export default {
  name: '404',
  data() {
    return {
      errormsg: 'This page is not exists'
    }
  }
}
</script>
<style scoped>

</style>

