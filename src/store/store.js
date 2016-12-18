import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
const reducers = []
reducers.push((state, action) => {
  console.log('ACTION', action)
  return Object.assign({}, state)
})

const store = createStore(combineReducers({
  reducers,
  routing: routerReducer
}))
export default store