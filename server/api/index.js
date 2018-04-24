import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";
import verifyToken from "./verifyToken";
import config from "../config";

// Mock Users
const users = [{ username: "admin", password: "r00tme" }];

import upload from "./upload";
router.use(upload);

import Tag from "../controller/tag";
import Article from "../controller/article";
import Like from "../controller/like";
import Client from "../controller/client";
import Comment from "../controller/comment"

router
  .all("*",(req,res,next) => {
    next();
  })
  .get("/", (req, res, next) => {
    res.status(200);
    res.json({
      name: "天元云api",
      version: "1.0.0",
      author: "天元云团队",
      powered: ["Vue", "Nuxt.js", "MongoDB", "Nodejs", "Express", "Nginx"]
    });
  })
  // 登录
  .post("/login", (req, res, next) => {
    let { username, password } = req.body;
    let user = users.find(item => item.username === username);
    if (user.password === password) {
      let date = new Date();
      let token = jwt.sign({ username, password }, config.token, {
        expiresIn: "3h"
      });
      res.cookie("token", token, {
        expires: new Date(Date.now() + 3 * 3600 * 1000),
        httpOnly: true
      });
      res.json({
        success: true,
        message: "登录成功"
      });
    } else {
      res.status(400);
      res.json({
        success: false,
        message: "登陆失败, 用户名或密码错误！"
      });
    }
  })
  .post("/signup",(req,res,next) => {
    var data = req.body;
    if(data.name) {
      res.clearCookie("login");
      res.status(200).send({code: 0, message: "退出登录成功"});
    } else{
      res.status(200).send({code: 1, message: "退出登录失败"});
    }
  })

  // 标签管理
  .get("/tag", Tag.get)
  .post("/tag", verifyToken, Tag.create)
  .put("/tag/:id", verifyToken, Tag.update)
  .delete("/tag/:id", verifyToken, Tag.delete)

  // 文章管理
  .get("/article", Article.list)
  .post("/article", verifyToken, Article.create)
  .get("/article/:id", Article.get)
  .put("/article/:id", verifyToken, Article.update)
  .delete("/article/:id", verifyToken, Article.delete)

  // 喜欢文章
  .put("/like/:id", Like.like)

  // 评论
  .get("/comment", verifyToken, Comment.get)
  .post("/comment", verifyToken, Comment.create)
  .delete("/comment/:id", verifyToken, Comment.delete)

  // 客户管理
  .get("/client", verifyToken, Client.get)
  .post("/client", Client.create)
  .put("/client/:id", verifyToken, Client.update)
  .delete("/client/:id", verifyToken, Client.delete);

export default router;
