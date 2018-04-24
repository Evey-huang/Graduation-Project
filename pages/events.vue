<template>
  <div class="container">
    <div class="events-list">
      <nuxt-link to="#" class="events events1">
        <div class="events-inner">
          <div class="event-header"></div>
          <div class="event-message">
            <div class="title">QCon全球软件开发大会 2018北京站</div>
            <div class="date">
              <i class="iconfont icon-date"></i>
              <span>04-20 周五</span>
            </div>
            <div class="bottom">
              <div class="address">
                <i class="iconfont icon-location"></i>
                <span>北京</span>
              </div>
              <div class="join">报名参加</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="#" class="events events2">
        <div class="events-inner">
          <div class="event-header"></div>
          <div class="event-message">
            <div class="title">QCon全球软件开发大会 2018北京站</div>
            <div class="date">
              <i class="iconfont icon-date"></i>
              <span>04-20 周五</span>
            </div>
            <div class="bottom">
              <div class="address">
                <i class="iconfont icon-location"></i>
                <span>北京</span>
              </div>
              <div class="join">报名参加</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="`/article/_id`" class="events events2">
        <div class="events-inner">
          <div class="event-header"></div>
          <div class="event-message">
            <div class="title">QCon全球软件开发大会 2018北京站</div>
            <div class="date">
              <i class="iconfont icon-date"></i>
              <span>04-20 周五</span>
            </div>
            <div class="bottom">
              <div class="address">
                <i class="iconfont icon-location"></i>
                <span>北京</span>
              </div>
              <div class="join">报名参加</div>
            </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="`/article/_id`" class="events events2">
        <div class="events-inner">
          <div class="event-header"></div>
          <div class="event-message">
            <div class="title">QCon全球软件开发大会 2018北京站</div>
            <div class="date">
              <i class="iconfont icon-date"></i>
              <span>04-20 周五</span>
            </div>
            <div class="bottom">
              <div class="address">
                <i class="iconfont icon-location"></i>
                <span>北京</span>
              </div>
              <div class="join">报名参加</div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'default'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables.scss';
@import '~assets/scss/mixins.scss';
@import '~assets/scss/common.scss';

 .events-list {
   position: absolute;
   top: 100px;
   display: flex;
   align-items: stretch;
  //  margin-left: -7px;
  //  margin-right: -7px;
   margin: 0 auto;
  .events {
    width: 230px;
    height: 265px;
    background: #fff;
    display: inline-block;
    margin-right: 20px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 7px 15px rgba(0, 0, 0, 0.1);
    }
    .events-inner {
      .event-header {
        background: url("~/assets/images/event1.jpg");
        background-size: cover;
        height: 135px;
      }
      .event-message {
        padding: 20px 10px 10px 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }
        .date {
          margin-top: 10px;
          color: #333;
          font-size: 14px;
          i {
            padding-right: 10px;
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
          .address {
            color: #333;
            font-size: 14px;
            margin-top: 10px;
            i {
              padding-right: 10px;
            }
          }
          .join {
            padding: 7px 20px;
            border-radius: 30px;
            background: #4d91fd;
            color: #fff;
            text-align: center;
            font-size: 14px;
          }
        }
      }
    }
  }
}

/*-----start-responsive-design------*/

</style>
