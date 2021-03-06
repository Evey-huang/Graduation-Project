/**
 * @file 文章数据模型
 * @author littlewin(littlewin.wang@gmail.com)
 */

const mongoose = require("../db/mongodb").mongoose;
const autoIncrement = require("mongoose-auto-increment");
const paginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

// 自增ID初始化
autoIncrement.initialize(mongoose.connection);

const ArticleSchema = new Schema({
  // 文章标题
  title: { type: String, required: true, validate: /\S+/ },

  // 作者
  author: { type: String, required: true, validate: /\S+/ },
  
  // 文章关键词
  keywords: { type: String },

  // 描述
  description: String,

  // 文章内容
  content: { type: String, required: true, validate: /\S+/ },

  // 缩略图
  thumb: String,

  // 文章标签
  tag: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],

  // 其他元信息
  meta: {
    // 阅读数
    views: { type: Number, default: 0 },
    // 点赞数
    likes: { type: Number, default: 0 },
    // 评论数量
    comments: { type: Number, default: 0 }
  },

  // 创建时间
  createAt: { type: Date, default: Date.now },

  // 修改时间
  updateAt: { type: Date }
});

ArticleSchema.set("toObject", { getters: true });

// 翻页 + 自增ID插件配置
ArticleSchema.plugin(paginate);
ArticleSchema.plugin(autoIncrement.plugin, {
  model: "Article",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

// 更新修改时间
ArticleSchema.pre("save", function(next) {
  this.updateAt = Date.now();
  next();
});
ArticleSchema.pre("findOneAndUpdate", function(next) {
  this.findOneAndUpdate({}, { updateAt: Date.now() });
  next();
});

ArticleSchema.virtual("t_content").get(function() {
  const content = this.content;
  return !!content ? content.substring(0, 130) : content;
});

module.exports = mongoose.model("Article", ArticleSchema);
