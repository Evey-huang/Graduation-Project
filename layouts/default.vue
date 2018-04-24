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
import "~/plugins/element-ui.js";
import "element-ui/lib/theme-chalk/index.css";

export default {
  components: {
    LayoutHeader: Header,
    LayoutFooter: Footer
  }
}
</script>
