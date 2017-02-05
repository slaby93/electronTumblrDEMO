import React from 'react'
import bemClassName from 'bem-classname'
import './ModalFooter.scss'

class ModalFooter extends React.PureComponent {

  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'ModalFooter')
  }

  render () {
    return (
      <div className={this.classname()}>
        {this.props.children}
      </div>
    )
  }
}
export default ModalFooter
