<template>
  <div class="about">
    <div class="banner">
      <div class="container" id="about-us">
        <div class="about-banner-slogan">
          <h3>关于我们</h3>
          <p>深圳天元云科技有限公司成立于2017年，是一家致力于为企业客户打造一个可扩展的企业级运维自动化平台的公司。</p>
        </div>
        <img class="banner-bg" src="~/assets/images/ic_about_banner.png" />
      </div>
    </div>
    <div id="contact-wrapper">
      <div class="container">
        <h3>联系我们</h3>
        <div class="map">
          <iframe src="/map.html"></iframe>
        </div>
        <div class="contact-items">
          <ul>
            <li>
              <img src="~/assets/images/ic_tel_icon.png"/>
              <p>0755-23994135</p>
            </li>
            <li>
              <img src="~/assets/images/ic_address_icon.png"/>
              <p>深圳市福田区深南大道6019金润大厦19C</p>
            </li>
            <li>
              <img src="~/assets/images/ic_email_icon.png"/>
              <p>sky-cloud@163.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'about',
  layout: 'default'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';
.about {
  .banner {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      .banner-bg {
        display: block;
        width: 100%;
      }
      .about-banner-slogan {
        position: absolute;
        text-align: center;
        // width: 863px;
        h3 {
          margin-bottom: 27px;
          color: #fff;
        }
        p {
          line-height: 2;
        }
      }
    }
  }
  #contact-wrapper {
    color: $font-color-title;
    h3 {
      margin: 120px 0 50px 0;
    }
    .map {
      margin-bottom: 120px;
      iframe {
        width: 100%;
        height: 576px;
        border: none;
      }
    }
    .contact-items {
      margin-bottom: 120px;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 102px;
        img {
          display: block;
          margin: 0 auto;
          margin-bottom: 20px;
        }
        p {
          @include opacity(0.8);
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .about {
    .banner {
      .about-banner-slogan {
        h3 {
          font-size: 34px;
        }
      }
      .banner-bg {
        height: 380px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .about {
    .banner {
      .about-banner-slogan {
        h3 {
          font-size: 30px;
        }
      }
    }
    #contact-wrapper {
      h3 {
        font-size: 30px;
      }
      .map {
        margin-bottom: 60px;
      }
      .contact-items {
        margin-bottom: 40px;
        ul {
          margin-left: 30px;
          li {
            width: 100%;
            box-sizing: border-box;
            @include clearfix;
            img {
              float: left;
              padding: 0 10px;
            }
            p {
              margin-top: 13px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .about {
    .banner {
      .about-banner-slogan {
        h3 {
          font-size: 26px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    #contact-wrapper {
      h3 {
        font-size: 26px;
      }
    }
  }
}
</style>

