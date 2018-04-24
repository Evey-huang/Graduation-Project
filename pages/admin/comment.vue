<template>
  <div class="tags-container">
    <div class="header">
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="getListComments"><i class="icon el-icon-refresh"></i></span>
    </div>
    <el-table :data="commentsList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="postID" label="评论文章" show-overflow-tooltip></el-table-column>
      <el-table-column prop="content" label="评论内容" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delComments(scope.row)">删除</el-button>
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
      commentsList: [], // 评论列表
    }
  },
  methods: {
    // 获取评论列表
    getListComments() {
      axios.get(`/comment`,{}).then(res => {
        this.commentsList = res.data.comments
      })
    },
    // 删除评论
    delComments(row) {
      axios.delete(`/comment/${row._id}`, {}).then(res => {
        this.$message({
          message: `评论删除成功`,
          type: 'success'
        })
        this.getListComments()
      })
    }
  },
  mounted(){
    this.getListComments();
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
