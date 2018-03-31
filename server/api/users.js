import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
  { username: 'admin', password: 'r00tme' }
]

router.post('/login', function (req, res, next) {
  let { username, password } = req.body
  let user = users.find(item => item.username === username)
  if (user.password === password) {
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
