import { Document, Types } from 'mongoose'
export interface IScheduleModel extends Document {
  appointmentId: string | Types.ObjectId
  assignedTo: string | Types.ObjectId
  from: string | Date
  to: string | Date
}
