import * as express from 'express'
import { IRouteBase } from 'interfaces/common'
import config from '../../config'
export default class DefaultRoute implements IRouteBase {
  public path = '/'
  public router = express.Router()
  constructor() {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.route('/version').get(async (req, res, next) => {
      res.send({ version: '1.0.0' })
    })
  }
}
