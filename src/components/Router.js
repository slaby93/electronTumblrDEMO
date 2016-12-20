import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store/store'
import ApplicationWindow from './smart/ApplicationWindow/ApplicationWindow.smart'
const history = syncHistoryWithStore(hashHistory, store)

class Main extends React.PureComponent {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={ApplicationWindow} />
        </Router>
      </Provider>
    )
  }
}
export default Main
