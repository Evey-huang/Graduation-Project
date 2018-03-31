import { Router } from 'express'

import users from './users'

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

// Add USERS Routes
router.use(users)

export default router
