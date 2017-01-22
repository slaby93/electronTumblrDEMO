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

class ApplicationWindow extends React.PureComponent {

  constructor () {
    super()
    this.className = bemClassName.bind(null, 'ApplicationWindow')
  }

  render () {
    return (
      <div className={this.className()}>
        <ApplicationTopBar />
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
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationWindow)
