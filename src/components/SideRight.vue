<template>
  <div>
    <el-col :span="12">
      <el-menu 
      default-active="2" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router>
        <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>首页模块</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shouye">选项1</el-menu-item>
              <el-menu-item index="/shouye">选项2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/shujudata">
          <i class="el-icon-document-copy"></i>
          <span slot="title">Table表格</span>
        </el-menu-item>
        <el-menu-item index="/cardview">
          <i class="el-icon-document"></i>
          <span slot="title">Card卡片</span>
        </el-menu-item>
        <el-menu-item index="/dateview">
          <i class="el-icon-date"></i>
          <span slot="title">日历演示</span>
        </el-menu-item>
        <el-menu-item index="/timeline">
          <i class="el-icon-cherry"></i>
          <span slot="title">时间线段</span>
        </el-menu-item>
        <!-- <el-menu-item index="/yanshi">
          <i class="el-icon-cherry"></i>
          <span slot="title">演示UI</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo{
  width: 200%;
  height: 100vh;
}
</style>