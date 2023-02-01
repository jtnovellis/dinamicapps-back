import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { signUp, logIn } from './user.service'
import env from '../../utils/validateEnv'

export async function signUpHandler(req: Request, res: Response) {
  const { email, password, role, name } = req.body
  try {
    const encPassword = await bcrypt.hash(password, 10)
    const user = await signUp({ name, email, password: encPassword, role })
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET_KEY, {
      expiresIn: 60000,
    })
    return res.status(201).json({
      message: 'User created',
      data: { email: user.email, role: user.role, token },
    })
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'User could not been created', error: e })
  }
}

export async function logInHandler(req: Request, res: Response) {
  const { email, password } = req.body
  try {
    const user = await logIn(email)
    if (!user) {
      throw new Error('Some of your credentials are invalid')
    }
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      throw new Error('Some of your credentials are invalid')
    }
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET_KEY, {
      expiresIn: 60000,
    })
    return res.status(200).json({
      message: 'User Logged',
      data: { email: user.email, role: user.role, token },
    })
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'User could not been logged', error: e })
  }
}
