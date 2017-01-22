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
        super();
        this.className = bemClassName.bind(null, 'ModalHeader')
    }

    render() {
        return (
            <div className={this.className()}>
                <Icon nameClass="closeIcon" icon={closeIcon}/>
            </div>
        )
    }
}

ModalHeader.propTypes = {}

ModalHeader.defaultProps = {}

export default ModalHeader;