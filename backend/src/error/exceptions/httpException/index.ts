class HttpException extends Error {
  status: number
  message: string
  name: string
  response: any
  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
    this.name = 'HttpException'
  }
}

export default HttpException
