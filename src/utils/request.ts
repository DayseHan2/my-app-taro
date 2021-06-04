import Taro from '@tarojs/taro'
import { API_USER, API_USER_LOGIN } from '@constants/api'
 
const CODE_SUCCESS = 200
 
/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export default async function request(options) {
  const { url, params = {}, method = 'GET', showToast = true} = options
  const header = {
    'app-token': '$2a$10$ZEdT69drmUWNiHl.HpqnmeLfXs0UiPJlUY3tUs2MwT00DxN3oiBjO'
    // headers['Authorization'] = Authorization;
  }
  if (method === 'POST') {
    header['content-type'] = 'application/json;charset=utf-8'
  }
 
  return Taro.request({
    url,
    method,
    data: params,
    header
  }).then(async (res) => {
    const { code, data } = res.data
    if (code !== CODE_SUCCESS) {
      return Promise.reject(res.data)
    }
    return data
  }).catch((err) => {
    if (showToast) {
      Taro.showToast({
        title: err && err.errorMsg,
        icon: 'none'
      })
    }
 
    return Promise.reject({ message: '网络错误', ...err })
  })
}

