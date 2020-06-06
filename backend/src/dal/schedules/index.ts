import { scheduleModel } from '../../models/schedule'
import { IScheduleModel } from '../../models/schedule/interfaces'
export default class Schedule {
  public addSchedule = async (appointedServices: IScheduleModel): Promise<any> => {
    const savedServices = new scheduleModel(appointedServices)

    return savedServices.save()
  }

  public getSchedules = async (): Promise<any> => {
    return scheduleModel.find({})
  }
  public getSchedulesOfUser = async (userId: string, findFrom: Date | string, findTo: Date | string): Promise<any> => {
    return scheduleModel.find({
      $and: [
        { assignedTo: userId },
        {
          $or: [
            {
              from: { $gte: findFrom },
              to: { $lte: findTo }
            },
            {
              from: { $lte: findFrom },
              to: { $gte: findFrom }
            },
            {
              from: { $lte: findTo },
              to: { $gte: findTo }
            }
          ]
        }
      ]
    })
  }

  public getScheduleById = async (appointmentId: string): Promise<any> => {
    return scheduleModel.find({ _id: appointmentId })
  }

  public deleteScheduleByAppointmentId = async (appointmentId: string) => {
    return scheduleModel.deleteOne({ _id: appointmentId })
  }
}
