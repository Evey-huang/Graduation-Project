<template>
  <div class="article">
    <div class="container">
      <div class="content">
        <h2 class="title">{{article.title}}</h2>
        <p class="title-meta">
          <span class="author">{{ article.author }}</span> |
          <span class="time"> {{ article.createAt | toYMD }}</span> | 
          <span class="views"><i class="iconfont icon-yanjing"></i>阅读 {{ article.meta.views }} 次</span> |
          <span><i class="iconfont icon-xihuan" @click.once="like()"></i>喜欢 {{ article.meta.likes }} 次</span>
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
        <!-- 登录后的评论框 -->
        <div class="comment-box" v-show="commentShow">
          <!-- <div class="pull-left"><img src="~/assets/images/comment-avatar.png" alt="评论头像"></div> -->
          <div class="comment-form">
            <el-form :model="commentForm">
              <el-form-item>
                <el-input type="textarea" v-model="commentForm.comment" placeholder="说说你的想法"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">评论</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- 评论列表 -->
        <div class="comment-list" v-show="commentShow">
          <ul>
            <li class="item" v-for="comment in commentsList" :key="comment.id">
              <div class="comment-img">
                <img src="~/assets/images/comment-avatar.png" alt="评论头像">
              </div>
              <div class="comment-content">
                <p class="title">{{ comment.name }}</p>
                <p>{{ comment.content }}</p>
                <p class="comment-meta">
                  <span><i class="iconfont icon-comment1"></i>评论</span>
                  <span class="time">{{ comment.createAt | toLocalString }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 登录前的评论框 -->
        <div class="comment-box-before" v-show="!commentShow">
          <p class="title">评论</p>
          <div class="box-content">
            <span class="login" @click="handleSignIn">登录</span>
            <span>说说你的想法</span>
          </div>
        </div>
        <!-- 登录弹出窗口 -->
        <el-dialog title="登录" :visible.sync="isShow" width="25%" center>
          <el-form :model="signInForm" :rules="loginRules">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="signInForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="signInForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="signIn">登录</el-button>
          </div>
        </el-dialog>
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
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      if (!/^\w+$/.test(value)) {
        callback(new Error('密码由字母、数字及下划线组成'))
      } else {
        callback()
      }
    };
    return {
      commentForm: {
        comment: ''
      },
      commentsList: [], // 评论列表
      commentShow: false,
      isShow: false,
      userName: "",
      signInForm: {
        name: '',
        password: ''
      },
      // 登录校验
      loginRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 10, message: '用户名最多为10个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { max: 6, message: '密码最多为6个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    like() {
      axios.put(`/like/${this.article.id}`).then(res => {
        this.article.meta.likes++;
      })
    },
    // 获取评论列表
    getListComments() {
      axios.get("/comment", {params: {postID: this.article.id}}).then(res => {
        this.commentsList = res.data.comments
      })
    },
    // 提交评论
    onSubmit() {
      let params = {
        content: this.commentForm.comment,
        name: this.userName,
        postID: this.article.id
      }
      axios.post("/comment", params).then(res => {
        this.commentForm = {
          content: ''
        }
        this.getListComments()
      })
    },
    getLogin(){
      const cookies = decodeURIComponent(document.cookie);
      if(cookies) {
        const arr = cookies.split("; ");
        arr.forEach((item) => {
          const Arr = item.split("=");
          if(Arr[0].trim() == "login" && Arr[1]){
            this.commentShow = true;
            this.userName = JSON.parse(Arr[1]).name;
          }
        })
      }
    },
    handleSignIn() {
      this.isShow = true
    },
    signIn() {
      if(!this.signInForm.name){
        return this.$message({
          message: `请填写用户名`,
          type: 'error'
        })
      } else if(!this.signInForm.password) {
        return this.$message({
          message: `请填写密码`,
          type: 'error'
        })
      } else{
        let params = {
          name: this.signInForm.name,
          password: this.signInForm.password,
          type: 'signin'
        } 
        axios.post("/client", params).then(res => {
          var data = res.data;
          if(data.code == 0){
            this.$message({message: data.message, type: 'success'});
            this.getLogin();
          } else if(data.code == 1){
            this.$message({message: data.message, type: 'error'})
          }
        })
      }
       this.isShow = false
       this.commentShow = true
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.article.content);
    }
  },
  mounted() {
    this.getLogin();
    this.getListComments();
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
      margin: 15px 30px;
      padding: 0 15px;
      flex: 3;
      background: #fff;
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
      .comment-box {
        // .pull-left {
        //   margin-top: 20px;
        //   float: left;
        // }
        .comment-form {
          // float: left;
          // margin: 20px 0 0 20px;
          width: 100%;
        }
      }
      .comment-box-before {
        margin-bottom: 40px;
        .title {
          color: #909090;
          font-size: 18px;
          margin-bottom: 20px;
        }
        .box-content {
          background: #f4f5f5;
          padding: 35px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          .login {
            cursor: pointer;
            color: #007fff;
            border: 1px solid #007fff;
            padding: 8px;
            @include border-radius(4px);
            font-size: 14px;
            margin-right: 20px;
          }
        }
      }
      .comment-list {
        margin-top: 40px;
        float: left;
        .item {
          display: block;
          .comment-img {
            float: left;
          }
          .comment-content {
            margin-left: 15px;
            margin-bottom: 30px;
            .title {
              color: #333;
              text-align: left;
            }
            p {
              margin-top: 10px;
              font-size: 14px;
              width: 800px;
            }
            .comment-meta {
              color: #909090;
              font-size: 14px;
              i {
                padding-right: 5px;
              }
              .time {
                margin-left: 20px;
              }
            }
          }
        }
      }
      .dialog-footer {
        button {
          width: 100%;
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
              padding: 5px;
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
