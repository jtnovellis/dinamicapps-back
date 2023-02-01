import User from './user.model'

type UserData = {
  name: string
  email: string
  password: string
  role: string
}

export async function signUp(data: UserData) {
  return await User.create(data)
}

export async function logIn(email: string) {
  return await User.findOne({ email })
}
