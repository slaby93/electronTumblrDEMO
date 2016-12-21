import { CONSUMER_KEY } from './../../constants/tumblr.constants'
export default function getUser (user, limit = 20, offset = 0) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.addEventListener('load', ({ target }) => {
      const resp = JSON.parse(target.responseText)
      resolve(resp)
    })
    xhr.addEventListener('error', (...args) => {
      reject(args)
    })
    xhr.addEventListener('abort', (...args) => {
      reject(args)
    })
    xhr.open('GET', `https://api.tumblr.com/v2/blog/${user}/posts/photo?api_key=${CONSUMER_KEY}&limit=${limit}&offset=${offset}`)
    xhr.send()
  })
}
// https://api.tumblr.com/v2/tagged?tag=gif