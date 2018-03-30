<template>
  <main id="app" v-cloak>
    <layout-header></layout-header>
    <keep-alive>
      <nuxt></nuxt>
    </keep-alive>
    <layout-footer></layout-footer>
  </main>
</template>

<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'

export default {
  components: {
    LayoutHeader: Header,
    LayoutFooter: Footer
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/normalize.scss';
@import '~assets/scss/variables.scss';

</style>

