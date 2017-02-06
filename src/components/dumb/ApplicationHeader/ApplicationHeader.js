// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// COMPONENTS
import Icon from './../Icon/Icon'
// RESOURCES
import closeIcon from './../../../resources/icons/close.svg'
import hideIcon from './../../../resources/icons/hide.svg'
import expandIcon from './../../../resources/icons/expand.svg'
// STYLES
import './ApplicationHeader.scss'


class ApplicationHeader extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ApplicationHeader')
    }

    onCloseClick() {
        const {onCloseClick} = this.props
        onCloseClick && onCloseClick()
    }

    onMinimizeClick() {
        const {onMinimizeClick} = this.props
        onMinimizeClick && onMinimizeClick()
    }

    onMaximizeClick() {
        const {onMazimizeClick} = this.props
        onMazimizeClick && onMazimizeClick()
    }

    render() {

        return (
            <div className={this.classname()}>
                <div>
                    <Icon
                        className={this.classname('close')}
                        onClick={::this.onCloseClick}
                        icon={closeIcon}
                    />
                    <Icon
                        className={this.classname('minimize')}
                        onClick={::this.onMinimizeClick}
                        icon={hideIcon}
                    />
                    <Icon
                        className={this.classname('maximize')}
                        onClick={::this.onMaximizeClick}
                        icon={expandIcon}
                    />
                </div>
            </div>
        )
    }
}
export default ApplicationHeader