import React from 'react'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-desktop/macOs'
import getUserAction from './../../../actions/get-user'

import bemClassName from 'bem-classname'
class BasicContainer extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      inputedUserName: ''
    }
    this.className = bemClassName.bind(this, 'BasicContainer')
  }

  requestForUser () {
    const userName = this.state.inputedUserName
    this.props.dispatch(getUserAction(userName))
  }

  onUserNameChange (e) {
    this.setState(Object.assign(this.state, {
      inputedUserName: e.target.value
    }))
  }

  render () {
    return (
      <div className={this.className()}>
        BasicContainer
        <TextInput onChange={this.onUserNameChange.bind(this)} />
        <Button onClick={this.requestForUser.bind(this)}>Request</Button>
        {/* <textarea>Result...</textarea> */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer)
