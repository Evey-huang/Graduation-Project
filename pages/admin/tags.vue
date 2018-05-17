<template>
  <div class="tags-container">
    <div class="header">
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="handleNew"><i class="icon el-icon-plus"></i></span>
      <span @click="getListTags"><i class="icon el-icon-refresh"></i></span>
      <el-dialog :title="tagDialog.add ? '添加标签' : '修改标签'" :visible.sync="tagDialog.isShow" width="20%" center>
        <el-form :model="tags" :rules="tagRules">
          <el-form-item label="名称" prop="name">
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
    <el-table :data="tagsList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column prop="articleTotal" label="文章" show-overflow-tooltip sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateTag(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delTag(scope.row)">删除</el-button>
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
      tagsList: [], // 标签列表
      tags: { // 标签信息
        name: '',
        description: ''
      },
      tagDialog: { // 标签弹窗
        isShow: false,
        add: false,
        edit: false
      },
      // 表单校验
      tagRules: {
        name: [
          { required: true, message: '请输入标签名', trigger: 'blur' },
          { max: 10, message: '标签名最多为10个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 获取标签列表
    getListTags() {
      axios.get("/tag", {}).then(res => {
        this.tagsList = res.data.tags
      })
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
    updateTag(row) {
      this.closeTagDialog()
      this.tags = {
        id: row._id,
        name: row.name,
        description: row.description
      }
      this.tagDialog.edit = true
      this.tagDialog.isShow = true
    },
    // 删除标签
    delTag(row) {
      this.tags = {
        id: row._id
      }
      row._id = this.tags.id
      axios.delete(`/tag/${this.tags.id}`, {}).then(res => {
        this.$message({
          message: `标签 ${row.name} 删除成功`,
          type: 'success'
        })
        this.getListTags()
      })
    },
    // 提交
    commitUpdateTag() {
      let params = {
        name: this.tags.name,
        description: this.tags.description
      }
      if(this.tagDialog.add) {
        axios.post("/tag", params).then(res => {
          this.getListTags()
          this.closeTagDialog()
          this.$message({
            message: `标签 ${this.tags.name} 添加成功`,
            type: 'success'
          })
        })
      }
      if(this.tagDialog.edit) {
        axios.put(`/tag/${this.tags.id}`, params).then(res => {
          this.getListTags()
          this.closeTagDialog()
          this.$message({
            message: `标签 ${this.tags.name} 更新成功`,
            type: 'success'
          })
        })
      }
    }
  },
  mounted () {
    this.getListTags()
  }
}
</script>

<style lang="scss" scoped>
  .tags-container {
    margin-left: 25px;
    .header {
      margin: 30px 0;
      .title {
        margin-bottom: 15px;
      }
      .search {
        width: 93%;
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
