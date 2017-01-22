// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// STYLES
import './ModalBox.scss'

class ModalBox extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'ModalBox')
  }

  render () {
    const {children} = this.props
    return (
      <div className={this.className()}>
        {children}
      </div>)
  }
}
export default ModalBox

