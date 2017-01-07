// LIBS
import React from 'react'
import { TextInput, ProgressCircle } from 'react-desktop/macOs'
import { Map } from 'immutable'
import bemClassName from 'bem-classname'
// STYLES
import './SearchBox.scss'

class SearchBox extends React.PureComponent {
  constructor () {
    super()
    this.state = new Map({
      input: ''
    })
    this.className = bemClassName.bind(null, 'SearchBox')
  }

  onInputChange (event) {
    const value = event.target.value
    const state = Object.assign(this.state, {}, {
      'input': value
    })
    this.setState(state)
  }

  onSubmit (proxy) {
    const charCode = proxy.charCode
    const ENTER_KEYCODE = 13 // TODO: move to const
    if (charCode !== ENTER_KEYCODE) {
      return
    }
    this.props.onSubmit && this.props.onSubmit(this.state.input)
  }

  render () {
    return (
      <div className={this.className()}>
        <div className={this.className('searchInput')}>
          <TextInput
            focusRing={false}
            onChange={this.onInputChange.bind(this)}
            onKeyPress={this.onSubmit.bind(this)}
            width={170}
          />
          <ProgressCircle
            size={25}
            color='white'
            hidden={!this.props.showLoader}
          />
        </div>
      </div>
    )
  }
}

export default SearchBox
