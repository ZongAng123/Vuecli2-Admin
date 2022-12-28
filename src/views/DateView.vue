<template>
  <div class="dateview">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    },
}
</script>

<style>
.dateview{
    background-color: white;
    height: 100vh;
}
</style>