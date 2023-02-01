import app from './app'
import env from './utils/validateEnv'
import { connectDB } from './database'

const PORT = env.PORT || 8080

app.listen(PORT, async () => {
  await connectDB()
  console.log(`The server is running on port http://localhost:${PORT}`)
})
