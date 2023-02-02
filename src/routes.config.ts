import type { Express } from 'express'
import usersRoute from './api/user'
import appointmentRoute from './api/appointment'

export function routesConfig(app: Express) {
  app.use('/auth/local', usersRoute)
  app.use('/api/appointment', appointmentRoute)
}
