<template>
  <div class="article-wrapper">
    <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="文章" width="120">
        <template slot-scope="scope">{{ scope.row.article }}</template>
      </el-table-column>
      <el-table-column prop="tag" label="标签" show-overflow-tooltip></el-table-column>
      <el-table-column prop="date" label="创建时间" show-overflow-tooltip sortable></el-table-column>
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
        article: '文章标题一',
        date: '2016-05-03',
        tag: 'Node.js'
      }, {
        article: '文章标题二',
        date: '2016-06-03',
        tag: 'JavaScript'
      }, {
        article: '文章标题三',
        date: '2016-05-17',
        tag: 'HTML'
      }, {
        article: '文章标题四',
        date: '2016-05-22',
        tag: 'CSS'
      }, {
        article: '文章标题五',
        date: '2016-09-03',
        tag: 'MongoDB'
      }, {
        article: '文章标题六',
        date: '2016-10-03',
        tag: 'c++'
      }, {
        article: '文章标题七',
        date: '2016-01-03',
        tag: '产品发布'
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
  .article-wrapper {
    margin-right: 100px;
  }
</style>

