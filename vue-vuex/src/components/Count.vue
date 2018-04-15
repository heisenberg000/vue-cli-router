<template>
  <div class="count">
    <h2>{{ msg }}</h2>
    <!-- 模块组 -->
    <h3>{{ $store.state.moduleA.count }} - {{ count }}</h3>
    <p><button @click="$store.commit('add',plusnum)">add</button></p>
    <p><button @click="reduce(5)">reduce</button></p>
    <p><button @click="addAction">addAction</button></p>
    <p><button @click="reduceAction">reduceAction</button></p>

  </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      msg: 'Hello Vuex',
      plusnum: 10,
    }
  },
  store,
  // 方法3
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count']),
    // count(){
    //   this.$store.getters.count
    // }
  },
  methods: {
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  }
  // 方法1
  // computed: mapState({
  //   count: state=>state.count
  // })
  // 方法2
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // }
}
</script>
<style scoped>

</style>
