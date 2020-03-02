<template>
  <h2 @click="newpage()">我是首页</h2>
</template>

<script>
    export default {
        name: "home",
        methods:{
          newpage(){
            this.$router.push('apage')
          }
        }
    }
</script>

<style scoped>

</style>
