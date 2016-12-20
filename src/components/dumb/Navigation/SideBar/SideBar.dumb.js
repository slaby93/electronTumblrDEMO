import './SideBar.scss'
import React from 'react'
import bemClassname from 'bem-classname'
class SideBar extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SideBar')
  }

  render () {
    return (
      <div className={this.className()}>

      </div>
    )
  }
}

export default SideBar