import { Schema, model, Types } from 'mongoose'

interface AppointmentType {
  date: Date
  time: [Date]
  client: Types.ObjectId
}

const appointmentSchema = new Schema<AppointmentType>(
  {
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: [Date],
      required: true,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Appointment = model<AppointmentType>('Appoinment', appointmentSchema)

export default Appointment
