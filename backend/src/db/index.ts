import * as mongoose from 'mongoose'
import config from '../config'
const connection = mongoose.createConnection(config.dataBase.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
export default connection
