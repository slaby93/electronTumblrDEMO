// LIBS
import React from 'react'
import { TitleBar } from 'react-desktop/macOs'

class ApplicationTopBar extends React.PureComponent {
  render () {
    return (
      <div>
        <TitleBar
          title='untitled text 5'
          controls
        />
      </div>
    )
  }
}

export default ApplicationTopBar
