<template>
  <div class="article">
    <div class="container">
      <article class="content markdown-body" v-html="compiledMarkdown"></article>
      <div class="aside">
        <div class="aside-article">
          <p class="title"><span>相关文章</span></p>
          <ul>
            <li>
              <span><nuxt-link to="">实现基于Nuxt.js的SSR应用</nuxt-link></span>
              <p>sky-cloud前端团队</p>
            </li>
            <li>
              <span><nuxt-link to="#">实现基于Nuxt.js的SSR应用</nuxt-link></span>
              <p>sky-cloud前端团队</p>
            </li>
            <li>
              <span><nuxt-link to="#">实现基于Nuxt.js的SSR应用</nuxt-link></span>
              <p>sky-cloud前端团队</p>
            </li>
          </ul>
        </div>
        <div class="aside-tag">
          <p class="title"><span>标签</span></p>
          <ul>
            <li v-for="item in 10" v-bind:key="item.key">
              <nuxt-link to="">
                  <span>item</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import marked from "~/plugins/marked";
import axios from "~/plugins/axios";

export default {
  validate({ params }) {
    return params.id && !isNaN(Number(params.id));
  },
  async asyncData({ params, error }) {
    try {
      let result = await axios.get(`/article/${params.id}`);
      return {
        article: result.data.article,
        articles: result.data.articles
      };
    } catch (err) {
      error({ statusCode: 404 });
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.article.content);
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
.article {
  margin-top: 60px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  .content {
    padding: 10px 45px;
    flex: 3;
  }
  .aside {
    margin-top: 30px;
    flex: 1;
    .title {
      border-bottom: 1px solid #dddfe2;
      padding-bottom: 20px;
      width: 100%;
      span {
        border-left: 3px solid #4a90e2;
        padding-left: 10px;
        font-size: 20px;
        color: #666;
      }
    }
    .aside-article {
      ul {
        margin-top: 20px;
        li {
          line-height: 1.5;
          margin-bottom: 15px;
          span {
            a {
              color: #212121;
              font-size: 16px;
            }
          }
          p {
            color: #999;
            font-size: 14px;
          }
        }
      }
    }
    .aside-tag {
      margin-top: 50px;
      ul {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        li {
          display: inline-block;
          background: #f7f7f7;
          border: 1px solid #dddfe2;
          margin: 5px;
          a {
            color: #666;
            padding: 15px;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
