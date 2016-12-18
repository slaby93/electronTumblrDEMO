// ACTIONS
const TEST_ACTION_START = 'DEMO/TEST_ACTION/START'
const TEST_ACTION_END = 'DEMO/TEST_ACTION/END'

// REDUCER
const defaultState = {}
function reducer (state = defaultState, action) {
  return Object.assign(state, {})
}

// ACTION CREATORS

export function testStart () {
  return { type: TEST_ACTION_START }
}
export function testEND () {
  return { type: TEST_ACTION_END }
}

export default reducer