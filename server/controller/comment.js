/**
 * @file 评论控制
 */

const CommentModel = require("../models/comment");
const ArticleModel = require("../models/article");

const select = {
  id: false,
  __v: false
};

class Comment {
  // 创建评论
  static async create(req, res) {
    const comment = req.body;
    // console.log(comment);

    // name validate 
    if (!comment.content || !comment.postID) {
      return res.status(400).send("参数为空");
    }
    let result = await ArticleModel.findOne({ id: comment.postID });
    // console.log(result);
    
    await new CommentModel(comment)
      .save()
      .then(() => {
        // 评论数+1
        result.meta.comments++;
        result.save();
        return res.status(200).json({
          success: true,
          message: "评论创建成功"
        });
      })
      .catch(() => {
        return res.status(400).send("评论创建失败");
      });
  }

  // 获取评论
  static async get(req, res) {
    let { currentPage, pageSize, keyword = "" } = req.query;
    // 查询参数
    const keywordReg = new RegExp(keyword);

    const query = {
      $or: [{ name: keywordReg }, { content: keywordReg }]
    };
    if (currentPage && pageSize) {
      // 过滤条件
      const options = {
        sort: { _id: 1 },
        page: Number(currentPage),
        limit: Number(pageSize),
        select: select
      };
      const comments = await CommentModel.paginate(query, options);
      return res.status(200).json({
        success: true,
        message: "获取所有评论",
        data: {
          comments: comments.docs,
          pagination: {
            currentPage: comments.page,
            pageSize: comments.limit,
            total: comments.total
          }
        }
      });
    } else if(!req.query.postID){
      const comments = await CommentModel.find();

      return res.status(200).send({
        code: 1,
        message: "获取所有评论",
        comments: comments
      });
    } else if(req.query.postID){
      const comments = await CommentModel.find({postID: req.query.postID});
      return res.status(200).send({
        code: 1,
        message: "获取所有评论",
        comments: comments
      });
      
    }
  }

  // 删除评论
  static async delete(req, res) {
    const id = req.params.id;
    let isExist = await CommentModel.findOne({_id: id});

    if (!isExist) {
      return res.status(404).send("评论ID不存在");
    }

    await CommentModel.remove({ _id: id });

    return res.status(200).json({
      success: true,
      message: "删除成功"
    });
  }

}

export default Comment;
