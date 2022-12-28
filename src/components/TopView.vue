<template>
  <div class="topview">
    <span class="texttitle">后台管理系统</span>
    <el-avatar class="touxiang" :size="size" :src="circleUrl"></el-avatar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
}
</script>

<style>
.topview{
  margin-top: 10px;
  display: flex;
  height: 100%;
  width: 100vh;
}
.texttitle{
  color: white;
  font-size: 30px;
}
.touxiang{
  margin-left: 50px;
}
</style>