import curl from '../../helpers/curl'
import config from '../../config/index'

export default class Sample {
  private baseUrl = config.services.sample.url

  getUserRatings = async (data: object): Promise<object> => {
    return await curl.sendRequest('post', `${this.baseUrl}/xyz`, { auth: {} }, data)
  }
}
