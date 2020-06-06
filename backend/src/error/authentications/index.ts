import HttpException from '../exceptions/httpException'
class AuthenticationError extends HttpException {
  public status: number
  constructor(status: number, message: string) {
    super(status, message)
    this.name = 'Authentication Error'
    this.status = 400
  }
}

export class InvalidUser extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class InvalidPassword extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}

export class InvalidOrExpiredCredentials extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}

export class InvalidToken extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}

export class InvalidLoginOtp extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}

export class AccountLocked extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}
export class OBACFailed extends AuthenticationError {
  constructor(status: number, message: string) {
    super(status, message)
    this.message = `${message}`
    this.status = status
  }
}
