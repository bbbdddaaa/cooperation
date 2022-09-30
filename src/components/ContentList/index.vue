<template>
  <div class="root">
    <el-row style="width:1100px">
      <el-col :span="2"><div class="grid-content bg-purple" />
        <el-button type="warning" icon="el-icon-circle-plus-outline">新建</el-button>
      </el-col>
      <el-col v-if="show" :span="2"><div class="grid-content bg-purple" />
        <el-button>工单配置</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="(item,index) in title" :key="index" :label="item.title" :prop="item.name" />
      <!-- <el-table-column prop="date" label="工单编号" />
      <el-table-column prop="date" label="设备编号" />
      <el-table-column prop="date" label="工单类型" />
      <el-table-column prop="date" label="工单方式" />
      <el-table-column prop="date" label="工单状态" />
      <el-table-column prop="date" label="运营人员" />
      <el-table-column prop="date" label="创建日期" />
      <el-table-column prop="date" label="操作" /> -->
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    tableData: {
      type: Array
    },
    title: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // titles() {
    //   const a = []
    //   const b = []
    //   for (const k in this.tableData[0]) {
    //     a.push(k)
    //   }
    //   a.forEach((item, index) => {
    //     b.push({
    //       'title': this.title[index],
    //       'name': item
    //     })
    //   })
    //   return b
    // }
  }
}
</script>

<style scoped lang='scss'>
.root {
  margin: 0 20px;
  padding: 20px;
  min-width: 1159px;
  background-color: #fff;
  ::v-deep .el-button {
    padding: unset;
    width: 80px;
    height: 36px;
  }
}
</style>
