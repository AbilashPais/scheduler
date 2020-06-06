import HttpException from '../exceptions/httpException'
class OtpError extends HttpException {
  public status: number
  constructor(status: number, message: string) {
    super(status, message)
    this.name = 'OTP Error'
    this.status = 400
  }
}

export class InvalidPurpose extends OtpError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class InvalidOrExpiredOtp extends OtpError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}
export class InvalidSecretCode extends OtpError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}
