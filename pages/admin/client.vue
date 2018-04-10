<template>
  <div class="client-container">
    <div class="header">
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="getListClients"><i class="icon el-icon-refresh"></i></span>
    </div>
    <el-table :data="clientList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="company" label="公司"></el-table-column>
      <el-table-column prop="tel" label="固定电话"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="contact" label="是否已联系">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateStatus(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delClient(scope.row)">删除</el-button>
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
      clientList: [], // 客户列表
    }
  },
  methods: {
    // 获取客户联系列表
    getListClients() {
      axios.get("/client", {}).then(res => {
        this.clientList = res.data.data.clients
      })
    },
    // 编辑联系状态
    updateStatus(row) {

    },
    // 删除客户信息
    delClient(row) {
      axios.delete(`/client/${row._id}`, {}).then(res => {
        this.$message({
          message: `客户 ${row.name} 信息删除成功`,
          type: 'success'
        })
        this.getListClients()
      })
    }
  },
  mounted () {
    this.getListClients()
  }
}
</script>

<style lang="scss" scoped>
  .client-container {
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
