export default {
  toArrayOfObject: (object: any) => {
    if (!Array.isArray(object)) {
      object = [object]
    }

    return object
  },
  otp: (): number => {
    const min = 10000
    const max = 99999
    const random = Math.floor(Math.random() * (+max - +min)) + +min

    return random
  },
  expirationDateTime: (minutes: number): any => {
    const expDateTime = new Date(new Date().getTime() + minutes * 60000).toISOString()

    return expDateTime
  },
  generateSecret: (length: number): string => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }
}
