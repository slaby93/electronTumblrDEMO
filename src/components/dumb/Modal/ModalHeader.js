// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// COMPONENTS
import Icon from './../Icon/Icon'
// RESOURCES
import closeIcon from '../../../resources/icons/close.svg'
// STYLES
import './ModalHeader.scss'

class ModalHeader extends React.PureComponent {
    constructor() {
        super()
        this.className = bemClassName.bind(null, 'ModalHeader')
    }

    onCloseIconClick() {
        const {onCloseIconClick} = this.props
        onCloseIconClick && onCloseIconClick()
    }

    render() {
        return (
            <div className={this.className()}>
                {this.props.children}
                <Icon onClick={this.onCloseIconClick.bind(this)} className='closeIcon' icon={closeIcon}/>
            </div>
        )
    }
}

ModalHeader.propTypes = {
    onCloseIconClick: React.PropTypes.func
}

ModalHeader.defaultProps = {}

export default ModalHeader
