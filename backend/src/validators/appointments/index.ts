import Schedule from '../../dal/schedules'
const scheduleDal = new Schedule()
export const createAppointmentV = async (rawAppointment: any, checkSchedule = true): Promise<boolean> => {
  const createdDate = new Date(rawAppointment.createdDate)
  const startDate = new Date(rawAppointment.startDate)
  const endDateExpected = new Date(rawAppointment.endDateExpected)
  const endDate = rawAppointment.endDate !== '' ? new Date(rawAppointment.endDate) : ''
  const { servicesFor, appointedTo } = rawAppointment

  if (endDate && endDate < startDate) {
    throw new Error('End date should be grater than start date')
  }

  const preSchedules = await scheduleDal.getSchedulesOfUser(appointedTo, startDate, endDate)
  if (preSchedules.length > 0 && checkSchedule == true) {
    throw new Error('appointedTos Time Slot already booked')
  }

  return true
}
