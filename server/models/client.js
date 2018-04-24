/**
 * @file 用户数据模型
 */

const mongoose = require("../db/mongodb").mongoose;
const autoIncrement = require("mongoose-auto-increment");
const paginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// 自增ID初始化
autoIncrement.initialize(mongoose.connection);

const ClientSchema = new Schema({
  // 姓名
  name: { type: String, required: true, validate: /\S+/ },

  // 密码
  password: { type: String, required: true, validate: /[\w-]+/ },

  // 手机号
  phone: {
    type: String
  }, 

  // 创建时间
  createAt: { type: Date, default: Date.now },

  // 修改时间
  updateAt: { type: Date }
});

// 翻页 + 自增ID插件配置
ClientSchema.plugin(paginate);
ClientSchema.plugin(autoIncrement.plugin, {
  model: "Client",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

// 更新修改时间
ClientSchema.pre("save", function(next) {
  this.updateAt = Date.now();
  next();
});
ClientSchema.pre("findOneAndUpdate", function(next) {
  this.findOneAndUpdate({}, { updateAt: Date.now() });
  next();
});

module.exports = mongoose.model("Client", ClientSchema);
