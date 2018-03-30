import { Router } from 'express'

import users from './users'

const router = Router()

router.get('/', function (req, res, next) {
  res.json({
    success: true
  })
})

// Add USERS Routes
router.use(users)

export default router
