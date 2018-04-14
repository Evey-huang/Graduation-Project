<template>
  <div class="index">
    <div class="banner">
      <div class="container">
        <div class="index-banner-slogan">
          <p>集中、统一、高效、规范的网络<br class="line">自动化平台</p>
        </div>
        <img class="banner-bg" src="~/assets/images/ic_banner.png" />
      </div>
    </div>
    <div class="container">
      <div class="video"></div>
        <h3 class="our-advantage">我们的优势</h3>
        <div class="advantage-item1 move">
          <div class="img">
            <img src="~/assets/images/ic_youshi_pic01.png"/>
          </div>
          <div class="info">
            <h4>统一管理</h4>
            <span>支持多个主流厂商网络设备</span>
            <span>防火墙、负载均衡、VPN</span>
          </div>
        </div>
        <div class="advantage-item2 move">
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
        <div class="advantage-item3 move">
          <div class="img">
            <img src="~/assets/images/ic_youshi_pic03.png"/>
          </div>
          <div class="info">
            <h4>场景应用</h4>
            <span>防火墙策略开通</span>
            <span>防火墙策略搜索</span>
          </div>
        </div>
        <div class="learn-more move"><nuxt-link to="/product/#advantage">了解更多</nuxt-link></div>
    </div>
    <div class="contact-sale move">
      <div class="container">
        <h3>NAP，轻松管理网络服务的生命周期</h3>
        <span><nuxt-link to="/about/#contact-sale">联系销售</nuxt-link></span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showAlert: false
    };
  },
  methods: {
    contactSales() {
      this.showAlert = true;
    },
    sure() {
      this.close();
    },
    cancel() {
      this.showAlert = false;
    }
  },
  mounted() {
    // 滚动到容器开始执行动画
    const Ani = document.getElementsByClassName("move")
    const winHeight =  document.documentElement.clientHeight // 屏幕真实高度
    // console.log(Ani)
    var dataArr = [];
    for(var i = 0;i < Ani.length;i++){
      dataArr[i] = Ani[i].offsetTop - Math.floor(Ani[i].clientHeight / 2)
    }
    console.log(dataArr)
    window.onscroll = function (e) {
      let scrollTop = document.body.scrollTop | document.documentElement.scrollTop;
      for(let i=0;i<dataArr.length;i++){
        if (Math.floor(winHeight / 2) + scrollTop >= dataArr[i]) {
          if (!Ani[i].className.match(new RegExp('(\\s|^)animation(\\s|$)'))) {
             Ani[i].className += " animation"
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables.scss";
@import "~assets/scss/mixins.scss";
@import '~assets/scss/common.scss';

.banner {
  .container {
    .banner-bg {
      display: block;
      width: 100%;
    }
    .index-banner-slogan {
      position: absolute;
      top: 180px;
      font-size: 36px;
      margin-left: 40px;
      line-height: 1.5;
      p {
        animation-delay: .5s;
        animation-duration: .5s;
        animation-fill-mode: both;
        @extend .slideInUp;
      }
    }
  }
}
.container {
  .video {
    background: $body-bg;
    max-width: 960px;
    height: 540px;
    margin: 100px auto 0 auto;
  }
  .our-advantage {
    margin-top: 120px;
    color: $font-color-title;
  }
  .advantage-item1,
  .advantage-item2,
  .advantage-item3 {
    margin-top: 120px;
    .img,
    .info {
      display: inline-block;
      vertical-align: middle;
    }
    .img {
      transform: rotate(0deg) scale(1);
      transition: transform 1s;
      &:hover {
        transform: rotate(2deg) scale(1.1);
      }
    }
    .info {
      h4 {
        @include opacity(0.8);
        font-size: 28px;
      }
      span {
        display: block;
        line-height: 1.5;
        padding-top: 13px;
        @include opacity(0.5);
        animation-duration: 2s;
        &:before {
          content: "";
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
  .advantage-item1,
  .advantage-item3 {
    .img {
      margin-left: 138px;
      visibility: hidden;
    }
    .info {
      margin-left: 205px;
      visibility: hidden;
    }
    &.animation {
      .img {
        visibility: visible;
        @extend .animated;
        @extend .fadeInLeft;
      }
      .info {
        h4 {
          animation-duration: .8s;
          animation-fill-mode: both;
          @extend .fadeInRight;
          visibility: visible;
        }
        span {
          @extend .animated;
          @extend .fadeInRight;
          visibility: visible;
        }
        
      }
    }
  }
  .advantage-item2 {
    .img {
      margin-left: 205px;
      visibility: hidden;
    }
    .info {
      margin-left: 138px;
      visibility: hidden;
    }
    &.animation {
      .img {
        visibility: visible;
        @extend .animated;
        @extend .fadeInRight;
      }
      .info {
        h4 {
          animation-duration: .8s;
          animation-fill-mode: both;
          @extend .fadeInLeft;
          visibility: visible;
        }
        span {
          @extend .animated;
          @extend .fadeInLeft;
          visibility: visible;
        }
      }
    }
  }
  .learn-more {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    a {
      color: $primary;
      border: 1px solid $primary;
      padding: 13px 33px;
      text-align: center;
      @include border-radius(4px);
      visibility: hidden;
      &:hover,
      &:active {
        background: $primary;
        color: $font-color-secondary;
      }
    }
    &.animation {
      a {
        @extend .animated;
        @extend .fadeInUp;
        visibility: visible;
      }
    }
  }
}
.contact-sale {
  text-align: center;
  height: 328px;
  background: url("~/assets/images/ic_lianxixiaoshou_bg.png") no-repeat;
  margin-top: 120px;
  display: flex;
  align-items: center;
  h3 {
    visibility: hidden;
  }
  span {
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    visibility: hidden;
    a {
      background: $primary;
      padding: 10px 33px;
      @include border-radius(4px);
      &:hover,
      &:active {
        background: #0063e7;
      }
    }
  }
  &.animation {
    h3 {
      animation-duration: .8s;
      animation-fill-mode: both;
      @extend .fadeInUp;
      visibility: visible;
    }
    span {
      @extend .animated;
      @extend .fadeInUp;
      visibility: visible;
    }
  }
}

.contact-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}
.wrap {
  position: absolute;
  z-index: 1002;
  min-width: 800px;
  height: 700px;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  padding: 40px 20px;
  .contact-title {
    font-size: 24px;
    padding-bottom: 10px;
  }
  form {
    margin-top: 50px;
    p {
      label {
        display: block;
        margin-top: 10px;
      }
      input,
      textarea {
        width: 320px;
        margin-top: 10px;
        outline: none;
      }
      input {
        height: 45px;
      }
      .area-code {
        width: 100px;
        margin-right: 5px;
      }
      .tel {
        width: 199px;
        margin-left: 5px;
      }
      textarea {
        height: 100px;
      }
    }
  }
  .foot {
    margin-top: 20px;
    text-align: center;
    button {
      margin-right: 40px;
      width: 80px;
      height: 40px;
      color: #000;
      @include border-radius(4px);
      &:last-child {
        margin-right: 0;
      }
    }
    .btn-base {
      background: #1a88fa;
      color: #fff;
    }
  }
}

/*-----start-responsive-design------*/

@media (max-width: 1024px) {
  .banner {
    .container {
      .index-banner-slogan {
        font-size: 28px;
      }
    }
  }
  .container {
    h3 {
      font-size: 28px;
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 28px;
      }
    }
  }
}
@media (max-width: 768px) {
  .banner {
    .container {
      .banner-bg {
        width: auto;
        height: 360px;
        margin-left: -10%;
      }
      .index-banner-slogan {
        font-size: 24px;
      }
    }
  }
  .container {
    .our-advantage {
      margin-top: 40px;
      font-size: 24px;
    }
    .advantage-item1,
    .advantage-item2,
    .advantage-item3 {
      margin-top: 40px;
      .img,
      .info {
        display: inline-block;
        vertical-align: middle;
      }
      .info {
        h4 {
          @include opacity(0.8);
          font-size: 20px;
        }
      }
    }
    .advantage-item1,
    .advantage-item3 {
      .img {
        margin-left: 20px;
      }
      .info {
        margin-left: 80px;
      }
    }
    .advantage-item2 {
      .img {
        margin-left: 80px;
      }
      .info {
        margin-left: 20px;
      }
    }
    .learn-more {
      margin-top: 40px;
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 24px;
      }
    }
  }
}
@media (max-width: 640px) {
  .banner {
    .container {
      .banner-bg {
        width: auto;
        height: 320px;
        margin-left: -15%;
      }
      .index-banner-slogan {
        top: 100px;
        font-size: 24px;
      }
    }
  }
  .container {
    .advantage-item1,
    .advantage-item2,
    .advantage-item3 {
      .img {
        width: 180px;
        img {
          width: 100%;
        }
      }
      .info {
        h4 {
          font-size: 22px;
          margin: 0;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 24px;
      }
    }
  }
}
@media (max-width: 480px) {
  .banner {
    .container {
      .banner-bg {
        width: auto;
        height: 280px;
        margin-left: -40%;
      }
      .index-banner-slogan {
        font-size: 18px;
      }
    }
  }
  .container {
    h3 {
      font-size: 18px;
    }
    .learn-more {
      font-size: 14px;
    }
    .advantage-item1,
    .advantage-item2,
    .advantage-item3 {
      .img {
        width: 140px;
        img {
          width: 100%;
        }
      }
      .info {
        h4 {
          font-size: 16px;
          margin: 0;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 18px;
      }
      span {
        a {
          font-size: 14px;
        }
      }
    }
  }
}
@media (max-width: 320px) {
  .banner {
    .container {
      .banner-bg {
        width: auto;
        height: 240px;
        margin-left: -70%;
      }
      .index-banner-slogan {
        font-size: 16px;
      }
    }
  }
  .container {
    h3 {
      font-size: 16px;
    }
  }
  .contact-sale {
    .container {
      h3 {
        font-size: 16px;
      }
    }
  }
}
</style>
