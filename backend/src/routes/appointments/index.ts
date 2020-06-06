import * as express from 'express'
import { IRouteBase } from 'interfaces/common'
import Appointments from '../../controllers/appointments'

export default class AppointmentRoute implements IRouteBase {
  public path = '/'
  public router = express.Router()
  private AppointmentCtrl: Appointments
  constructor() {
    this.initRoutes()
    this.AppointmentCtrl = new Appointments()
  }

  public initRoutes() {
    this.router
      .route('/appointments')
      .post(async (req, res, next) => {
        try {
          const resBody = await this.AppointmentCtrl.createAppointment(req)
          res.send(resBody)
        } catch (error) {
          next(error)
        }
      })
      .get(async (req, res, next) => {
        try {
          const resBody = await this.AppointmentCtrl.getAppointments(req)
          res.send(resBody)
        } catch (error) {
          next(error)
        }
      })

    this.router
      .route('/appointments/:appointmentId')
      .get(async (req, res, next) => {
        try {
          const resBody = await this.AppointmentCtrl.getAppointmentById(req)
          res.send(resBody)
        } catch (error) {
          next(error)
        }
      })
      .put(async (req, res, next) => {
        try {
          const resBody = await this.AppointmentCtrl.updateAppointmentById(req)
          res.send(resBody)
        } catch (error) {
          next(error)
        }
      })
      .delete(async (req, res, next) => {
        try {
          const resBody = await this.AppointmentCtrl.deleteAppointmentById(req)
          res.send(resBody)
        } catch (error) {
          next(error)
        }
      })
  }
}
