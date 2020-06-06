import { Document } from 'mongoose'
export interface IAppointmentModel extends Document {
  createdDate: string
  createdBy: string
  servicesFor: string
  appointedTo: string

  startDate: string
  endDate: string

  endDateExpected: string
  priceExpected?: { currency: string; amount: number }

  priceFull?: { currency: string; amount: number }
  discount?: { currency: string; amount: number }

  priceFinal?: { currency: string; amount: number }

  state?: { value: string; reason: string }

  appointedServices?: [
    {
      serviceId: string
      state: string
    }
  ]
}
