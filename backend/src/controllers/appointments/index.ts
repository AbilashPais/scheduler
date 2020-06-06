import AppointmentDal from '../../dal/appointments'

import { createAppointmentV } from '../../validators/appointments'
import Schedule from '../../dal/schedules'

export default class Service {
  private appointmentDal: AppointmentDal = new AppointmentDal()
  private scheduleDal: Schedule = new Schedule()
  public createAppointment = async (req: any) => {
    const rawAppointment = req.body
    rawAppointment.createdDate = new Date().toISOString()

    // validate all user ids
    await createAppointmentV(rawAppointment)
    const appointment = await this.appointmentDal.addAppointment(rawAppointment)
    const newRawSchedule: any = {
      appointmentId: appointment._id,
      assignedTo: rawAppointment.appointedTo,
      from: new Date(rawAppointment.startDate),
      to: new Date(rawAppointment.endDate)
    }

    const schedule = await this.scheduleDal.addSchedule(newRawSchedule)

    return { status: 200, message: 'success', data: { appointment } }
  }

  public getAppointments = async (req: any) => {
    const appointments = await this.appointmentDal.getAppointments()

    return { status: 200, message: 'success', data: { appointments } }
  }
  public getAppointmentById = async (req: any) => {
    const { appointmentId } = req.params
    const appointment = await this.appointmentDal.getAppointmentById(appointmentId)

    return { status: 200, message: 'success', data: { appointment } }
  }

  public deleteAppointmentById = async (req: any) => {
    const { appointmentId } = req.params
    const appointment = await this.appointmentDal.deleteAppointmentById(appointmentId)
    if (appointment.nModified > 0) {
      await this.scheduleDal.deleteScheduleByAppointmentId(appointmentId)
    }

    return { status: 200, message: 'success', data: { appointment } }
  }
  public updateAppointmentById = async (req: any) => {
    const { appointmentId } = req.params
    const rawAppointment = req.body

    await createAppointmentV(rawAppointment, false)
    const appointment = await this.appointmentDal.updateAppointmentById(appointmentId, rawAppointment)

    return { status: 200, message: 'success', data: { appointment } }
  }
}
