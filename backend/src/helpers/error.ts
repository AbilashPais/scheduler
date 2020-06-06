export default {
  formatError: (error: any) => {
    if (error.response) {
      throw (error.data = error.response)
    }

    throw (error.data = error.name)
  }
}
