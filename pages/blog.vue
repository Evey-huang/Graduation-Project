<template>
  <div class="blog">
      <div class="container">
          <div class="article-list">
              <div class="article-list-item">
                  <div class="item-content">
                      <div class="item-thumb">
                          <nuxt-link to="#"><img src="~/assets/images/blog1.png" alt="文章插图"></nuxt-link>
                      </div>
                      <div class="item-body">
                          <h4><nuxt-link to="#">怎样才能高效的完成所有的事情</nuxt-link></h4>
                          <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这</p>
                          <div class="item-meta">
                              <span class="date">
                                  <i class="iconfont icon-shijian"></i>
                                  <span>2018/3/30</span>
                              </span>
                              <span class="views">
                                  <i class="iconfont icon-yanjing"></i>
                                  <span>30</span>
                              </span>
                              <span class="likes">
                                  <i class="iconfont icon-xihuan"></i>
                                  <span>233</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
               <div class="article-list-item">
                  <div class="item-content">
                      <div class="item-thumb">
                          <nuxt-link to="#"><img src="~/assets/images/blog2.png" alt="文章插图"></nuxt-link>
                      </div>
                      <div class="item-body">
                          <h4><nuxt-link to="#">怎样才能高效的完成所有的事情</nuxt-link></h4>
                          <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这</p>
                          <div class="item-meta">
                              <span class="date">
                                  <i class="iconfont icon-shijian"></i>
                                  <span>2018/3/30</span>
                              </span>
                              <span class="views">
                                  <i class="iconfont icon-yanjing"></i>
                                  <span>30</span>
                              </span>
                              <span class="likes">
                                  <i class="iconfont icon-xihuan"></i>
                                  <span>233</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
               <div class="article-list-item">
                  <div class="item-content">
                      <div class="item-thumb">
                          <nuxt-link to="#"><img src="~/assets/images/blog1.png" alt="文章插图"></nuxt-link>
                      </div>
                      <div class="item-body">
                          <h4><nuxt-link to="#">怎样才能高效的完成所有的事情</nuxt-link></h4>
                          <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这</p>
                          <div class="item-meta">
                              <span class="date">
                                  <i class="iconfont icon-shijian"></i>
                                  <span>2018/3/30</span>
                              </span>
                              <span class="views">
                                  <i class="iconfont icon-yanjing"></i>
                                  <span>30</span>
                              </span>
                              <span class="likes">
                                  <i class="iconfont icon-xihuan"></i>
                                  <span>233</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
               <div class="article-list-item">
                  <div class="item-content">
                      <div class="item-thumb">
                          <nuxt-link to="#"><img src="~/assets/images/blog2.png" alt="文章插图"></nuxt-link>
                      </div>
                      <div class="item-body">
                          <h4><nuxt-link to="#">怎样才能高效的完成所有的事情</nuxt-link></h4>
                          <p>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这</p>
                          <div class="item-meta">
                              <span class="date">
                                  <i class="iconfont icon-shijian"></i>
                                  <span>2018/3/30</span>
                              </span>
                              <span class="views">
                                  <i class="iconfont icon-yanjing"></i>
                                  <span>30</span>
                              </span>
                              <span class="likes">
                                  <i class="iconfont icon-xihuan"></i>
                                  <span>233</span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="aside">
              <div class="aside-article">
                  <p class="title"><span>最热文章</span></p>
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
                      <li v-for="item in data" v-bind:key="item.key">
                          <nuxt-link to="">
                              <span v-html="item.text" :style="{'font-size': item.num>150?'36px':item.num>100?'28px':item.num>50?'20px':item.num>20?'18px':'14px'}"></span>
                          </nuxt-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data(){
      return {
          data: [
              {text: "node.js",num: 10,key: 1},
              {text: "MongoDB",num: 20,key: 2},
              {text: "云安全",num: 30,key: 3},
              {text: "运维",num: 40,key: 4},
              {text: "数据库",num: 70,key: 5},
              {text: "新产品发布",num: 50,key: 6},
              {text: "Docker",num: 150,key: 7}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins.scss';

  .blog {
    margin-top: 120px;
    margin-left: 80px;
    .container {
        @include clearfix;
        .article-list {
            min-width: 60%;
            float: left;
            margin-left: 40px;
            .article-list-item {
                border-bottom: 1px solid #DDDFE2;
                .item-content {
                    margin-bottom: 50px;
                    position: relative;
                    .item-thumb {
                        margin-top: 50px;
                    }
                    .item-body {
                        position: absolute;
                        top: 0;
                        left: 170px;
                        margin-left: 10px;
                        h4 {
                            margin: 0;
                            a {
                                color: #3E464C;
                            }
                        }
                        p {
                            margin-top: 10px;
                        }
                        .item-meta {
                            position: absolute;
                            top: 100px;
                            span {
                                font-size: 14px;
                                margin-right: 20px;
                            }
                        }
                    }
                }
            }
        }
        .aside {
            float: right;
            margin-top: 50px;
            margin-right: 40px;
            width: 20%;
            .title {
                border-bottom: 1px solid #DDDFE2;
                padding-bottom: 20px; 
                width: 100%;
                span {
                    border-left: 3px solid #4A90E2;
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
                        background: #F7F7F7;
                        border: 1px solid #DDDFE2;
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
  }
</style>
