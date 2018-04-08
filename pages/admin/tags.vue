<template>
  <div class="tags-container">
    <div class="header">
      <p class="title">标签管理</p>
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="handleNew"><i class="icon el-icon-plus"></i></span>
      <span><i class="icon el-icon-refresh"></i></span>
      <el-dialog title="添加标签" :visible.sync="tagDialog.isShow" width="20%" center>
        <el-form :model="tags">
          <el-form-item label="名称">
            <el-input v-model="tags.name" placeholder="请输入标签名称"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="tags.description" placeholder="请输入标签描述"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeTagDialog">取 消</el-button>
          <el-button type="primary" @click="commitUpdateTag">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table :data="tagData" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">{{ scope.row.tag }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column prop="number" label="文章" show-overflow-tooltip sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data() {
    return {
      tagData: [{
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
      tags: { // 标签信息
        name: '',
        description: ''
      },
      tagDialog: { // 标签弹窗
        isShow: false,
        add: false,
        edit: false
      }
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 关闭Dialog窗口
    closeTagDialog() {
      this.tagDialog = {
        add: false,
        edit: false,
        isShow: false
      }
    },
    // 添加标签
    handleNew() {
      this.closeTagDialog()
      this.tags = {
        name: '',
        description: ''
      }
      this.tagDialog.add = true
      this.tagDialog.isShow = true
    },
    // 编辑修改标签
    handleEdit() {

    },
    // 删除标签
    handleDelete() {

    },
    // 提交
    commitUpdateTag() {
      let params = {
        name: this.tags.name,
        description: this.tags.description
      }
      axios.post("/tag", params).then(res => {
        console.log(res)
      })
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
