## 1. 环境搭建

* 安装 `monogodb`
* 配置用户密码 (记得在 `config` 中修改)
* 安装 `node >= 8.0`
* 安装 `pm2`

## 2. 启动服务

```bash
# 拉取 或 更新代码
$ git clone <url> # Or git pull

# 安装依赖
$ npm install # Or yarn install

# 开发环境启动
$ npm run dev

# 生产环境打包及启动
$ npm run build
$ pm2 start ecosystem.config.js
```


## 3. 其他说明

* 后台管理系统的路径为 `域名/admin`
* 登录的用户在 config 的 users 中配置
* api 路径为 `域名/api`

## 4. 技术栈

* Nuxt.js
* Node.js
* Mongodb
* ElementUI

## 5. 实现的功能

* [x] 文章列表展示
* [x] 撰写文章
* [x] 修改文章
* [x] 删除文章
* [x] 搜索文章
* [x] 给文章点赞
* [x] 添加评论
* [x] 删除评论
* [x] 注册
* [x] 登录
* [x] 修改用户信息
* [x] 权限控制
* [x] 查看主页自己发表过的文章
* [x] ...等

## 6. 系统部分页面
![插图1](http://p1cjg886l.bkt.clouddn.com/readMe1.png)
![插图2](http://p1cjg886l.bkt.clouddn.com/readMe2.png)
![插图3](http://p1cjg886l.bkt.clouddn.com/readMe3.png)
![插图4](http://p1cjg886l.bkt.clouddn.com/readMe4.png)
![插图5](http://p1cjg886l.bkt.clouddn.com/readMe5.png)

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
