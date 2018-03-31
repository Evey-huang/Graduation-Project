<template>
  <header>
    <div class="container">
      <nuxt-link to="/" class="logo"><img src="~/assets/images/ic_logo.png"/></nuxt-link>
      <nav class="nav">
        <ul>
          <li class="item"><nuxt-link class="link" to="/">首页</nuxt-link></li>
          <li class="item"><nuxt-link class="link" to="/product">产品介绍</nuxt-link></li>
          <li class="item more">
            <span class="link">更多</span>
            <span class="arrow"></span>
            <ul class="dropdown">
              <li class="sub-item line"><nuxt-link class="sub-link" to="/about">关于我们</nuxt-link></li>
              <li class="sub-item"><nuxt-link class="sub-link" to="/blog">博客</nuxt-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="visible-xs">
      <span><img :class="['menu-more',{'rotate': isShow}]" @click.stop="showMenu" src="~/assets/images/ic_menu_more2.png"/></span>
      <ul class="dropdown-menu" v-show="isShow">
        <li><nuxt-link class="sub-link" to="/">首页</nuxt-link></li>
        <li><nuxt-link class="sub-link" to="/product">产品介绍</nuxt-link></li>
        <li><nuxt-link class="sub-link" to="/about">关于我们</nuxt-link></li>
        <li><nuxt-link class="sub-link" to="/blog">博客</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'layout-header',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showMenu () {
      this.isShow = !this.isShow
    }
  },
  mounted () {
    document.querySelector('body').addEventListener('click', e => {
      let el = document.querySelector('.dropdown-menu')
      if (!e.target.contains(el)) {
        this.isShow = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';

  header {
    background: #202431;
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
      }
      nav {
        color: $font-color-secondary;
        .item {
          display: inline-block;
          margin-right: 88px;
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
          &.more {
            position: relative;
            &:before {
              display:block;
              content:"";
              width:0px;
              height:0px;
              border-left:6px solid transparent;
              border-right:6px solid transparent;
              border-top:6px solid #fff;
              position:absolute;
              top:43%;
              left:100%;
            }
            .arrow {
              @include opacity(0);
              @include transition(all 0.4s ease-in-out);
            }
            &:hover .arrow{
              position: absolute;
              width: 10px;
              height: 10px;
              bottom: -5px;
              left: 50%;
              background: #fff;
              transform: rotate(45deg);
              @include opacity(1);
            }
            .dropdown {
              background: #fff;
              position: absolute;
              padding: 0 15px;
              height: 0px;
              top: 100%;
              left: -30px;
              overflow: hidden;
              @include border-radius(4px);
              @include opacity(0);
              @include transition(all 0.4s ease-in-out);
              .sub-item {
                text-align: center;
                .sub-link {
                  color: #A6A6A6;
                  text-align: center;
                }
              }
              .line {
                border-bottom: 1px solid #EBEBEB;
                width: 100px;
                margin: 0 auto;
              }
            }
            &:hover .dropdown {
              height: 120px;
              @include opacity(1);
            }
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
