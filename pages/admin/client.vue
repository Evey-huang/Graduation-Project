<template>
  <div class="client-container">
    <div class="header">
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="getListClients"><i class="icon el-icon-refresh"></i></span>
    </div>
    <el-table :data="clientList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="用户名" width="120">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editClient(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delClient(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑用户信息" :visible.sync="clientDialog.isShow" width="20%" center>
      <el-form :model="clients">
        <el-form-item label="用户名">
          <el-input v-model="clients.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="clients.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeClientDialog">取 消</el-button>
        <el-button type="primary" @click="commitUpdateClient">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data() {
    return {
      clientList: [], // 用户列表
      clientDialog: {
        isShow: false
      },
      clients: {
        name: '',
        // phone: '',
        password: ''
      }
    }
  },
  methods: {
    // 获取客户联系列表
    getListClients() {
      axios.get("/client", {}).then(res => {
        this.clientList = res.data.data.clients
      })
    },
    // 编辑用户信息
    editClient(row) {
      this.clients = {
        id: row._id,
        name: row.name,
        password: row.password
      }
      this.clientDialog.isShow = true
    },
    // 删除用户信息
    delClient(row) {
      axios.delete(`/client/${row._id}`, {}).then(res => {
        this.$message({
          message: `用户 ${row.name} 信息删除成功`,
          type: 'success'
        })
        this.getListClients()
      })
    },
    // 提交用户信息
    commitUpdateClient() {
      let params = {
        name: this.clients.name,
        password: this.clients.password
      }
      axios.put(`/client/${this.clients.id}`, params).then(res => {
        this.$message({
          message: `用户 ${this.clients.name} 更新成功`,
          type: 'success'
        })
        this.clientDialog.isShow = false
        this.getListClients()
      })
    },
    // 关闭弹窗
    closeClientDialog() {
      this.clientDialog.isShow = false
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
