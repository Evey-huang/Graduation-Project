<template>
  <div class="aside-wrapper">
      <div class="article-wrap" v-if="data === 'article'">
          <p>this is article page</p>
      </div>
      <div class="tag-wrap" v-if="data === 'tag'">
          <p>this is tag page</p>
      </div>
      <div class="client-wrap" v-if="data === 'client'">
          <p>this is client page</p>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          data: this.$route.query.type
      }
  }
}
</script>

<style lang="scss" scoped>
  .aside-wrapper {
      margin-top: 100px;
      p {
          font-size: 24px;
      }
  }
</style>
