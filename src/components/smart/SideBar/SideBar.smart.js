// LIBS
import React from 'react'
import { connect } from 'react-redux'
import bemClassName from 'bem-classname';
// ACTION
import { testStart, testEND } from  './../../../ducks/TestDuck'
// STYLES
import './SideBar.scss'

class SideBar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.className = bemClassName.bind(null, 'SideBar')

    this.props.dispatch(testStart())
    setTimeout(() => {
      this.props.dispatch(testEND())
    }, 3000)
  }

  render () {
    return (
      <div className={this.className()}>
        <span>SideBar</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);