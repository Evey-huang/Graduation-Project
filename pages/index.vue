<template>
  <div class="blog">
      <div class="container">
        <div class="article-list">
          <div class="article-list-item" v-for="(article, index) in articles" :key="index">
            <div class="item-content">
              <div class="item-thumb">
                <nuxt-link :to="`/article/${article.id}`">
                  <img :src="article.thumb" :alt="article.title">
                </nuxt-link>
              </div>
              <div class="item-body">
                <h4><nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link></h4>
                <p>{{article.description}}</p>
                <div class="item-meta">
                  <span class="author">
                    <i class="iconfont icon-people"></i>
                    <span>Evey</span>
                  </span>
                  <span class="date">
                    <i class="iconfont icon-shijian"></i>
                    <span>{{article.updateAt | toLocalString}}</span>
                  </span>
                  <span class="views">
                    <i class="iconfont icon-yanjing"></i>
                    <span>{{article.meta.views}}</span>
                  </span>
                  <span class="likes">
                    <i class="iconfont icon-xihuan"></i>
                    <span>{{article.meta.likes}}</span>
                  </span>
                  <span class="comment">
                    <i class="iconfont icon-comment"></i>
                    <span>{{ commentsCount }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="load-more" @click="getArticles(true)" v-if="currentPage < pages">加载更多</div>
          <div class="load-more" v-else> 没有更多了</div>
        </div>
        <div class="aside">
            <div class="aside-article">
              <p class="title"><span>最热文章</span></p>
              <ul>
                <li v-for="(article, index) in hot" :key="index">
                  <span><nuxt-link :to="`/article/${article.id}`">{{article.title}}</nuxt-link></span>
                  <p>sky-cloud前端团队</p>
                </li>
              </ul>
            </div>
            <div class="aside-tag">
              <p class="title"><span>标签</span></p>
              <ul>
                <li v-for="tag in tags" :key="tag._id">
                  <nuxt-link :to="`?tag=${tag.name}`">{{tag.name}} ({{tag.articleTotal}})</nuxt-link>
                </li>
              </ul>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async asyncData({ query }) {
    let tags = await axios.get("/tag");
    let tag;
    if (query.tag) {
      tag = tags.data.tags.find(tag => tag.name == query.tag)._id;
    }
    let articles = await axios.get(`/article${tag ? "?tag=" + tag : ""}`);
    let hot = await axios.get("/article?currentPage=1&pageSize=5&hot=true");
    return {
      tags: tags.data.tags,
      articles: articles.data.articles,
      pages: articles.data.pages,
      currentPage: articles.data.currentPage,
      pageSize: articles.data.pageSize,
      hot: hot.data.articles
    };
  },
  async beforeRouteUpdate(to, from, next) {
    this.articles = [];
    await this.getArticles(false, to.query.tag);
    next();
  },
  data() {
    return {
      commentsCount: '',
      article: []
    }
  },
  //postID: this.article.id
  methods: {
    // 获取评论数
    getListComments() {
      axios.get("/comment", {params: {}}).then(res => {
        this.commentsCount = res.data.comments.length
      })
    },
    async getArticles(flag, TagName) {
      if (flag) {
        TagName = this.$route.query.tag;
        this.currentPage += 1;
      } else {
        this.currentPage = 1;
      }
      let tag;
      if (TagName) {
        tag = this.tags.find(tag => tag.name == TagName)._id;
      }
      return await axios
        .get(
          `/article?currentPage=${this.currentPage}&pageSize=${this.pageSize}${
            tag ? "&tag=" + tag : ""
          }`
        )
        .then(res => {
          this.articles = this.articles.concat(res.data.articles);
          this.pages = res.data.pages;
          this.currentPage =
            res.data.currentPage < res.data.pages
              ? res.data.currentPage
              : res.data.pages;
          this.pageSize = res.data.pageSize;
        });
    }
  },
  mounted() {
    this.getListComments()
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";

.blog {
  margin-top: 60px;
  .container {
    @include clearfix;
    display: flex;
    justify-content: space-between;
    .article-list {
      margin: 15px 30px;
      flex: 3;
      .article-list-item {
        background: #fff;
        margin-top: 10px;
        padding: 10px 0 10px 10px;
        &:first-child {
          margin-top: 0;
        }
        .item-content {
          display: flex;
          align-items: stretch;
          .item-thumb {
            width: 168px;
            height: 120px;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
              transform: rotate(0deg) scale(1);
              transition: transform 1s;
              &:hover {
                transform: rotate(2deg) scale(1.1);
              }
            }
          }
          .item-body {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            flex: 1;
            h4 {
              flex: 1;
              margin: 0;
              font-size: 18px;
              a {
                color: #3e464c;
              }
            }
            p {
              flex: 3;
              margin-top: 10px;
            }
            .item-meta {
              text-align: left;
              flex: 1;
              .iconfont {
                margin-right: 4px;
                vertical-align: middle;
              }
              span {
                font-size: 14px;
                margin-right: 20px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .load-more {
        cursor: pointer;
        text-align: center;
        margin-top: 10px;
        padding: 15px;
        background: #fff;
        &:hover {
          background: rgba(0, 0, 0, 0.05);
          @include transition();
        }
      }
    }
    .aside {
      margin-top: 15px;
      flex: 1;
      .title {
        border-bottom: 1px solid #dddfe2;
        padding: 10px 0 10px 10px;
        width: 96%;
        span {
          border-left: 3px solid #4a90e2;
          padding-left: 10px;
          font-size: 20px;
          color: #666;
        }
      }
      .aside-article {
        background: #fff;
        ul {
          margin-top: 15px;
          padding-left: 20px;
          li {
            line-height: 1.5;
            padding-bottom: 15px;
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
        margin-top: 15px;
        background: #fff;
        ul {
          margin-top: 10px;
          padding: 0 0 15px 5px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          li {
            display: inline-block;
            background: #f7f7f7;
            border: 1px solid #dddfe2;
            margin: 5px;
            font-size: 14px;
            @include border-radius(4px);
            &:hover {
              background: #1A88FA;
              @include opacity(0.9);
            }
            a {
              color: #666;
              padding: 7px;
              display: inline-block;
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}

/*-----start-responsive-design------*/

@media screen and (max-width: 768px) {
  .blog .article-list {
    padding: 10px 20px;
  }
}

@media screen and (max-width: 640px) {
  .blog {
    .container {
      flex-wrap: wrap;
      .article-list {
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
  .blog {
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
