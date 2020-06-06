import { Request, Response, NextFunction } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next: NextFunction) => {
  global.logger.info(`Request logged: ${req.method}, ${req.path}`)
  next()
}

export default loggerMiddleware
