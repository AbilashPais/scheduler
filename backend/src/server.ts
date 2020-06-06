import App from './app'
import config from './config/index'
/**Middleware */
import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import * as cors from 'cors'

/**Routes */
import DefaultRoute from './routes/default'

import AppointmentRoute from './routes/appointments'

/**Error Handlers */

import ClientErrors from './middleware/clientErrors'
const app = new App({
  port: config.app.port,
  defaults: [],
  middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true }), loggerMiddleware, cors()],
  routes: [new DefaultRoute(), new AppointmentRoute()],
  errorHandlers: [ClientErrors]
})

app.listen()
