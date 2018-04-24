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

# 开发环境启动
$ npm run dev

# 生产环境 打包 及 启动
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


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
