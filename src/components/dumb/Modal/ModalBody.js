// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// STYLES
import './ModalBody.scss'

class ModalBody extends React.PureComponent {
  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'ModalBody')
  }

  render () {
    return (
      <div className={this.classname()}>
                MODAL BODY
                {this.props.children}
      </div>
    )
  }
}
export default ModalBody
