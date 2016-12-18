import { createStore, applyMiddleware, combineReducers } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import { routerReducer } from 'react-router-redux'
import TestDuck from './../ducks/TestDuck'
const reducers = []

reducers.push((state, action) => {
  console.log('ACTION', action)
  return Object.assign({}, state)
})
reducers.push(TestDuck)

const store = createStore(combineReducers({
  reducers,
  routing: routerReducer
}), devToolsEnhancer({ realtime: true }))

export default store