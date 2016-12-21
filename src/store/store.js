import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import routerReducer  from './routeReducer'
import TumblrReducer from './../ducks/Tumblr'
import SidebarReducer from './../ducks/Sidebar'
import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'

const rootReducer = combineReducers({
  'tumblr': TumblrReducer,
  'sidebar': SidebarReducer,
  routing: routerReducer
})
const initialState = new Map({})
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools({ realtime: true })(applyMiddleware(thunk))
)

export default store
