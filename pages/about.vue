<template>
  <div class="about">
    <div class="banner">
      <div class="container" id="about-us">
        <div class="about-banner-slogan">
          <h3>关于我们</h3>
          <p class="hidden-xs">深圳天元云科技有限公司成立于2017年，是一家致力于为企业客户打造一个可扩展的企业级运维自动化平台的公司</p>
          <p class="visible-xs">天元云是一家致力于为企业打造一个可扩展的企业级运维自动化平台的公司</p>
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
    <div id="contact-sale">
      <div class="container">
        <h3>联系销售</h3>
        <form class="contact-content">
          <div class="left">
            <p>
              <input type="text" class="text" placeholder="姓名">
              <input type="text" class="text" placeholder="手机号">
            </p>
            <p>
              <input type="text" class="text" placeholder="公司">
              <input type="text" class="text" placeholder="固定电话">
            </p>
            <p>
              <input type="text" class="text email" placeholder="邮箱">
            </p>
          </div>
          <div class="right">
            <textarea class="message" placeholder="想要了解的信息..."></textarea>
          </div>
        </form>
        <input type="submit" class="more_btn" value="发送信息">
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
        h3 {
          margin-bottom: 27px;
          color: #fff;
        }
        p {
          line-height: 2;
        }
        .visible-xs {
          display: none;
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
  #contact-sale {
    margin-bottom: 100px;
    .container {
      h3 {
        margin-bottom: 50px;
      }
      .contact-content {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 50px;
        input, textarea {
          outline: none;
          font-size: 14px;
          padding-left: 10px;
        }
        .left {
          margin-left: 45px;
          .text {
            width: 270px;
            height: 40px;
            margin: 0 10px 18px 0;
          }
          .email {
            width: 565px;
          }
        }
        .right {
          margin-left: 20px;
          textarea {
            border-color: #d5d5d5;
            padding-top: 10px;
            height: 162px;
            width: 480px;
          }
        }
      }
      .more_btn {
        padding: 13px 30px;
        color: #fff;
        background: #1A88FA;
        display: block;
        margin: 0 auto;
        font-size: 14px;
        @include border-radius(4px);
      }
    }
  }
}

/*-----start-responsive-design------*/

@media screen  and (max-width: 1024px) {
  .about {
    .banner {
      .container {
        .about-banner-slogan {
          h3 {
            font-size: 28px;
          }
        }
        .banner-bg {
          width: auto;
          height: 360px;
          margin-left: -15%;
        }
      }
    }
    #contact-wrapper {
      .container {
        h3 {
          font-size: 28px;
        }
      }
    }
    #contact-sale {
      .container {
        h3 {
          font-size: 28px;
        }
        .contact-content {
          .left {
            .text {
              width: 225px;
              margin: 0 10px 15px 0;
            }
            .email {
              width: 475px;
            }
          }
          .right {
            textarea {
              height: 156px;
              width: 405px;
            }
          }
        }
      }
    }
  }
}
@media screen  and (max-width: 768px) {
  .about {
    .banner {
      .container {
        .about-banner-slogan {
          padding: 0 10px;
          left: 0;
          h3 {
            font-size: 24px;
          }
        }
        .banner-bg {
          width: auto;
          height: 360px;
          margin-left: -35%;
        }
      }
    }
    #contact-wrapper {
      .container {
        h3 {
          font-size: 24px;
        }
        .contact-items {
          ul {
            margin: 0 35px;
          }
        }
      }
    }
    #contact-sale {
      .container {
        h3 {
          font-size: 24px;
        }
        .contact-content {
          flex-wrap: wrap;
          justify-content: center;
          .left {
            margin-left: 0;
            .text {
              width: 225px;
            }
            .email {
              width: 475px;
            }
          }
          .right {
            margin-left: -10px;
            textarea {
              height: 156px;
              width: 475px;
            }
          }
        }
        .more_btn {
          padding: 13px 25px;
        }
      }
    }
  }
}
@media screen  and (max-width: 640px) {
  .about {
    .banner {
      .container {
        .about-banner-slogan {
          h3 {
            font-size: 24px;
          }
        }
        .banner-bg {
          width: auto;
          height: 320px;
          margin-left: -40%;
        }
      }
    }
    #contact-wrapper {
      .container {
        h3 {
          font-size: 24px;
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
    #contact-sale {
      .container {
        .contact-content {
          .left {
            .text {
              width: 400px;
              display: block;
            }
          }
          .right {
            textarea {
              height: 140px;
              width: 400px;
            }
          }
        }
        .more_btn {
          padding: 13px 25px;
        }
      }
    }
  }
}
@media screen  and (max-width: 480px) {
  .about {
    .banner {
      .container {
        .about-banner-slogan {
          h3 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
        .banner-bg {
          width: auto;
          height: 280px;
          margin-left: -50%;
        }
      }
    }
    #contact-wrapper {
      .container {
        h3 {
          font-size: 18px;
          margin: 85px 0 50px 0;
        }
      }
    }
    #contact-sale {
      .container {
        h3 {
          font-size: 18px;
        }
        .contact-content {
          .left {
            .text {
              width: 300px;
            }
          }
          .right {
            textarea {
              height: 120px;
              width: 300px;
            }
          }
        }
        .more_btn {
          padding: 10px 20px;
        }
      }
    }
  }
}
@media screen  and (max-width: 320px) {
  .about {
    .banner {
      .container {
        .about-banner-slogan {
          h3 {
            font-size: 16px;
          }
          p {
            font-size: 14px;
          }
          .visible-xs {
            display: block;
          }
          .hidden-xs {
            display: none;
          }
        }
        .banner-bg {
          width: auto;
          height: 280px;
          margin-left: -100%;
        }
      }
    }
    #contact-wrapper {
      .container {
        h3 {
          font-size: 16px;
          margin: 57px 0 50px 0;
        }
        .contact-items {
          margin: 0;
          ul {
            li {
              p {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    #contact-sale {
      .container {
        h3 {
          font-size: 18px;
          margin-top: 30px;
        }
        .contact-content {
          .left {
            .text {
              width: 240px;
            }
          }
          .right {
            textarea {
              height: 120px;
              width: 240px;
            }
          }
        }
        .more_btn {
          padding: 10px 20px;
        }
      }
    }
  }
}
</style>

