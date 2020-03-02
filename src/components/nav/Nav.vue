<template>
  <div class="nav-top" >
    <Navitem path="home" pathname="首页"></Navitem>
    <Navitem path="collect" pathname="关于"></Navitem>
    <Navitem path="goodcart" pathname="购物车"></Navitem>
    <Navitem path="my" pathname="我的"></Navitem>

  </div>
</template>

<script>
  import Navitem from '@/components/nav/Navitem'
    export default {
        name: "nav",
      components:{Navitem}

    }
</script>

<style scoped>
  .nav-top{
    display:flex;
    height: 49px;
    position: fixed;
    width:100%;
    bottom:0;
    left:0;
  }
</style>
