import { Router } from 'express'
import { authenticate } from '../../utils/authenticate'
import { createAppointment } from './appointment.controller'

const router = Router()

router.post('/new', authenticate, createAppointment)

export default router
