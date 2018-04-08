<template>
  <main id="app" v-cloak>
    <keep-alive>
      <nuxt></nuxt>
    </keep-alive>
  </main>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
</script>
