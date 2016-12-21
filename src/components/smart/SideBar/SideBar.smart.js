// LIBS
import React from 'react'
import { connect } from 'react-redux'
import bemClassName from 'bem-classname'
// COMPONENTS
import SideBar from './../../dumb/Navigation/SideBar/SideBar.dumb'

class SideBarContainer extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'SideBarContainer')
  }

  render () {

    return (
      <div className={this.className()}>
        <SideBar
          items={this.props.items}
        />
      </div>
    )
  }
}
function mapStateToProps (state) {
  console.log('MAP STATE TO PROPS',state)
  return {

  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer)
