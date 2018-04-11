<template>
  <div class="article-container">
    <header>
      <el-input v-model="search" class="search" placeholder="请输入内容" @change="handleSearch">
      </el-input>
      <span @click="getListArticles"><i class="icon el-icon-refresh"></i></span>
    </header>
    <el-table :data="articleList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="标题" width="250">
        <template slot-scope="scope">
          <nuxt-link class="link" :to="`article/editor?articleId=${scope.row.id}`">{{scope.row.title}}</nuxt-link>
        </template>
      </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <div v-html="getInner(scope.row.tag)"></div>
        </template>
      </el-table-column>
      <el-table-column prop="keywords" label="关键字"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="createAt" label="创建时间" sortable>
        <template slot-scope="scope">{{ scope.row.createAt | toLocalString }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="delArticle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer class="pagination-footer">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
    </footer>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data() {
    return {
      articleList: [], // 文章列表
      pagination: {
        currentPage: 4,
        pageSize: 5,
        total: 0
      },
      search: ''
    }
  },
  methods: {
    // 获取标签
    getInner(list){
      var str = "";
      list.forEach(item => {
        str += `<span>${item.name}</span>`
      });
      return str;
    },
    // 获取文章列表
    getListArticles() {
      axios.get("/article", {currentPage: this.pagination.currentPage, pageSize: this.pagination.pageSize}).then(res => {
        this.articleList = res.data.articles
        this.pagination.total = res.data.total
      })
    },
    // 删除文章
    delArticle(row) {
      axios.delete(`/article/${row._id}`, {}).then(res => {
        this.$message({
          message: `文章 ${row.title} 删除成功`,
          type: 'success'
        })
        this.getListArticles()
      })
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.getListArticles()
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.getListArticles()
    },
    // 搜索文章
    handleSearch() {
      axios.get( `/article?keyword=${this.search}`).then(res => {
        // console.log(res)
        this.articleList = res.data.articles
      })
    }
  },
  mounted () {
    this.getListArticles()
  }
}
</script>

<style lang="scss" scoped>
  .article-container {
    margin-left: 25px;
    header {
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
    table {
      .link {
        color: #606266;
      }
    }
    .pagination-footer {
      height: 40px;
      width: 100%;
      padding-right: 1em;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
