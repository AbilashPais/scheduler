import { Schema, Model, Types } from 'mongoose'
import connection from '../../db/index'
import { IScheduleModel } from './interfaces'
const scheduleSchema = new Schema({
  appointmentId: { type: String, required: true },
  assignedTo: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true }
})

export const scheduleModel: Model<IScheduleModel> = connection.model<IScheduleModel>('schedule', scheduleSchema)
