import * as express from 'express'
import { Application } from 'express'
import Logger from '../utils/logger'
import appConfig from '../config'
import * as appRootPath from 'app-root-path'
declare global {
  //eslint-disable-next-line
  namespace NodeJS {
    //eslint-disable-next-line
    interface Global {
      logger: any
      appConfig: any
      rootPath: any
    }
  }
}

class App {
  public app: Application
  public port: number

  constructor(appInit: { port: number; defaults: any; middleWares: any; routes: any; errorHandlers: any }) {
    this.setGlobals()
    global.logger.info('Application Initialization Started')
    this.app = express()
    this.port = appInit.port
    this.setDefaults(appInit.defaults)
    this.middlewares(appInit.middleWares)

    this.routes(appInit.routes)
    this.assets()
    this.template()
    this.errorHandlers(appInit.errorHandlers)
  }
  private setGlobals() {
    global.appConfig = appConfig
    global.logger = new Logger().getLogger()
    global.rootPath = appRootPath
  }
  private setDefaults(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    global.logger.info('Application Setting Defaults')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }
  private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    global.logger.info('Application Setting Middlewares')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
    global.logger.info('Application Setting Routes')
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }

  private errorHandlers(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
    global.logger.info('Application Setting Error Handlers')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  private assets() {
    global.logger.info('Application Setting Static Assets')
    this.app.use(express.static('public'))
    this.app.use(express.static('views'))
  }

  private template() {
    global.logger.info('Application Setting View Template')
    this.app.set('view engine', 'jade')
  }

  public listen() {
    this.app.listen(this.port, () => {
      global.logger.info(`Application listening on the port :${this.port}`)
    })
  }
}
export default App
