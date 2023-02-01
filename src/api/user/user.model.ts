import { InferSchemaType, model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ['client', 'admin'],
        message: '{VALUE} is not supported',
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

type UserType = InferSchemaType<typeof userSchema>

const User = model<UserType>('User', userSchema)

export default User
