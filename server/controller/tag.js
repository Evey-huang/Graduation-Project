/**
 * @file 标签控制
 */

const TagModel = require("../models/tag");

const select = {
  id: false,
  __v: false
};

class Tag {
  // 创建标签
  static async create(req, res) {
    const tag = req.body;
    console.log(tag);

    // name validate
    if (!tag.name) {
      return res.status(400).send("标签名为空");
    }

    if (await TagModel.findOne({ name: tag.name }).exec()) {
      return res.status(400).json({
        success: false,
        message: "标签已存在"
      });
    }

    await new TagModel(tag)
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          message: "标签创建成功"
        });
      })
      .catch(() => {
        return res.status(400).send("标签创建失败");
      });
  }

  // 获取标签
  static async get(req, res) {
    let { currentPage, pageSize, keyword = "" } = req.query;
    // 查询参数
    const keywordReg = new RegExp(keyword);

    const query = {
      $or: [{ name: keywordReg }, { description: keywordReg }]
    };

    if (currentPage && pageSize) {
      // 过滤条件
      const options = {
        sort: { _id: 1 },
        page: Number(currentPage),
        limit: Number(pageSize),
        select: select
      };
      const tags = await TagModel.paginate(query, options);
      return res.status(200).json({
        success: true,
        message: "获取所有标签",
        data: {
          tags: tags.docs,
          pagination: {
            currentPage: tags.page,
            pageSize: tags.limit,
            total: tags.total
          }
        }
      });
    } else {
      const tags = await TagModel.find(query, select);
      return res.status(200).json({
        success: true,
        message: "获取所有标签",
        data: {
          success: true,
          message: "获取所有标签",
          data: {
            tags: tags
          }
        }
      });
    }
  }

  // 更新标签
  static async update(req, res) {
    const tag = req.body;
    const id = req.id;

    console.log(id);
    // name validate
    if (!tag.name) {
      return res.status(400).send("标签名为空");
    }

    // if new category's name duplicated
    const isExist = await TagModel.findOne({ name: tag.name });

    if (isExist && String(isExist._id) !== id) {
      return res.status(400).json({
        success: false,
        message: "标签已存在",
        data: {
          tag: isExist
        }
      });
    } else {
      let tagItem = await TagModel.findByIdAndUpdate(id, tag, {
        new: true,
        select
      });

      if (!tagItem) {
        return res.status(400).send("标签ID不存在");
      } else {
        return res.status(200).json({
          success: true,
          message: "标签更新成功",
          data: {
            tag: tagItem
          }
        });
      }
    }
  }

  // 删除标签
  static async delete(req, res) {
    const id = req.params.id;

    // name validate
    let isExist = await TagModel.findOne({ _id: id });

    if (!isExist) {
      return res.status(404).send("标签ID不存在");
    }

    await TagModel.remove({ _id: id });

    return res.status(200).json({
      success: true,
      message: "标签删除成功"
    });
  }
}

export default Tag;
