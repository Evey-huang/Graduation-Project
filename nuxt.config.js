module.exports = {
  /*
   ** Build configuration
   */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config) {
      if (process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: ['axios', 'element-ui']
  },
  css: [
    { src: '~/assets/scss/app.scss', lang: 'scss' },
    { src: 'element-ui/lib/theme-chalk/index.css', ssr: true }
  ],
  dev: (process.env.NODE_ENV !== 'production'),
  env: {
    baseUrl: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8080}/api`
  },
  babel: {
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
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
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1A88FA' },
  plugins: [
    // { src: '~/plugins/axios' }
    '~plugins/element-ui'
  ],
  router: {
    linkActiveClass: 'active-link', // 链接激活时使用的 CSS 类名
    linkExactActiveClass: 'exact-active-link', // 当链接被精确匹配的时候应该激活的 class
    middleware: 'auth'
  },
  render: {
    http2: true,
    resourceHints: false
  }
}
