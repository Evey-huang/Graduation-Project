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
  getSrc: "http://localhost:8080/img/"
};
