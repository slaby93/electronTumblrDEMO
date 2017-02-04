// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// STYLES
import './Modal.scss'
class Modal extends React.PureComponent {

  constructor () {
    super()
    this.className = bemClassName.bind(null, 'Modal')
  }

  render () {
    const {children, visible} = this.props
    return (
            visible && <div className={this.className()}>
                {children}
            </div>
    )
  }
}

Modal.defaultProps = {
  visible: false
}
Modal.propTypes = {
  visible: React.PropTypes.bool
}

export default Modal
