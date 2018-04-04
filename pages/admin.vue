<template>
  <div class="app-wrapper">
    <nav class="left">
      <nuxt-link to="tags">标签管理</nuxt-link>
      <nuxt-link to="articles">文章管理</nuxt-link>
      <nuxt-link to="client">客户管理</nuxt-link>
    </nav>
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
  .app-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    .left {
      background: #212121;
      width: 180px;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      ul {
        text-align: center;
        margin-top: 50px;
        li {

          a {
            display: block;
            padding: 20px;
          }
        }
      }
    }
    .right {
      float: left;
      margin-left: 200px;
    }
  }
</style>
