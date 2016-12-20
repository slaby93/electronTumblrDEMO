import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import TumblrReducer from './../ducks/Tumblr'

const reducers = combineReducers({
  'tumblr': TumblrReducer,
  routing: routerReducer
})
const store = createStore(
  reducers,
  composeWithDevTools({ realtime: true })(applyMiddleware(thunk))
)

// }), devToolsEnhancer({ realtime: true }))

export default store