<template>
  <div class="one-nav" @click="tolink()">
    <img src="@/assets/1.png" class="imgsize" alt="">
    <div :class="isselect">{{pathname}}</div>
  </div>
</template>

<script>
    export default {
      props:{path: {
          type: String
        },
        pathname:{
          type:String
        }
      },
      computed:{
        isselect() {
          return this.$route.path.indexOf(this.path) != -1 ? 'redcolor':''
        }
      },
        name: "Navitem",
      methods:{
        tolink(){
          this.$router.push(this.path);
        }
      }
    }
</script>

<style scoped>
  .one-nav{
    flex: 1;
  }
  .imgsize{
    width: 20px;
  }
  .redcolor{
    color:red;
  }
</style>
