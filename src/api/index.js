import { Router } from 'express'

import User from './User'
import Admin from './Admin'

const router = new Router()

router.use('/Admin', Admin)
router.use('/User', User)

export default router