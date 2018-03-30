<template>
  <footer>
    <div class="container">
      <div class="footer-contact">
        <span>联系我们</span>
        <p>TEL:0755-23994135</p>
      </div>
      <ul class="footer-website">
        <li class="source">
          <span>资源</span>
          <ul>
            <li><nuxt-link to="#">API</nuxt-link></li>
            <li><nuxt-link to="#">使用文档</nuxt-link></li>
            <li><nuxt-link to="#">销售咨询</nuxt-link></li>
          </ul>
        </li>
        <li class="source"> 
          <span>关于</span>
          <ul>
            <li><nuxt-link to="/about/#about-us">关于我们</nuxt-link></li>
            <li><nuxt-link to="/about/#contact-wrapper">联系我们</nuxt-link></li>
            <li><nuxt-link to="#">技术博客</nuxt-link></li>
          </ul>
        </li>
      </ul>
      <div class="other">
        <nuxt-link to="/about/#about-us" class="about">关于我们<span></span></nuxt-link>
        <nuxt-link to="/about/#contact-wrapper" class="about">联系我们<span></span></nuxt-link>
        <nuxt-link to="#">技术博客</nuxt-link>
      </div>
      <div class="copyRight">
        <p class="hidden-xs">© 2018 深圳天元云科技有限公司,All Rights Reserved 粤ICP备 XXXXX</p>
        <div class="visible-xs">
          <p>© 2018 sky-cloud.All Rights Reserved</p>
          <p>粤ICP备 XXXXX</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'layout-footer'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';
  footer {
    background: $footerBg;
    color: $font-color-secondary;
    .container {
      position: relative;
      height: 336px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-top: 107px;
      .footer-contact, .footer-website{
        width: 50%;
      }
      .footer-contact{
        padding-left: 40px;
        line-height: 1.5;
        span {
          font-size: 30px;
          @include opacity(0.8);
        }
        p {
          font-size: $font-size-headline;
        }
      }
      .footer-website {
        line-height: 2;
        .source {
          margin-left: 140px;
        }
        li {
          display: inline-block;
          a {
            @include opacity(0.7);
            font-size: $font-size-weak;
            color: #9B9B9B;
          }
          li {
            display: block;
          }
        }
      } 
      .other{
        display: none;
      }
      .copyRight {
        position: absolute;
        bottom: 30px;
        p {
          @include opacity(0.4);
          font-size: $font-size-weak;
        }
      }
      .visible-xs {
        display: none;
      }
    }
  }
  @media screen and (max-width: 850px) {
    footer {
      .container {
        height: 280px;
        padding-top: 80px;
        .footer-contact {
          padding-left: 20px;
          span {
            font-size: 24px;
          }
          p {
            font-size: 28px;
          }
        }
        .footer-website {
          .source {
            margin-left: 80px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    footer {
      .container {
        .footer-contact {
          span {
            font-size: 20px;
          }
          p {
            font-size: 22px;
          }
        }
        .footer-website {
          .source {
            margin-left: 45px;
          }
        }
        .copyRight {
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    footer {
      .container {
        height: 170px;
        padding-top: 40px;
        .footer-contact, .footer-website {
          display: none;
        }
        .other {
          display: block;
          .about {
            position: relative;
            margin-right: 30px;
            span {
              position: absolute;
              top: 48%;
              right: -17px;
              display: inline-block;
              width:6px;
              height:6px;
              @include border-radius(3px);
              background: #fff;
            }
          }
        }
        .copyRight {
          .hidden-xs {
            display: none;
          }
          .visible-xs {
            display: block;
            font-size: 12px;
            text-align: center;
            line-height: 1.5;
          }
        }
      }
    }
  }
</style>