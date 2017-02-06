// LIBS
import React from 'react'
import ApplicationHeader from './../../dumb/ApplicationHeader/ApplicationHeader'
import {TITLE} from './../../../constants/application.constants'
import bemClassNames from 'bem-classname'
// STYLES
import './ApplicationTopBar.scss'

class ApplicationTopBar extends React.PureComponent {
    constructor() {
        super()
        this.classNames = bemClassNames.bind(null, 'ApplicationTopBar')
    }

    render() {
        return (
            <div className={this.classNames()}>
                <ApplicationHeader
                    title={TITLE}
                    onCloseClick={this.props.closeWindow}
                    onMinimizeClick={this.props.minimizeWindow}
                    onMazimizeClick={this.props.maximizeWindow}
                />
            </div>
        )
    }
}

export default ApplicationTopBar
