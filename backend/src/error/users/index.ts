import HttpException from '../exceptions/httpException'
class UsersError extends HttpException {
  public status: number
  constructor(status: number, message: string) {
    super(status, message)
    this.name = 'User Error'
    this.status = 400
  }
}
export class UserCreationFailed extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class UserNotFound extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class UserUpdatingFailed extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class UserDeletionFailed extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class InvalidReferralCode extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class UsersProductNotFound extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class usersNotFound extends UsersError {
  constructor(status = 404, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}

export class userSubscriptionNotFound extends UsersError {
  constructor(status = 400, message: string) {
    super(status, message)
    this.message = message
    this.status = status
  }
}
