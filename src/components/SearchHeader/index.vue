<template>
  <div class="root">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="height:100%;padding-left:10px;">
      <el-form-item :label="title+':'">
        <el-input v-model="formInline.user" placeholder="请输入" />
      </el-form-item>
      <el-form-item v-if="select" :label="select+':'">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option v-for="item,index in list" :key="index" :label="item.name" value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: ''
    },
    // eslint-disable-next-line
    list: {
      type: Array
    },
    title: {
      type: String,
      default: '管理'
    }
  },
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="scss">
.root {
  margin: 20px;
  padding-left: 10px;
  min-width: 1159px;
  height: 64px;
  line-height: 64px;
  background-color: #fff;
 ::v-deep .el-form-item__content {
    vertical-align:middle;
  }
  ::v-deep .el-form-item__label {
      font-weight: 400;
  }
  ::v-deep .el-form-item {
    margin-bottom: 0 10px;
  }
  ::v-deep .el-input__inner {
    width: 206px;
    height: 36px;
  }
  ::v-deep .el-button {
    padding: 10px 20px;
  }
}
</style>
