import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import TumblrReducer from './../ducks/Tumblr'
import SidebarReducer from './../ducks/Sidebar'
import { Map } from 'immutable'
const reducers = combineReducers({
  'tumblr': TumblrReducer,
  'sidebar': SidebarReducer,
  routing: routerReducer
})
const store = createStore(
  reducers,
  composeWithDevTools({ realtime: true })(applyMiddleware(thunk))
)

export default store
