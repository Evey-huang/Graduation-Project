<template>
  <div class="product">
    <div class="banner">
      <div class="container">
        <div class="banner-slogan">
          <h3>NAP</h3>
          <p class="hidden-xs">NAP(Network Automation Platform)通过主流网络设备的配置进行解析和建模，形成统一的配置模型，提供完善的配置<br>管理接口，并通过编排引擎实现对一系列复杂网络服务自动化场景的支持。</p>
          <p class="visible-xs">NAP通过主流网络设备的配置进行解析和建模，形成统一的配置模型，提供完善的配置管理接口，并通过编排引擎实现对一系列复杂网络服务自动化场景的支持。</p>
          <span><nuxt-link to="./about">联系销售</nuxt-link></span>
        </div>
        <img class="banner-bg" src="~/assets/images/ic_product_banner.png" />
      </div>
    </div>
    <div class="product-wrapper">
      <div class="introduce">
        <div class="container">
          <h3>产品介绍</h3>
          <p class="hidden-xs">NAP(Network Automation Platform)是一款旨在解决日渐繁杂的网络运维问题的自动化软件。NAP通过主流网络设备的配置进行解析和建模，形成统一的配置模型，提供完善的配置管理接口，
            并通过编排引擎实现对一系列复杂网络服务自动化场景的支持。通过NAP，网络管理员可以高效、合规地实现对网络服务的生命周期进行管理。</p>
          <p class="visible-xs">NAP是一款旨在解决日渐繁杂的网络运维问题的自动化软件,提供完善的配置管理接口和对一系列复杂网络服务自动化场景提供支持。</p>
          <ul>
            <li>
              <img src="~/assets/images/ic_pipeline.png"/>
              <span>灵活编排</span>
            </li>
            <li>
              <img src="~/assets/images/ic_ compliance.png"/>
              <span>合规管理</span>
            </li>
            <li>
              <img src="~/assets/images/ic_yunwei.png"/>
              <span>高效运维</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="advantage">
        <div class="container">
          <h3>产品优势</h3>
          <ul>
            <li class="left">
              <div>
                <img src="~/assets/images/ic_advantage_icon01.png"/>
                <h4>平台化</h4>
                <p>图形化的网络拓扑管理，插件式架构，支持多种网络服务编排场景</p>
              </div>
            </li>
            <li class="center">
              <div>
                <img src="~/assets/images/ic_avantage_icon02.png"/>
                <h4>场景应用</h4>
                <p>防火墙策略开通，防火墙策略搜索、拓扑路径分析</p>
              </div>
            </li>
            <li>
              <div>
                <img src="~/assets/images/ic_advantage_icon03.png"/>
                <h4>统一管理</h4>
                <p>支持多个主流厂商网络设备</p>
              </div>
            </li>
            <li class="left">
              <div>
                <img src="~/assets/images/ic_advantage_icon04.png"/>
                <h4>提高工作效率</h4>
                <p>节约运维团队的操作时间，提高运维效率</p>
              </div>
            </li>
            <li class="center">
              <div>
                <img src="~/assets/images/ic_advantage_icon05.png"/>
                <h4>降低运维成本</h4>
                <p>显著减少运维工程师“繁重”的工作量和策略分析成本</p>
              </div>
            </li>
            <li>
              <div>
                <img src="~/assets/images/ic_advantage_icon06.png"/>
                <h4>简化变更流程</h4>
                <p>简化策略变更流程管理，提高变更操作准确性，减少20-30%的无用变更</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="features">
        <div class="container">
          <h3>产品功能</h3>
          <ul>
            <li @click="tabIndex(0)">
              <span :class="['features-items item1',{'change-img1': index === 0}]"></span>
              <h4>配置管理</h4>
              <span v-show="index === 0" class="arrow"></span>
            </li>
            <li @click="tabIndex(1)">
              <span :class="['features-items item2',{'change-img2': index === 1}]"></span>
              <h4>防火墙策略开通</h4>
              <span v-show="index === 1" class="arrow"></span>
            </li>
            <li @click="tabIndex(2)">
              <span :class="['features-items item3',{'change-img3': index === 2}]"></span>
              <h4>防火墙策略搜索</h4>
              <span v-show="index === 2" class="arrow"></span>
            </li>
          </ul>
          <div class="details" v-show="index === 0">
            <div class="details-item">
              <h4>权限管理</h4>
              <p>用户角色分为普通用户和管理员</p>
            </div>
            <div class="details-item">
              <h4>配置管理</h4>
              <p>可以对配置进行查看历史配置、配置对比和配置全文搜索操作</p>
            </div>
            <div class="details-item">
              <h4>设备管理</h4>
              <p>将设备纳入一个组内进行管理</p>
            </div>
          </div>
          <div class="details" v-show="index === 1">
            <div class="details-item">
              <h4>支持API</h4>
              <p>开放API，利于学习</p>
            </div>
            <div class="details-item">
              <h4>下发优化</h4>
              <p>互斥策略、等效策略</p>
            </div>
            <div class="details-item">
              <h4>支持Excel批量导入</h4>
              <p>将设备纳入一个组内进行管理</p>
            </div>
            <div class="details-item">
              <h4>人工审核</h4>
              <p>xxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div class="details-item">
              <h4>自动分析下发路径</h4>
              <p>自动分析下发路径，减少策略分析成本</p>
            </div>
            <div class="details-item">
              <h4>可回退</h4>
              <p>xxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="details" v-show="index === 2">
             <div class="details-item">
              <h4>全网实时搜索</h4>
              <p>XXXXXXXXXXXXXX</p>
            </div>
            <div class="details-item">
              <h4>支持Excel导出</h4>
              <p>支持导出Excel格式的搜索结果</p>
            </div>
            <div class="details-item">
              <h4>支持动作、源地址、目的地址和协议搜索</h4>
              <p>XXXXXXXXXXXXXXXX</p>
            </div>
            <div class="details-item">
              <h4>支持网络对象、对象组递归搜索</h4>
              <p>xxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    tabIndex (index) {
      this.index = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';
.product {
  .banner {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      .banner-bg {
        display: block;
        max-width: 100%;
      }
      .banner-slogan {
        position: absolute;
        text-align: center;
        // width: 52%;
        .visible-xs {
          display: none;
        }
        h3 {
          margin-bottom: 27px;
          color: $font-color-secondary;
        }
        p {
          line-height: 2;
          @include opacity(0.8);
          margin-bottom: 23px;
        }
        span {
          display: block;
          margin: 0 auto;
          a {
            background: $primary;
            padding: 10px 33px;
            @include opacity(0.8);
            @include border-radius(4px);
            &:hover, &:active {
              background: #0063E7;
            }
          }
        }
      }
    }
  }
  .product-wrapper {
    .introduce {
      h3 {
        margin-top: 120px;
      }
      p {
        padding: 0 20px;
        margin-top: 50px;
        line-height: 1.5;
        color: $font-color-title;
        @include opacity(0.8);
      }
      .visible-xs {
        display: none;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 10% 5%;
        flex-wrap: wrap;
        li {
         position: relative;
         flex-basis: 20%;
          span {
            padding-left: 40px;
            position: absolute;
            top: 40%;
            color: $font-color-title;
            font-size: 22px;
          }
        }
      }
    }
    #advantage {
      background: $body-bg;
      margin-top: 120px;
      h3 {
        padding-top: 70px;
      }
      ul {
        padding-top: 70px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        li {
          flex-basis: 29%;
          margin-bottom: 60px;
          text-align: center;
          padding: 0 2%;
          div {
            background: #fff;
            height: 328px;
          }
          img {
            margin: 0 auto;
            display: block;
            padding-top: 35px;
          }
          h4 {
            padding: 2px 0;
          }
          p {
            line-height: 1.5;
            color: #A5A9AE;
            padding: 0 24px;
          }

        }

      }
    }
    .features {
      margin-bottom: 120px;
      .container {
        h3 {
          margin-top: 120px;
        }
        ul {
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin-top: 70px;
          li {
            flex: 1;
            position: relative;
            overflow: hidden;
            .features-items {
              display: inline-block;
              width: 90px;
              height: 104px;
              @include transition(all 0.4s ease-in-out);
            }
            .item1 {
              background: url('~/assets/images/ic_guanli.png');
              &:hover {
                background: url('~/assets/images/ic_guanli_check.png');
              }
            }
            .change-img1 {
              background: url('~/assets/images/ic_guanli_check.png');
            }
            .item2 {
              background: url('~/assets/images/ic_kaitong.png');
              &:hover {
                background: url('~/assets/images/ic_kaitong_check.png');
              }
            }
            .change-img2 {
              background: url('~/assets/images/ic_kaitong_check.png');
            }
            .item3 {
              background: url('~/assets/images/ic_search.png');
              &:hover {
                background: url('~/assets/images/ic_search_check.png');
              }
            }
            .change-img3 {
              background: url('~/assets/images/ic_search_check.png');
            }
            h4 {
              padding-top: 5px;
              @include opacity(0.8);
            }
            .info {
              position: absolute;
            }
            .arrow{
              position: absolute;
              width: 20px;
              height: 20px;
              transform: rotate(45deg);
              bottom: -10px;
              left: 50%;
              margin-left: -5px;
              background: #F6F7FA;
            }
          }
        }
        .details {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 60px 40px;
        background: $body-bg;
        .details-item{
          width: 50%;
          margin-bottom: 60px;
          color: #000;
          box-sizing: border-box;
          h4 {
            font-size: 18px;
            @include opacity(0.8);
          }
          p {
            @include opacity(0.5);
          }
        }
        .details-item:nth-last-child(1){
            margin-bottom: 0;
        }
        }
      }
    }
  }
}

/*-----start-responsive-design------*/

@media screen and (max-width: 1024px) {
  .product {
    .banner {
      .container {
        .banner-bg {
          width: auto;
          height: 360px;
          margin-left: -10%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .product {
    .banner {
      .container {
        .banner-bg {
          width: auto;
          height: 380px;
          margin-left: -13%;
        }
        .banner-slogan {
          width: 82%;
          .visible-xs {
            display: block;
          }
          .hidden-xs {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .product {
    .banner {
      .container {
        .banner-bg {
          width: auto;
          height: 400px;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .product {
    .banner {
      .container {
        .banner-bg {
          width: auto;
          height: 420px;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  
}

// @media screen and (max-width: 1200px) {
//   .product {
//     .banner {
//       .container {
//         .banner-bg {
//           height: 380px;
//         }
//         .banner-slogan {
//           width: 72%;
//           h3 {
//             font-size: 30px;
//           }
//         }
//       }
//     }
//   }
// }
// @media screen and (max-width: 767px){
//   .product {
//     .banner {
//       .container {
//         .banner-slogan {
//           width: 82%;
//           .visible-xs {
//             display: block;
//           }
//           .hidden-xs {
//             display: none;
//           }
//           h3 {
//             font-size: 28px;
//           }
//           p {
//             font-size: 14px;
//           }
//           span {
//             a {
//               font-size: 14px;
//             }
//           }
//         }
//       }
//     }
//     .product-wrapper {
//       .introduce {
//         h3 {
//           font-size: 30px;
//         }
//         .visible-xs {
//           display: block;
//         }
//         .hidden-xs {
//           display: none
//         }
//         ul {
//           margin: 10% 2%;
//           li {
//             flex-basis: 32%;
//             span {
//               font-size: 16px;
//             }
//           }
//         }
//       }
//       #advantage {
//         h3 {
//           font-size: 30px;
//         }
//         ul {
//           li {
//             flex-basis: 46%;
//           }
//         }
//       }
//       .features {
//         h3 {
//           font-size: 30px;
//         }
//       }
//     }
//   }
// }

// @media screen and (max-width: 480px){
//   .product {
//     .product-wrapper {
//       .introduce {
//         h3 {
//           font-size: 26px;
//         }
//         p {
//           font-size: 14px;
//         }
//         ul {
//           margin: 10% 5%;
//           li {
//             width: 100%;
//             box-sizing: border-box;
//             margin-bottom: 20px;
//             position: relative;
//             span {
//               position: absolute;
//               top: 100%;
//               left: -43px;
//               font-size: 14px;
//               padding-top: 10px;
//             }
//             img {
//               width: 50px;
//               height: 50px;
//             }
//           }
//         }
//       }
//       #advantage {
//         h3 {
//           font-size: 26px;
//         }
//         ul {
//           li {
//             padding: 0;
//             flex-basis: 100%;
//             h4 {
//               font-size: 20px;
//             }
//             p {
//               font-size: 14px;
//             }
//           }
//         }
//       }
//       .features {
//         h3 {
//           font-size: 26px;
//         }
//         ul {
//           li {
//             h4 {
//               font-size: 18px;
//             }
//           }
//         }
//         .details {
//           p {
//             font-size: 14px;
//           }
//         }
//       }
//     }
//   }
// }

</style>
