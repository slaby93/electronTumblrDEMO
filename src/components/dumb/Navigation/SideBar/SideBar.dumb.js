import './SideBar.scss'
import React from 'react'
import bemClassname from 'bem-classname'
class SideBar extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'SideBar')
  }

  render () {
    console.log('PROPS',this.props)
    return (
      <div className={this.className()}>
      </div>
    )
  }
}

export default SideBar
