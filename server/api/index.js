import { Router } from 'express'
import jwt from 'jsonwebtoken'

import verifyToken from './verifyToken'

const router = Router()

router.get('/', function (req, res, next) {
  res.status(200)
  res.json({
    name: '天元云api',
    version: '1.0.0',
    author: '天元云团队',
    powered: ['Vue', 'Nuxt.js', 'MongoDB', 'Nodejs', 'Express', 'Nginx']
  })
})


// Mock Users
const users = [
  { username: 'admin', password: 'r00tme' }
]

router.post('/login', function (req, res, next) {
  let { username, password } = req.body
  let user = users.find(item => item.username === username)
  if (user.password === password) {
    let date = new Date()
    let token = jwt.sign({ username, password }, 'sky-cloud', { expiresIn: '3h' })
    res.cookie(
      'token', token,
      {
        expires: date.setTime(date.getTime + 3 * 3600 * 1000),
      }
    )
    res.json({
      success: true,
      message: '登录成功'
    })
  } else {
    res.status(400)
    res.json({
      success: false,
      message: '登陆失败, 用户名或密码错误！'
    })
  }
})



export default router
