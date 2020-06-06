export interface ICredentials {
  readonly username: string
  readonly password: string
  readonly siteKey: string
}

export interface IRouteBase {
  initRoutes(): any
}

export interface IControllerResponse {
  status: number
  message: string
  data: any
}
