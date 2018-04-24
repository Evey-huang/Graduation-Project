<template>
  <footer>
    <div class="copyRight">
      <span>© 2017 - 2018 ❤
        <a target="_blank" rel="external nofollow" href="#">WEBFONT</a>
      </span>
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
  margin-top: 60px;
  .copyRight {
    display: flex;
    justify-content: center;
    background: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 20px 0;
    span {
      color: #000;
      @include opacity(0.4);
      font-size: $font-size-weak;
    }
  }
}
</style>