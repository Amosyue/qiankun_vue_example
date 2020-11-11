import service from './service'
import Qs from 'qs'
function _http(type, url, params = {}, contentType = 'json') {
  let contType = contentType == 'json' ? 'application/json' : 'application/x-www-form-urlencoded'
  let paramstranform = contentType == 'json' ? params : Qs.stringify(params)
  if (type == "get") {
    return new Promise((resolve, reject) => {
      service({
          method: 'get',
          url: url,
          params: params
        })
        .then((res) => {
          resolve(res.data)
        }).catch(err => {
          if (err == "Error: timeout of 300000ms exceeded") {
            console.log("服务器请求超时")
          }
          reject(err)
        })
    })
  } else {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url: url,
        headers: {
          'Content-Type': contType
        },
        data: paramstranform
      })
      .then((res) => {
        resolve(res.data)
      }).catch(err => {
        if (err == "Error: timeout of 300000ms exceeded") {
          console.log("服务器请求超时")
        }
        reject(err)
      })
    })
  }
}

export default _http