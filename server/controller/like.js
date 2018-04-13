/**
 * @file 喜欢控制
 * @author littlewin(littlewin.wang@gmail.com)
 */

const ArticleModel = require("../models/article");

class Like {
  static async like(req, res) {
    const { id } = req.body;

    // 根据type和id找出对象
    let result = await ArticleModel.findOne({ id });
    result.meta.likes++;

    let ret = await result.save();

    res.status(200).json({
      success: true,
      message: "喜欢+1"
    });
  }
}

module.exports = Like;
