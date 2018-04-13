<template>
  <div class="article">
    <div class="container">
      <div class="content">
        <h2 class="title">{{article.title}}</h2>
        <p class="title-meta">
          <span class="time"> {{article.createAt | toYMD}}</span> | 
          <span class="views"><i class="iconfont icon-yanjing"></i>阅读 {{article.meta.views}} 次</span> |
          <span><i class="iconfont icon-xihuan"></i>喜欢 {{article.meta.likes}} 次</span>
        </p>
        <article class="markdown-body" v-html="compiledMarkdown"></article>
        <div class="metas">
          <p class="item">相关标签:
            <nuxt-link v-for="(tag, index) in article.tag"  :key="index" :to="`/blog?tag=${tag.name}`">
              <span>{{tag.name}}</span>
              <span v-if="article.tag.length != index + 1">、</span>
            </nuxt-link>
          </p>
        </div>
      </div>
      <div class="aside">
        <div class="aside-article">
            <p class="title"><span>相关文章</span></p>
            <ul>
              <li v-for="(article, index) in articles" :key="index">
                <span><nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link></span>
                <p>sky-cloud前端团队</p>
              </li>
            </ul>
        </div>
        <div class="aside-tag">
          <p class="title"><span>标签</span></p>
          <ul>
            <li v-for="tag in tags" :key="tag._id">
              <nuxt-link :to="`/blog?tag=${tag.name}`">{{tag.name}} ({{tag.articleTotal}})</nuxt-link>
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
      let tags = await axios.get("/tag");
      let result = await axios.get(`/article/${params.id}`);
      return {
        article: result.data.article,
        articles: result.data.articles
          .filter(article => article._id != result.data.article._id)
          .slice(0, 5),
        tags: tags.data.tags
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
@import "~assets/scss/mixins.scss";
.article {
  margin-top: 60px;
  .container {
    display: flex;
    justify-content: space-between;
    .content {
      padding: 10px 45px;
      flex: 3;
      .metas {
        margin: 30px 0;
        line-height: 2;
        .item {
          color: rgb(85, 85, 85);
          a {
            color: rgb(85, 85, 85);
            padding: 5px 7px;
            background: #f5f5f5;
            @include transition();
            &:hover {
              background: #999;
            }
          }
        }
      }
      .title {
        text-align: center;
      }
      .title-meta {
        text-align: center;
        display: block;
        font-size: 14px;
        color: #909090;
        margin-bottom: 30px;
        i {
          padding-right: 5px;
        }
      }
      .markdown-body {
        ul li {
          list-style: inherit;
        }
      }
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
            font-size: 14px;
            a {
              color: #666;
              padding: 5px;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}

/*-----start-responsive-design------*/

@media screen and (max-width: 768px) {
  .article .content {
    padding: 10px 20px;
  }
}

@media screen and (max-width: 640px) {
  .article {
    .container {
      flex-wrap: wrap;
      .content {
        padding: 10px;
        flex-basis: 100%;
      }
      .aside {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        .aside-article,
        .aside-tag {
          flex: 1;
          margin: 0 15px;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .article {
    .container {
      .aside {
        margin-top: 0px;
        display: block;
        .aside-article,
        .aside-tag {
          margin: 0;
        }
      }
    }
  }
}
</style>
