// LIBS
import React from 'react'
import { Text } from 'react-desktop/macOs';
import bemClassName from 'bem-classname'
// COMPONENTS
import ApplicationTopBar from './../ApplicationTopBar/ApplicationTopBar.smart'
import SideBar from './../SideBar/SideBar.smart'
// STYLES
import './ApplicationWindow.scss'

class ApplicationWindow extends React.PureComponent {

  constructor () {
    super()
    this.className = bemClassName.bind(null, 'ApplicationWindow')
  }

  render () {
    return (
      <div className={this.className()}>
        <ApplicationTopBar/>
        <div className={this.className('ContentWrapper')}>
          <SideBar/>
          <div>
            <Text>Test</Text>
            {this.props.children || ''}
          </div>
        </div>
      </div>
    )
  }
}
export  default ApplicationWindow