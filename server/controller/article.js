/**
 * @file 标签控制
 */

const ArticleModel = require("../models/article");

const select = {
  __v: false
};

class Article {
  static async list(req, res) {
    let { currentPage, pageSize, keyword, tag, date, hot } = req.query;
    // filter options
    const options = {
      sort: { createAt: -1 },
      page: Number(currentPage || 1),
      limit: Number(pageSize || 10),
      populate: ["tag"],
      select: "-content"
    };

    // 查询参数
    let querys = {};

    // 关键词查询
    if (keyword) {
      const keywordReg = new RegExp(keyword);
      querys["$or"] = [
        { title: keywordReg },
        { content: keywordReg },
        { description: keywordReg },
        { keywords: keywordReg }
      ];
    }

    // 标签id查询
    if (tag) {
      querys.tag = tag;
    }

    // 热评查询
    if (!!hot) {
      options.sort = {
        "meta.comments": -1,
        "meta.likes": -1,
        "meta.views": -1
      };
    }

    // 时间查询
    if (date) {
      const getDate = new Date(date);
      if (!Object.is(getDate.toString(), "Invalid Date")) {
        querys.create_at = {
          $gte: new Date((getDate / 1000 - 60 * 60 * 8) * 1000),
          $lt: new Date((getDate / 1000 + 60 * 60 * 16) * 1000)
        };
      }
    }

    const articles = await ArticleModel.paginate(querys, options);

    return res.status(200).json({
      success: true,
      message: "获取文章列表成功",
      articles: articles.docs,
      total: articles.total,
      pageSize: articles.limit,
      currentPage: articles.page,
      pages: articles.pages
    });
  }

  // 创建文章
  static async create(req, res) {
    const article = req.body;

    if (!article.title || !article.content) {
      return res.status(400).send("文章标题或内容为空");
    }

    await new ArticleModel(article)
      .save()
      .then(result => {
        return res.status(200).json({
          success: true,
          message: "创建文章成功"
        });
      })
      .catch(() => {
        return res.status(400).send("创建文章失败");
      });
  }

  // 获取文章
  static async get(req, res) {
    const id = req.params.id;
    // 判断来源
    const isFindById = Object.is(Number(id), NaN);
    let result;
    if (isFindById) {
      result = await ArticleModel.findOne({ id: id });
    } else {
      result = await ArticleModel.findOne({ id: id })
        .populate("tag")
        .exec();
    }

    // 是否查找到
    if (!result) {
      return res.status(404).json({
        success: true,
        message: "无法找到对应ID的文章"
      });
    }

    // 每请求一次，浏览次数都要增加
    if (!isFindById) {
      result.meta.views += 1;
      result.save();
    }

    let article = result.toObject();
    let articles;
    // 按照tag请求相似文章
    if (!isFindById && result.tag.length) {
      articles = await ArticleModel.find({
        tag: { $in: result.tag.map(t => t._id) }
      });
    }

    // 成功回应
    return res.status(200).json({
      success: true,
      message: "获取文章成功",
      article,
      articles
    });
  }

  // 更新文章
  static async update(req, res) {
    const id = req.params.id;
    const article = req.body;

    // 验证
    if (!article.title || !article.content) {
      return res.status(400).send("文章标题或内容为空");
    }

    // 重置信息
    delete article.meta;
    delete article.createAt;
    delete article.updateAt;

    let result = await ArticleModel.findByIdAndUpdate(id, article, {
      new: true
    });

    return res.status(200).json({
      success: true,
      message: "文章修改成功",
      article: result
    });
  }

  // 删除文章
  static async delete(req, res) {
    const id = req.params.id;

    let isExist = await ArticleModel.findOne({ _id: id });

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "文章ID不存在"
      });
    }

    await ArticleModel.findByIdAndRemove(id);

    return res.status(200).json({
      success: true,
      message: "文章删除成功"
    });
  }
}

export default Article;
