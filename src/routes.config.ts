import type { Express } from 'express'
import usersRoute from './api/user'

export function routesConfig(app: Express) {
  app.use('/auth/local', usersRoute)
}
