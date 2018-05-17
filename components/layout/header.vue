<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo"><h3>WEB</h3></nuxt-link>
      <nav class="nav">
        <ul>
          <li class="item"><nuxt-link class="link" to="/">首页</nuxt-link></li>
          <li class="item"><nuxt-link class="link" to="/events">活动</nuxt-link></li>
          <li class="item"><a class="link" href="https://www.nowcoder.com/recommend" target="_blank">求职</a></li>
          <li class="item search"><Search @search="goSearch"></Search></li>
          <li class="item write" v-show="aritcleShow"><i class="iconfont icon-wenzhang1"></i><nuxt-link to="/write">写文章</nuxt-link></li>
          <li class="item notice" v-show="aritcleShow">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                 <i class="iconfont icon-icon_notice"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="notice-content">通知事件</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li class="item auth" v-show="!aritcleShow">
            <span @click="openSignInDialog" class="signIn" >登录</span>|
            <span @click="openSignUpDialog" class="signUp">注册</span>
          </li>
          <li class="item dropdown" v-show="aritcleShow">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><i class="iconfont icon-combinedshapecopy2"></i><nuxt-link to="/write"> 写文章</nuxt-link></el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-ren"></i><nuxt-link to="/personal"> 我的主页</nuxt-link></el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-logout"></i><span @click="signout"> 退出</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <el-dialog title="登录" :visible.sync="signDialog.signIn" width="25%" center>
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
          <el-dialog title="注册" :visible.sync="signDialog.signUp" width="25%" center>
            <el-form :model="clients" :rules="logoutRules">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="clients.name" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="clients.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="clients.checkPass" placeholder="请再次输入密码"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="signUp">注册</el-button>
            </div>
          </el-dialog>
        </ul>
      </nav>
    </div>
    <div class="visible-xs">
      <span><img :class="['menu-more',{'rotate': isShow}]" @click.stop="showMenu" src="~/assets/images/ic_menu_more2.png"/></span>
      <ul class="dropdown-menu" v-show="isShow">
        <li><nuxt-link class="sub-link" to="/">首页</nuxt-link></li>
        <li><nuxt-link class="sub-link" to="/category">分类</nuxt-link></li>
        <li><a class="link" href="https://www.nowcoder.com/recommend" target="_blank">求职</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import Search from '~/components/common/search.vue'
import axios from '~/plugins/axios'

export default {
  name: 'layout-header',
  components: {
    Search
  },
  data () {
    // 校验规则
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.clients.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      aritcleShow: false,
      isShow: false,
      isOpen: false,
      userName: '',
      signDialog: {
        signIn: false,
        signUp: false
      },
      signInForm: { // 登录
        name: '',
        password: ''
      },
      clients: { // 注册
        name: '',
        password: '',
        checkPass: ''
      },
      // 登录表单校验
      loginRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 10, message: '用户名最多为10个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { max: 10, message: '密码最多为10个字符', trigger: 'blur' }
        ],
      },
      // 注册表单校验
      logoutRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 10, message: '用户名最多为10个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { max: 10, message: '密码最多为10个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    showMenu () {
      this.isShow = !this.isShow
    },
    goSearch (str) {
      this.isOpen = true
    },
    // 打开登录弹窗
    openSignInDialog() {
      this.signDialog.signIn = true
    },
    // 打开注册弹窗
    openSignUpDialog() {
      this.signDialog.signUp = true
    },
    // 保存登录cookie
    getLogin(){
      const cookies = decodeURIComponent(document.cookie);
      if(cookies){
        const arr = cookies.split("; ");
        arr.forEach((item) => {
          const Arr = item.split("=");
          if(Arr[0].trim() == "login" && Arr[1]){
            this.aritcleShow = true;
            this.userName = JSON.parse(Arr[1]).name;
          }
        })
      }
    },
    // 登录
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
       this.signDialog.signIn = false
       this.aritcleShow = true;
    },
    // 注册
    signUp() {
      let params = {
        name: this.clients.name,
        password: this.clients.password,
        checkPass: this.clients.checkPass,
        type: 'signup'
      }
      axios.post("/client", params).then(res => {
        this.clients = {
          name: '',
          password: '',
          checkPass: ''
        }
        var data = res.data;
        if(data.code == 0){
          this.$message({message: '注册成功', type: 'success'});
        } else if(data.code == 1){
          this.$message({message: data.message, type: 'error'})
        }
      })
      this.signDialog.signUp = false
    
    },
    // 退出登录
    signout() {
      axios.post("/signup",{name: this.userName}).then(res => {
        var data = res.data;
        if(data.code == 0){
          this.getLogin();
          this.userName = "";
          this.aritcleShow = false;
          this.$message({message: data.message,type: 'success'})
          this.$router.push("/")
        }else{
          this.$message({message: data.message,type: 'error'})
        }
      })
    }
  },
  mounted() {
    document.querySelector('body').addEventListener('click', e => {
      let el = document.querySelector('.dropdown-menu')
      if (!e.target.contains(el)) {
        this.isShow = false
      }
    })
    this.getLogin();
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';

  header {
    background: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: $header-height;
      .logo {
        margin-left: 40px;
        h3 {
          font-weight: normal;
          position: relative;
          margin: 0;
          padding: 0;
          &:after {
            position: absolute;
            content: ".FONT";
            font-size: 16px;
            top: -8px;
            left: 100%;
          }
        }
      }
      nav {
        .item {
          display: inline-block;
          margin-right: 60px;
          line-height: $header-height;
          .link {
            display: block;
            padding: 0 12px;
            position: relative;
            @include opacity(0.8);
            &.exact-active-link {
              @include opacity(1);
              &.link:before {
                content: '';
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                background: $primary;
                height: 2px;
              }
            }
          }
          .signIn, .signUp {
            cursor: pointer;
          }
        }
        .dropdown {
          .el-dropdown-link {
            cursor: pointer;
          }
        }
        .dialog-footer {
          button {
            width: 100%;
          }
        }
        .search {
          line-height: 0;
        }
        .write {
          margin-left: 200px;
          i {
            color: #1A88FA;
            padding-right: 5px;
          }
          a {
            color: #1A88FA;
          }
        }
        .notice {
          margin-right: 20px;
          .el-dropdown-link {
            &:hover {
              color: #1A88FA;
            }
          }
          .notice-content {
            padding: 0 85px !important;
          }
        }
      }
      .tips {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #f0f9eb;
        padding: 1em;
        @include border-radius(4px);
        span {
          color: #67c23a;
          i {
            padding-right: 10px;
          }
        }
      }
    }
    .visible-xs {
      display: none;
      .dropdown-menu {
        @include transition(all 0.4s ease-in-out);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    header {
      .container {
        nav {
          ul {
            .item {
              margin-right: 35px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    header {
      .container {
        .logo {
          margin: 0 auto;
          display: block;
        }
        nav {
          display: none;
        }
      }
      .visible-xs {
        display: block;
        position: absolute;
        top: 15px;
        left: 15px;
        .menu-more{
          transition: all 0.5s ease-in;
        }
        .rotate{
          transform: rotate(90deg);
        }
        .dropdown-menu {
          background: #fff;
          margin-top: 10px;
          transition: all 0.7s ease-in;
          li {
            padding: 7px 25px 0 25px;
            &:hover {
              background: #1A88FA;
            }
            a {
              color: #000;
              text-align: justify;
              display: block;
              &::after {
                content: '';
                display: inline-block;
                width: 100%;
              }
              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>
