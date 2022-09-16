import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  timeout:5000,
  baseURL:'http://localhost:8080/api/'
})
instance.interceptors.request.use(config => {
  config.data = qs.stringify(config.data)
  config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
  return config
})
instance.interceptors.response.use(res => {
  const {status} = res
  switch (status) {
    case 200:
      console.log('success')
      break
    case 500:
      console.log('error')
      break
  }
  return res
})
export const get = (url:string,data?:any) => {
  return new Promise((resolve, reject) => {
    instance.get(url,{params:data}).then(res => {
      resolve(res)
    }).catch(e => {
      reject(e)
    })
  })
}
export const post = (url:string,data?:any) => {
  return new Promise((resolve, reject) => {
    instance.post(url,data).then(res => {
      resolve(res)
    }).catch(e => {
      reject(e)
    })
  })
}
export default instance