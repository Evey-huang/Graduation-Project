const jwt = require('jsonwebtoken')
const config = require('../server/config')

export default async ({req, res, route, redirect}, next) => {
  if(process.server) {
     if (route.path.indexOf('admin') > -1) {
      if (!req.cookies.token) {
        return redirect('/login')
      }
      let tokenContent
      try {
        tokenContent = await jwt.verify(req.cookies.token, config.token)
      } catch (err) {
        // Token 过期
        console.log(req.cookies.token, config.token)
        console.log(err)
        if (err.name === 'TokenExpiredError') {
          return redirect('/login')
        }
        // Token 验证失败
        return redirect('/login')
      }
    }
  }
  return await next()
}
