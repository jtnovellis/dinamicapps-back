import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { routesConfig } from './routes.config'

const app = express()

app.use(cors())
app.use(express.json())

routesConfig(app)

app.get('/', (_, res) => {
  res.send('This is my api')
})

export default app
