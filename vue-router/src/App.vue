<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{name: 'Ex'}"><button>exchange</button></router-link>
    </div>
    <router-view></router-view>
    <router-view name="left" :style="[leftStyle,commonStyle]"></router-view>
    <router-view name="right" :style="[rightStyle,commonStyle]"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      leftStyle : {
        float:'left',
        backgroundColor:'#ccc',
      },
      rightStyle: {
        float:'right',
        backgroundColor:'#c0c',
      },
      commonStyle: {
        width: '50%',
        height: '300px',
      }
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
</style>
