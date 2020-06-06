import { Request, Response, NextFunction } from 'express'
import HttpException from '../../error/exceptions/httpException'

const clientErrorMiddleware = (error: HttpException, req: Request, resp: Response, next: NextFunction) => {
  global.logger.info(`Client Errors Middleware: ${error.status} , ${error.message}`)

  return resp.status(error.status || 500).send({ message: error.message })
}

export default clientErrorMiddleware
