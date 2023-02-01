import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../api/user/user.model'
import env from '../utils/validateEnv'

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      throw new Error('The session has been expired')
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, token] = authorization.split(' ')
    if (!token) {
      throw new Error('The session has been expired')
    }
    const id = jwt.verify(token, env.JWT_SECRET_KEY)
    req.body = {
      ...req.body,
      id,
    }
    const user = await User.findById(req.body.id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    next()
  } catch (e) {
    res.status(401).json({ message: e })
  }
}
