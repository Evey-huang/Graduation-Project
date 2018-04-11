<template>
  <el-row class="app-wrapper">
    <el-col :span="3">
      <el-menu default-active="1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">
          <nuxt-link tag="span" slot="title" to="/admin"><i class="el-icon-menu"/>首页</nuxt-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <span><i class="el-icon-location"/>文章设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <nuxt-link tag="span" to="/admin/article/editor">
                <i class="el-icon-edit-outline"/>撰写文章
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <nuxt-link tag="span" to="/admin/tags">
                <i class="el-icon-news"/>标签管理
              </nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <nuxt-link tag="span" to="/admin/article">
                <i class="el-icon-tickets"/>全部文章
              </nuxt-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <nuxt-link tag="span" slot="title" to="/admin/client">
            <i class="el-icon-service"/>客户管理
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="4">
          <nuxt-link tag="span" slot="title" to="">
            <i class="el-icon-setting"/>站点设置
          </nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21" class="main">
      <nuxt-child/>
    </el-col>
  </el-row>
</template>
<script>
import "~/plugins/element-ui.js";
import "element-ui/lib/theme-chalk/index.css";
export default {
  layout: "admin"
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";
.app-wrapper {
  .el-menu {
    height: 100vh;
    .el-menu-item,
    .el-submenu {
      min-width: 100%;
      span {
        display: block;
        width: 100%;
        height: 100%;
        i {
          color: inherit;
        }
      }
    }
  }
  .el-col {
    height: 100vh;
    overflow-y: scroll;
  }
  .main {
    padding: 10px !important;
  }
}
</style>
