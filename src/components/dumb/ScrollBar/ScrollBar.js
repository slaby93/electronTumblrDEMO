// LIBS
import React from 'react'
import bemClassname from 'bem-classname'
import {Scrollbars} from 'react-custom-scrollbars'

// STYLES
import './ScrollBar.scss'

class ScrollBar extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassname.bind(null, 'ScrollBar')
  }

  customThumb (args) {
    const {style} = args
    return <div {...args} className={this.className('thumb')} />
  }

  render () {
    const {children} = this.props
    return (
      <div className={this.className()}>
        <Scrollbars
          className={this.className('area')}
          renderThumbVertical={this.customThumb.bind(this)}>
          {children}
        </Scrollbars>
      </div>
    )
  }
}
export default ScrollBar
