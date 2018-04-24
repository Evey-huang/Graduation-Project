module.exports = {
  /*
   ** Build configuration
   */
  build: {
    analyze: {
      analyzerMode: "static"
    },
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    // 将重复引用的(第三方/自有)模块添加到vendor.bundle.js
    vendor: ["axios", "marked"]
  },
  css: [
    { src: "~/assets/scss/app.scss", lang: "scss" },
    "github-markdown-css/github-markdown.css",
    "highlight.js/styles/atom-one-dark.css"
  ],
  dev: process.env.NODE_ENV !== "production",
  env: {
    baseUrl: `http://${process.env.HOST || "localhost"}:${process.env.PORT ||
      8080}/api`
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Eveyyyyy",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#1A88FA" },
  plugins: [
    // { src: '~/plugins/axios' }
    { src: "~/plugins/filters.js" },
    { src: "~/plugins/marked.js" },
    { src: "~/plugins/highlight.js" }
  ],
  router: {
    linkActiveClass: "active-link", // 链接激活时使用的 CSS 类名
    linkExactActiveClass: "exact-active-link", // 当链接被精确匹配的时候应该激活的 class
    middleware: "auth"
  },
  render: {
    http2: true,
    resourceHints: false,
    gzip: {
      threshold: 9
    }
  }
};
