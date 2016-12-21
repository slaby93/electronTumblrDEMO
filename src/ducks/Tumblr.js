import { createAction, handleActions } from 'redux-actions'

// ACTIONS
export const GET_USER = createAction('DEMO/TUMBLR/START_GET_USER')
export const END_GET_USER = createAction('DEMO/TUMBLR/END_GET_USER')
export const END_GET_USER_ERROR = createAction('DEMO/TUMBLR/END_GET_USER_ERROR')
// REDUCER
const defaultState = {}

const reducer = handleActions({
  [GET_USER().type]: function (state, action) {
    console.log('ACTION', action)
    return state
  },
  [END_GET_USER().type]: function (state, action) {
    console.log('ACTION', action)
    return state
  },
  [END_GET_USER_ERROR().type]: function (state, action) {
    console.log('ACTION', action)
    return state
  },
}, defaultState)

export default reducer
