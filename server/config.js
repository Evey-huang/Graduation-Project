module.exports = {
  db: {
    url: "mongodb://localhost:27017/skyCloud",
    user: "admin",
    pass: "r00tme",
    auth: {
      authSource: "admin",
      authMechanism: "SCRAM-SHA-1"
    }
  },
  token: "sky-cloud.net",
  // 文件上传路径
  src: "./static/img/",
  // 文件上传引用
  getSrc: "http://localhost:8080/img/",
  // 邮件配置
  email: {
    config: {
      host: "smtp.qq.com",
      secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
      auth: {
        user: "81627198@qq.com",
        pass: "fodptwdtqkqzcafi"
      }
    },
    options: {
      from: '"Daker Zhou🍀" <81627198@qq.com>',
      to: '"Daker Zhou🍀" <81627198@qq.com>',
      title: "天元云有新客户了, 请记得及时处理哦！"
    }
  }
};
