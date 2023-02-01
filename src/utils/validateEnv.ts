import { cleanEnv, port, str } from 'envalid'

export default cleanEnv(process.env, {
  MONGODB_URI: str(),
  PORT: port(),
  JWT_SECRET_KEY: str(),
})
