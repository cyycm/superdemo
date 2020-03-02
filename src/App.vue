<template>
  <div id="app">
    <router-view/>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav  from '@/components/nav/Nav'
export default {
  components: {Nav},
  name: 'App'
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
