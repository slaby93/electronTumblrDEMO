// LIB
import React from 'react'
import bemClassName from 'bem-classname'
// COMPONENTS
import SearchBox from './../SearchBox/SearchBox'
import UserPresentation from './../UserPresentation/UserPresentation'
// STYLES
import './BasicTopBar.scss'

class BasicTopBar extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'BasicTopBar')
  }

  render () {
    return (
      <div className={this.className()}>
        <SearchBox
          onSubmit={this.props.onSubmit}
          showLoader={this.props.showLoader}
          buttonText='Search'
        />
        <UserPresentation
          name='daniel'
        />
      </div>
    )
  }

}

export default BasicTopBar
