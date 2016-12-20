import { CONSUMER_KEY } from './../../constants/tumblr.constants'
export default function getUser (user) {
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
    xhr.open('GET', `https://api.tumblr.com/v2/blog/${user}/info?api_key=${CONSUMER_KEY}`)
    xhr.send()
  })
}
