<template>
  <div class="index">
    <div class="banner">
      <div class="container">
        <div class="index-banner-slogan">
          <p>集中、统一、高效、规范的网络自</p>
          <p>动化平台</p>
        </div>
        <img class="banner-bg" src="~/assets/images/ic_banner.png" />
      </div>
    </div>
    <div class="container">
      <div class="video"></div>
        <h3 class="our-advantage">我们的优势</h3>
        <div class="advantage-item1">
          <div class="img">
            <img src="~/assets/images/ic_youshi_pic01.png"/>
          </div>  
          <div class="info">
            <h4>统一管理</h4>
            <span>支持多个主流厂商网络设备</span>
            <span>防火墙、负载均衡、VPN</span>
          </div>
        </div>
        <div class="advantage-item2">
          <div class="info">
            <h4>平台化</h4>
            <span>图形化的网络拓扑管理</span>
            <span>事件驱动架构</span>
            <span>插件式架构，支持多种网络服务编排场景</span>
          </div>
          <div class="img">
            <img src="~/assets/images/ic_youshi_pic02.png"/>
          </div>  
        </div>
        <div class="advantage-item3">
          <div class="img">
            <img src="~/assets/images/ic_youshi_pic03.png"/>
          </div>  
          <div class="info">
            <h4>场景应用</h4>
            <span>防火墙策略开通</span>
            <span>防火墙策略搜索</span>
          </div>
        </div>
        <div class="learn-more"><nuxt-link to="/product/#advantage">了解更多</nuxt-link></div>
    </div>
    <div class="contact-sale">
      <div class="container">
        <h3>NAP，轻松管理网络服务的生命周期</h3>
        <span><nuxt-link to="/pages/about.vue">联系销售</nuxt-link></span>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  layout: 'default'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';

.banner {
  .container {
    display: flex;
    align-items: center;
    .banner-bg {
      display: block;
      width: 100%;
    }
    .index-banner-slogan {
      position: absolute;
      font-size: 36px;
      margin-left: 40px;
      line-height: 1.5;
    }
  }
}
.container {
  .video {
    background: $body-bg;
    width: 960px;
    height: 540px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .our-advantage {
    margin-top: 120px;
    color: $font-color-title;
  }
  .advantage-item1, .advantage-item2, .advantage-item3 {
    margin-top: 120px;
    .img, .info {
      display: inline-block;
      vertical-align: middle;
    }
    .info {
      h4 {
        @include opacity(0.8);
        font-size: 28px;
      }
      span {
        display: block;
        line-height: 1.5;
        vertical-align: middle;
        padding-top: 13px;
        @include opacity(0.5);
        &:before {
          content: '';
          background: $primary;
          border-radius: 50%;
          display: inline-block;
          width: 6px;
          height: 6px;
          vertical-align: middle;
          margin-right: 9px;
        }
      }
    }
  }
  .advantage-item1, .advantage-item3 {
    .img {
      margin-left: 138px;
    }
    .info {
      margin-left: 205px;
    }
  }
  .advantage-item2 {
    .img {
      margin-left: 205px;
    }
    .info {
      margin-left: 138px;
    }
  }
  .learn-more {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    a {
      color: $primary;
      border: 1px solid $primary;
      padding: 13px 33px;
      text-align: center;
      @include border-radius(4px);
      &:hover, &:active {
        background: $primary;
        color: $font-color-secondary;
      }
    }
  }
}
.contact-sale {
  text-align: center;
  height: 328px;
  background: url('~/assets/images/ic_lianxixiaoshou_bg.png') no-repeat;
  margin-top: 120px;
  display: flex;
  align-items: center;
  span {
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    a {
      background: $primary;
      padding: 10px 33px;
      @include border-radius(4px);
      &:hover, &:active {
        background: #0063E7;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .banner {
    .container {
      .banner-bg {
        height: 360px;
      }
      .index-banner-slogan {
        font-size: 30px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .banner {
    .container {
      .index-banner-slogan {
        font-size: 26px;
      }
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 30px;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .banner {
    .container {
      .index-banner-slogan {
        font-size: 22px;
      }
    }
  }
  .container {
    h3 {
      font-size: 26px;
    }
    .advantage-item1, .advantage-item2, .advantage-item3 {
      .img {
        img {
          width: 150px;
          height: 150px;
        }
      }
      .info {
        h4 {
          font-size: 20px;
        }
        span {
          font-size: 14px;
        }
      }
    }
    .advantage-item1, .advantage-item3 {
      .img {
        margin-left: 20px;
      }
      .info {
        margin-left: 25px;
      }
    }
    .advantage-item2 {
      .img {
        margin-left: 25px;
      }
      .info {
        margin-left: 20px;
      }
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 26px;
      }
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
