import { createAction, handleActions } from 'redux-actions'
import { Map, fromJS } from 'immutable'
// ACTIONS
export const GET_USER = createAction('DEMO/TUMBLR/START_GET_USER')
export const END_GET_USER = createAction('DEMO/TUMBLR/END_GET_USER')
export const END_GET_USER_ERROR = createAction('DEMO/TUMBLR/END_GET_USER_ERROR')
// REDUCER
const defaultState = new Map({})

const reducer = handleActions({
  [GET_USER().type]: function (state, { payload, type, error }) {
    return state
  },
  [END_GET_USER().type]: function (state, { payload, type, error }) {
    const { blog, posts } = payload.response
    return state
      .set('user', fromJS(blog))
      .set('posts', fromJS(posts))
  },
  [END_GET_USER_ERROR().type]: function (state, { payload, type, error }) {
    return state
  },
}, defaultState)

export default reducer
