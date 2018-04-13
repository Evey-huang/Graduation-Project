/**
 * @file 喜欢控制
 */

const ArticleModel = require("../models/article");

class Like {
  static async like(req, res) {
    const id = req.params.id;

    // 根据type和id找出对象
    let result = await ArticleModel.findOne({ id: id });
    result.meta.likes++;

    let article = await result.save();

    res.status(200).json({
      success: true,
      message: "喜欢+1",
      article
    });
  }
}

export default Like;
