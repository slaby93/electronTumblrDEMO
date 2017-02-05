import React from 'react'
import bemClassName from 'bem-classname'

class TextModalPreview extends React.PureComponent {

  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'TextModalPreview')
  }

  render () {
    return (
      <div className={this.classname()}>
                TEXT MODAL PREVIEW
            </div>
    )
  }
}
export default TextModalPreview
