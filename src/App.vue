<template>
  <div id="app">
    <index></index>
    <router-view/>
  </div>
</template>

<script>
import index from '@/components/index'
export default {
  name: 'App',
  components: {index}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
