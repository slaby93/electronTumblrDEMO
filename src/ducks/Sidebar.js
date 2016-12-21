import { createAction, handleActions } from 'redux-actions'
import { List, Map, fromJS } from 'immutable'
const defaultState = new List([
  new Map({
    name: 'Blog',
    path: '/'
  }),
  new Map({
    name: 'Post',
    path: '/post'
  })
])

const reducer = handleActions({
  '': state => state
}, defaultState)

export default reducer
