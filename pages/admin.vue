<template>
  <div class="app-wrapper">
    <!-- <nav class="left">
      <nuxt-link to="/admin/article">文章管理</nuxt-link>
      <nuxt-link to="/admin/tags">标签管理</nuxt-link>
      <nuxt-link to="/admin/client">客户管理</nuxt-link>
    </nav> -->
    <div class="left">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><nuxt-link to="/admin">首页</nuxt-link></span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">撰写文章</el-menu-item>
                <el-menu-item index="1-2"><nuxt-link to="/admin/tags">标签管理</nuxt-link></el-menu-item>
                <el-menu-item index="1-2"><nuxt-link to="/admin/article">全部文章</nuxt-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><nuxt-link to="/admin/client">客户管理</nuxt-link></span>
            </el-menu-item>
            <!-- <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title"><nuxt-link to="">站点设置</nuxt-link></span>
            </el-menu-item> -->
          </el-menu>
        </el-col>
      </el-row>
    </div>
    
    <div class="right">
      <nuxt-child/>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/mixins.scss';

  .app-wrapper {
    .left {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      background: #545c64;
      .el-col {
        width: 100%;
        .el-menu-item-group {
          .el-menu-item {
            min-width: 0;
          }
        }
      }
    }
    .right {
      float: left;
      margin: 50px 0 0 200px;
      width: 100%;
    }
  }
</style>
