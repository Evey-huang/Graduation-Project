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
  token: "sky-cloud.net"
};
