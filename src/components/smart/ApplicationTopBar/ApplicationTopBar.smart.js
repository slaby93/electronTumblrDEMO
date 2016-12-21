// LIBS
import React from 'react'
import { TitleBar } from 'react-desktop/macOs'
import { TITLE } from './../../../constants/application.constants'
import bemClassNames from 'bem-classname'
// STYLES
import './ApplicationTopBar.scss'

class ApplicationTopBar extends React.PureComponent {
  constructor () {
    super()
    this.classNames = bemClassNames.bind(null, 'ApplicationTopBar')
  }

  render () {
    return (
      <div className={this.classNames()}>
        <TitleBar
          title={TITLE}
          controls
          transparent={true}
        />
      </div>
    )
  }
}

export default ApplicationTopBar
