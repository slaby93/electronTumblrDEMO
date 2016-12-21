import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store/store'
// COMPONENTS
import ApplicationWindow from './smart/ApplicationWindow/ApplicationWindow.smart'
import BasicContainer from './smart/Basic/Basic.smart'
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toObject();
  }
})

class Main extends React.PureComponent {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={ApplicationWindow}>
            <IndexRoute component={BasicContainer}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
export default Main
