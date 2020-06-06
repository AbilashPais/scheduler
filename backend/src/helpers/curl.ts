import axios from 'axios'

const requestMethod = (_method: string, _endpoint: string, _options: object, _body: object): Promise<object> => {
  let methodObj: Promise<object>
  if (_method === 'post') {
    methodObj = axios.post(_endpoint, _body, _options)
  } else if (_method === 'get') {
    methodObj = axios.get(_endpoint, _options)
  } else if (_method === 'put') {
    methodObj = axios.put(_endpoint, _body, _options)
  } else if (_method === 'patch') {
    methodObj = axios.patch(_endpoint, _body, _options)
  } else if (_method === 'delete') {
    methodObj = axios.delete(_endpoint, _options)
  } else {
    methodObj = axios.post(_endpoint, _body, _options)
  }

  return methodObj
}

export default {
  sendRequest: async (_method: string, _endpoint: string, _options: object, _body: object): Promise<object> => {
    const responseObject = await requestMethod(_method, _endpoint, _options, _body)

    return responseObject
  }
}
