<template>
  <div class="container">
      <div class="personal">
        <h1>发表过的文章</h1>
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
                      <span>{{ article.author }}</span>
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
                      <span>{{ article.meta.comments }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  data() {
    return {
      userName: '',
      articles: []
    }
  },
  methods: {
    getLogin(){
      const cookies = decodeURIComponent(document.cookie);
      if(cookies) {
        const arr = cookies.split("; ");
        arr.forEach((item) => {
          const Arr = item.split("=");
          if(Arr[0].trim() == "login" && Arr[1]){
            this.userName = JSON.parse(Arr[1]).name;
          }
        })
      }
    },
    init() {
      axios.post("/article/author", {name: this.userName}).then(res => {
        // console.log(res);
        this.articles = res.data.data
      })
    }
  },
  mounted() {
    this.getLogin();
    this.init();
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins.scss";

  .personal {
    margin: 80px 0 0 105px;
    width: 80%;
    h1 {
      text-align: center;
    }
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
    }
  }
  }
</style>
