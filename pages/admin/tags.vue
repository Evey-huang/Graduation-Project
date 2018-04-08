<template>
  <div class="tags-container">
    <div class="header">
      <p class="title">标签管理</p>
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="tagDialog = true"><i class="icon el-icon-plus"></i></span>
      <span><i class="icon el-icon-refresh"></i></span>
      <el-dialog title="添加标签" :visible.sync="tagDialog" width="20%" :before-close="handleClose" center>
        <el-form :model="form">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="tagDialog = false">取 消</el-button>
          <el-button type="primary" @click="tagDialog = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table :data="tableData3" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">{{ scope.row.tag }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column prop="number" label="文章" show-overflow-tooltip sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
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
      tagDialog: false,
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
      multipleSelection: [],
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags-container {
    .header {
      margin-bottom: 30px;
      .title {
        margin-bottom: 15px;
      }
      .search {
        width: 83%;
      }
      span {
        padding-left: 10px;
        i {
          font-size: 20px;
          color: #409EFF;
        }
      }
    }
  }
</style>
