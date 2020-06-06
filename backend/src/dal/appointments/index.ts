import { appointmentModel } from '../../models/appointment'
import { IAppointmentModel } from '../../models/appointment/interfaces'
export default class Appointment {
  public addAppointment = async (appointment: IAppointmentModel): Promise<any> => {
    const savedServices = new appointmentModel(appointment)

    return savedServices.save()
  }

  public getAppointments = async (): Promise<any> => {
    return appointmentModel.find({ 'state.value': { $ne: 'deleted' } })
  }

  public getAppointmentById = async (appointmentId: string): Promise<any> => {
    return appointmentModel.find({ _id: appointmentId })
  }
  public updateAppointmentById = async (appointmentId: string, updateData: any): Promise<any> => {
    const find = { _id: appointmentId }
    const update = { $set: { ...updateData } }
    const options = { new: true, upsert: false, runValidator: true }

    return appointmentModel.findOneAndUpdate(find, update, options)
  }
  public deleteAppointmentById = async (appointmentId: string, reason = ''): Promise<any> => {
    return appointmentModel.update({ _id: appointmentId }, { $set: { 'state.value': 'deleted', reason: reason } })
  }
}
