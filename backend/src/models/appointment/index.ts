import { Schema, Model, Types } from 'mongoose'
import connection from '../../db/index'
import { IAppointmentModel } from './interfaces'
import { durationSchema } from '../commonSchemas/index'

const appointedServiceSchema = new Schema({
  task: { type: String },
  state: {
    type: String,
    enum: ['booked', 'completed', 'canceled'],
    default: 'booked',
    required: true
  },
  duration: durationSchema
})
const appointmentSchema = new Schema({
  createdDate: {
    type: Date,
    required: true,
    default: () => {
      return new Date().toISOString()
    }
  },
  appointedTo: { type: String, required: true },

  startDate: { type: Date, required: true },
  subject: { type: String },
  endDateExpected: { type: Date },
  endDate: { type: Date },
  state: {
    value: {
      type: String,
      enum: ['pending', 'postponed', 'processing', 'canceled', 'completed', 'deleted'],
      required: true,
      default: 'pending'
    },
    reason: { type: String }
  },

  appointedServices: [appointedServiceSchema]
})

export const appointmentModel: Model<IAppointmentModel> = connection.model<IAppointmentModel>(
  'appointment',
  appointmentSchema
)
