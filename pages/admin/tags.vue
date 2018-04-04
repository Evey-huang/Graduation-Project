<template>
  <div class="tags-container">
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">{{ scope.row.tag }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column prop="number" label="文章" show-overflow-tooltip sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">新建</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [{
        tag: 'Node.js',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: 'JavaScript',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: 'HTML',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: 'CSS',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: 'MongoDB',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: 'c++',
        number: 11,
        description: '描述描述描述'
      }, {
        tag: '产品发布',
        number: 11,
        description: '描述描述描述'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags-container {
  }
</style>
