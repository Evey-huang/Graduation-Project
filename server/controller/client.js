/**
 * @file 标签控制
 */

const ClientModel = require("../models/client");

import Email from "./email";

const select = {
  id: false,
  __v: false
};

class Client {
  // 创建标签
  static async create(req, res) {
    const client = req.body;

    // validate
    if (!client.name) {
      return res.status(400).send("用户名为空");
    }

    if (!client.company) {
      return res.status(400).send("公司名称为空");
    }

    if (!client.email) {
      return res.status(400).send("邮箱为空");
    }

    if (!client.phone && !client.tel) {
      return res.status(400).send("固定电话或手机号需要选填一个");
    }

    let phoneValidate = /^1[3-578]\d{9}$/;
    if (client.phone && !phoneValidate.test(client.phone)) {
      return res.status(400).send("手机号不合法！");
    }

    let telValidate = /^\(?0[1-9]\d{1,2}\)?[\s\-]?[2-9]\d{3}[\s\-]?\d{3,4}$/;
    if (client.tel && !telValidate.test(client.tel)) {
      return res.status(400).send("电话号码不合法！");
    }
    try {
      const result = await new ClientModel(client).save();
    } catch (err) {
      return res.status(400).send("客户创建失败");
    }
    res.status(200).json({ success: true, message: "客户创建成功" });
    // 发送邮件通知
    Email.send(client);
  }

  // 获取客户列表
  static async get(req, res) {
    let { currentPage, pageSize, keyword = "" } = req.query;
    // 查询参数
    const keywordReg = new RegExp(keyword);

    const query = {
      $or: [{ name: keywordReg }, { company: keywordReg }]
    };

    if (currentPage && pageSize) {
      // 过滤条件
      const options = {
        sort: { _id: 1 },
        page: Number(currentPage),
        limit: Number(pageSize),
        select: select
      };
      const clients = await ClientModel.paginate(query, options);

      return res.status(200).json({
        success: true,
        message: "获取所有客户",
        clients: clients.docs,
        pagination: {
          currentPage: clients.page,
          pageSize: clients.limit,
          total: clients.total
        }
      });
    } else {
      const clients = await ClientModel.find(query, select);

      return res.status(200).json({
        success: true,
        message: "获取所有客户",
        data: {
          clients
        }
      });
    }
  }

  // 更新标签
  static async update(req, res) {
    const client = req.body;
    const id = req.params.id;

    // name validate
    if (!id) {
      return res.status(400).send("客户id为空");
    }
    const isExist = await ClientModel.findById(id);

    if (isExist && String(isExist._id) !== id) {
      return res.status(400).json({
        success: false,
        message: "客户不存在",
        data: {
          tag: isExist
        }
      });
    } else {
      let clientItem = await ClientModel.findByIdAndUpdate(id, client, {
        new: true,
        select
      });

      if (!clientItem) {
        return res.status(400).send("客户ID不存在");
      } else {
        return res.status(200).json({
          success: true,
          message: "客户信息更新成功",
          data: {
            client: clientItem
          }
        });
      }
    }
  }

  // 删除标签
  static async delete(req, res) {
    const id = req.params.id;

    let isExist = await ClientModel.findById(id);

    if (!isExist) {
      return res.status(404).send("客户ID不存在");
    }

    await ClientModel.remove({ _id: id });

    return res.status(200).json({
      success: true,
      message: "删除成功"
    });
  }
}

export default Client;
