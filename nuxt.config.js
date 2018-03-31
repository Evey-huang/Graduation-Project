module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sky-cloud',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' }
  ],
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1A88FA' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    publicPath: '/statics/',

    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: ['axios']
  },
  router: {
    linkActiveClass: 'active-link', // 链接激活时使用的 CSS 类名
    linkExactActiveClass: 'exact-active-link' // 当链接被精确匹配的时候应该激活的 class
  },
  plugins: [
    { src: '~/plugins/axios.js' }
  ]
}
