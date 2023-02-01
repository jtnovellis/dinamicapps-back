import mongoose from 'mongoose'
import env from './utils/validateEnv'

export async function connectDB() {
  try {
    await mongoose.connect(env.MONGODB_URI)
    console.log('The connection with mongoDB is OK')
  } catch (err) {
    console.error('An error has been ocurred with the conection with mongoDB')
    process.exit(1)
  }
}
