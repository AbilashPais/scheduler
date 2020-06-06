import * as pkg from '../../package.json'
export default {
  app: {
    name: pkg.name,
    version: pkg.version,
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
  },
  dataBase: {
    url: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/schedule'
  },
  services: {
    sample: { url: 'http://localhost:3000' }
  }
}
