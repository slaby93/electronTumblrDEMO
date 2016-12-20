// ACTIONS
const GET_USER = 'DEMO/TUMBLR/START_GET_USER'
const END_GET_USER = 'DEMO/TUMBLR/END_GET_USER'
const END_GET_USER_ERROR = 'DEMO/TUMBLR/END_GET_USER_ERROR'

// REDUCER
const defaultState = {}
function reducer (state = defaultState, action) {
  if (typeof actionHandler[ action.type ] === 'function') {
    const newState = actionHandler[ action.type ](state, action)
    return Object.assign(state, {}, newState)
  }
  return state
}

// ACTION CREATORS

export function getUser () {
  return { type: GET_USER }
}
export function endGetUser (user) {
  return { type: END_GET_USER, payload: { user } }
}
export function endGetUserError () {
  return { type: END_GET_USER_ERROR }
}

// ACTION HANDLER
const actionHandler = {}

actionHandler[ END_GET_USER ] = function (state, action) {
  const { user } = action.payload
  return Object.assign(state, {}, {
    user: user.response.blog
  })
}
export default reducer
