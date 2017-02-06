// LIBS
import React from 'react'
import {connect} from 'react-redux'
import bemClassName from 'bem-classname'
// COMPONENTS
import ApplicationTopBar from './../ApplicationTopBar/ApplicationTopBar.smart'
import SideBarContainer from './../SideBar/SideBar.smart'
// STYLES
import './ApplicationWindow.scss'
// LOGIC
const remote = require('electron').remote;

class ApplicationWindow extends React.PureComponent {

    constructor() {
        super()
        this.className = bemClassName.bind(null, 'ApplicationWindow')
    }

    maximize() {
        console.log('TEST')
        const window = remote.getCurrentWindow()
        if (!window.isMaximized()) {
            window.maximize();
        } else {
            window.unmaximize();
        }
    }

    minimize() {
        const window = remote.getCurrentWindow()
        window.minimize()
    }

    close() {
        const window = remote.getCurrentWindow()
        window.close()
    }

    render() {
        return (
            <div className={this.className()}>
                <ApplicationTopBar
                    closeWindow={::this.close}
                    maximizeWindow={::this.maximize}
                    minimizeWindow={::this.minimize}
                />
                <div className={this.className('ContentWrapper')}>
                    <SideBarContainer />
                    <div className={this.className('BodyWrapper')}>
                        {this.props.children || ''}
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationWindow)
