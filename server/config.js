module.exports = {
  db: {
    url: "mongodb://localhost:27017/skyCloud",
    user: "Daker",
    pass: "Daker19960525",
    auth: {
      authSource: "admin",
      authMechanism: "SCRAM-SHA-1"
    }
  },
  token: "sky-cloud.net"
};
