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
              <div class="aside-article"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss" scoped>
  .blog {
    margin-top: 120px;
    margin-left: 80px;
    .container {
        .article-list {
            width: 60%;
            // background: #666;
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

        }
    }
  }
</style>
