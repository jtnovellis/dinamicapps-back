import { Request, Response } from 'express'
import User from '../user/user.model'
import Appointment from './appointment.model'

export async function createAppointment(req: Request, res: Response) {
  const { date, time, id } = req.body
  try {
    const user = await User.findById(id)
    const appointment = await Appointment.create({
      date,
      time,
      client: user?._id,
    })
    return res
      .status(201)
      .json({ message: 'Appointment created', data: appointment })
  } catch (e) {
    return res
      .status(400)
      .json({ message: 'Appointment could not been created', error: e })
  }
}
