<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <HeaderV></HeaderV>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SideView></SideView>
        </el-aside>
        <el-main>
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideView from '../components/SideRight.vue'
import HeaderV from '../components/TopView.vue'
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  components: {
    SideView, HeaderV
  }
}
</script>
<style>
.common-layout{
  background-color: rgb(246, 246, 247);
  height: 100vh;
}
.header{
  background-color: rgb(31, 209, 138);
}
.el-aside{
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

.el-main{
  height: 100vh;
}
</style>
