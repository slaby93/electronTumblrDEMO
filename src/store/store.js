// LIBS
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools'
import {Map} from 'immutable'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux-immutable'
// REDUCERS
import routerReducer from './routeReducer'
import TumblrReducer from './../ducks/Tumblr'
import SidebarReducer from './../ducks/Sidebar'
import ModalReducer from './../ducks/Modal'

const rootReducer = combineReducers({
  'tumblr': TumblrReducer,
  'sidebar': SidebarReducer,
  'modal': ModalReducer,
  routing: routerReducer
})
const initialState = new Map({})
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools({realtime: true})(applyMiddleware(thunk))
)

export default store
