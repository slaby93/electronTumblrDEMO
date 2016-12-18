// LIBS
import React from 'react'
import bemClassName from 'bem-classname';
// STYLES
import './SideBar.scss'

class SideBar extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'SideBar')
  }

  render () {
    return (
      <div className={this.className()}>
        <span>SideBar</span>
      </div>
    )
  }
}

export default SideBar;