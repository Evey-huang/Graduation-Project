<template>
  <div class="article-container">
    <div class="header">
      <el-input class="search" placeholder="请输入内容"></el-input>
      <span @click="getListArticles"><i class="icon el-icon-refresh"></i></span>
    </div>
    <el-table :data="articleList" tooltip-effect="dark" style="width: 98%">
      <el-table-column width="55"></el-table-column>
      <el-table-column label="标题" width="120">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column prop="tag" label="标签"></el-table-column>
      <el-table-column prop="keywords" label="关键字"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="createAt" label="创建时间" sortable>
        <!-- <template slot-scope="scope">
          {{scope.row.cratedAt | toYMD}}
        </template> -->
      </el-table-column>
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
      articleList: [], // 文章列表
    }
  },
  methods: {
    // 获取文章列表
    getListArticles() {
      axios.get("/article", {}).then(res => {
        console.log(res)
        this.articleList = res.data.data.articles
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
