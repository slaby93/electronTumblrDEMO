// ACTIONS
const GET_USER = 'DEMO/TUMBLR/START_GET_USER'
const END_GET_USER = 'DEMO/TUMBLR/END_GET_USER'

// REDUCER
const defaultState = {}
function reducer (state = defaultState, action) {
  console.log('TUMBLR_ACTION', action)
  return Object.assign(state, {})
}

// ACTION CREATORS

export function getUser () {
  return { type: GET_USER }
}
export function endGetUser () {
  return { type: END_GET_USER }
}

export default reducer
