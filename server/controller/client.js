import { Z_UNKNOWN } from "zlib";

/**
 * @file 用户控制
 */

const ClientModel = require("../models/client");


const select = {
  id: false,
  __v: false
};

class Client {
  // 创建用户
  static async create(req, res) {
    const client = req.body;

    // validate
    if(client.type == 'signup'){
      if (!client.name) {
        return res.status(400).send("用户名为空");
      }
  
      if (!client.password) {
        return res.status(400).send("密码为空");
      }

      if (!client.checkPass) {
        return res.status(400).send("请再次输入密码");
      }
      let phoneValidate = /^1[3-578]\d{9}$/;
      var userData = await ClientModel.find({"name": client.name});
      if(userData.length > 0){
        return res.status(200).json({
          code: 1,
          message: "用户名已存在",
          status: false
        });
      }
      try {
        const result = await new ClientModel(client).save();
      } catch (err) {
        return res.status(400).send("用户创建失败");
      }
      res.status(200).json({ success: true, message: "用户创建成功" });
    } else if(client.type == 'signin') {
      const result = await ClientModel.findOne({"name": client.name},function(err,response){
        if(response) {
          if(response.password == client.password) {
            var cookieVal = {name: client.name};
            res.cookie('login',JSON.stringify(cookieVal),{expires: new Date(Date.now() + 3600000*24*7)});
            
            ClientModel.update({"name": client.name},{$set: {"updateAt": new Date()}},function(err,resp){
            })
           return res.status(200).send({ code: 0,success: true, message: "用户登录成功",data: {"id": response.id,"name": response.name} });
          } else{
           return res.status(200).send({code: 1,message: "密码错误"});
          }
        } else{
         return res.status(200).send({code: 1,message: "用户名错误"});
        }
      })
    }
  }

  // 获取用户列表
  static async get(req, res) {
    let { currentPage, pageSize, keyword = "" } = req.query;
    // 查询参数
    const keywordReg = new RegExp(keyword);

    const query = {
      $or: [{ name: keywordReg }, { password: keywordReg }]
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
        message: "获取所有用户",
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
        message: "获取所有用户",
        data: {
          clients
        }
      });
    }
  }

  // 更新用户
  static async update(req, res) {
    const client = req.body;
    const id = req.params.id;

    // name validate
    if (!id) {
      return res.status(400).send("用户id为空");
    }
    const isExist = await ClientModel.findById(id);

    if (isExist && String(isExist._id) !== id) {
      return res.status(400).json({
        success: false,
        message: "用户不存在",
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
        return res.status(400).send("用户ID不存在");
      } else {
        return res.status(200).json({
          success: true,
          message: "用户信息更新成功",
          data: {
            client: clientItem
          }
        });
      }
    }
  }

  // 删除用户
  static async delete(req, res) {
    const id = req.params.id;

    let isExist = await ClientModel.findById(id);

    if (!isExist) {
      return res.status(404).send("用户ID不存在");
    }

    await ClientModel.remove({ _id: id });

    return res.status(200).json({
      success: true,
      message: "删除成功"
    });
  }
}

export default Client;
