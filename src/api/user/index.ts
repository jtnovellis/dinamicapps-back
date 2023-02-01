import { Router } from 'express'
import { signUpHandler, logInHandler } from './user.controller'

const router = Router()

router.post('/signup', signUpHandler)
router.post('/login', logInHandler)

export default router
