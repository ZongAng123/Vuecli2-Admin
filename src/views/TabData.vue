<template>
  <div class="shujuview">
    <el-table 
    ref="multipleTable"
    border
    :data="tableData" 
    style="width: 100%" 
    :row-class-name="tableRowClassName">
    <el-table-column type="selection" width="55">
    </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="联系方式" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2022-12-27',
                name: '骗子电话',
                phone: '+86 (755) 6118 5418',
                address: '未知地址',
            }, {
                date: '2022-12-27',
                name: '诈骗电话',
                phone: '+86 (25) 9523 1940',
                address: '未知地址'
            }, {
                date: '2022-12-27',
                name: '诈骗电话',
                phone: '95357',
                address: '未知地址',
            }, {
                date: '2022-12-27',
                name: '诈骗电话',
                phone: '+86 (755) 8435 1873',
                address: '未知地址'
            }, {
                date: '2022-12-27',
                name: '诈骗电话',
                phone: '+86 162 7521 3583',
                address: '未知地址'
            }]
        }
    },
    methods: {
        tableRowClassName({rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    },
}
</script>

<style>
.shujuview{
    background-color: white;
    height: 100vh;
}
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>