/**
 * @file 评论数据模型
 */

const mongoose = require("../db/mongodb").mongoose;
const autoIncrement = require("mongoose-auto-increment");
const paginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// 自增ID初始化
autoIncrement.initialize(mongoose.connection)

const CommentSchema = new Schema({

  // 评论所在文章id
  postID: { type: Number, required: true },

  // 评论用户名称
  name: { type: String, required: true, validate: /\S+/ },

  // 评论内容
  content: { type: String, required: true, validate: /\S+/ },

  // 创建时间
  createAt: { type: Date, default: Date.now },

  // 修改时间
  updateAt: { type: Date }

})

// 翻页 + 自增ID插件配置
CommentSchema.plugin(paginate);
CommentSchema.plugin(autoIncrement.plugin, {
  model: "Comment",
  field: "id",
  startAt: 1,
  incrementBy: 1
})

// 更新修改时间
CommentSchema.pre("save", function (next) {
  this.updateAt = Date.now()
  next()
})
CommentSchema.pre("findOneAndUpdate", function (next) {
  this.findOneAndUpdate({}, { updateAt: Date.now() })
  next()
})

module.exports = mongoose.model("Comment", CommentSchema)
