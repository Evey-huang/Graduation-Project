<template>
  <div class="app-wrapper">
    <div class="left">
      <ul>
        <li v-for="item in data" :key="item.path">
          <nuxt-link  v-html="item.text" :to="{path: '/admin/app/'+item.id,query: {type: item.type}}"></nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <nuxt-child/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      data: [
        {
          text: "文章管理",
          path: "/admin/app/",
          id: 1,
          type: 'article'
        },
        {
          text: "标签管理",
          path: "/admin/app/",
          id: 2,
          type: 'tag'
        },
        {
          text: "客户管理",
          path: "/admin/app/",
          id: 3,
          type: 'client'
        }
      ]
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
