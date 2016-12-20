// LIBS
import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-desktop/macOs'
import bemClassName from 'bem-classname'
// COMPONENTS
import ApplicationTopBar from './../ApplicationTopBar/ApplicationTopBar.smart'
import SideBarContainer from './../SideBar/SideBar.smart'
// STYLES
import './ApplicationWindow.scss'
// LOGIC
// import {} from './'

class ApplicationWindow extends React.PureComponent {

  constructor () {
    super()
    this.className = bemClassName.bind(null, 'ApplicationWindow')
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className={this.className()}>
        <ApplicationTopBar/>
        <div className={this.className('ContentWrapper')}>
          <SideBarContainer/>
          <div>
            <Text>Test</Text>
            {this.props.children || ''}
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export  default connect(mapStateToProps, mapDispatchToProps)(ApplicationWindow)