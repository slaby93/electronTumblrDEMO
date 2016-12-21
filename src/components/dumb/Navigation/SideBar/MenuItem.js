// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// STYLES
import './MenuItem.scss'

class MenuItem extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'MenuItem')
  }

  render () {
    return (
      <div className={this.className()}>
        <div className={this.className('title')}>
          <span>{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export  default MenuItem